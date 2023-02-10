package com.contentsquare.plugins.cordova;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class CDVContentsquarePlugin extends CordovaPlugin {
  public static final String TAG = "CDVContentsquarePlugin";

  public Map<String, ICommandHandler> commandHandlers = new HashMap<>();
  /**
   * Constructor.
   */
  public CDVContentsquarePlugin() {
  }

  /**
   * Sets the context of the Command. This can then be used to do things like
   * get file paths associated with the Activity.
   *
   * @param cordova The context of the main Activity.
   * @param webView The CordovaWebView Cordova is running in.
   */
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);

    // Register any handler here
    this.commandHandlers.put("optIn", new CommandOptInHandler());
    this.commandHandlers.put("optOut", new CommandOptOutHandler());
    this.commandHandlers.put("handleUrl", new CommandHandleUrlHandler());
    this.commandHandlers.put("sendDynamicVar", new CommandSendDynamicVarHandler());
    this.commandHandlers.put("sendScreenName", new CommandSendScreenNameHandler());
    this.commandHandlers.put("sendTransaction", new CommandSendTransactionHandler());
  }

  /**
   * Executes the request and returns PluginResult.
   *
   * @param action            The action to execute.
   * @param args              JSONArray of arguments for the plugin.
   * @param callbackContext   The callback id used when calling back into JavaScript.
   * @return                  True if the action was valid, false if not.
   */
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    JSONObject result = new JSONObject();

    try {
      // Assume error
      String message = String.format("%s:: Action %s not supported", TAG, action);
      int code = 400;

      if ("sendCommand".equals(action)) {
        String name = args.getString(0);
        JSONObject payload = args.getJSONObject(0);
        ICommandHandler commandHandler = this.commandHandlers.get(name);
        Boolean existHandler = commandHandler != null;

        // Update the possible error
        message = String.format("%s:: Command %s processed", TAG, name);
        code = 404;

        if (existHandler) {
          commandHandler.handle(payload, this);
          message = String.format("%s:: Command %s processed", TAG, name);
          code = 200;
        }

        result.put("code", code);
        result.put("message", message);
      }
    } catch (JSONException jsonException) {
      result.put("code", 500);
      result.put("message", String.format("%s:: Exception extracting command data %s", TAG, jsonException.getMessage()));
    }

    // We should success always but we can send an error code
    callbackContext.success(result);
    return true;
  }
}
