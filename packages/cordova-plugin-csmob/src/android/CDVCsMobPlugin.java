package com.variations.cordova.csmob;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class CDVCsMobPlugin extends CordovaPlugin {
  public static final String TAG = "CDVCsMobPlugin";

  public Map<String, ICommandHandler> commandHandlers = new HashMap<>();
  /**
   * Constructor.
   */
  public CDVCsMobPlugin() {
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
    if ("sendCommand".equals(action)) {
      JSONObject command = args.getJSONObject(0);
      String type = command.getString("type");
      JSONObject payload = command.getJSONObject("payload");
      ICommandHandler commandHandler = this.commandHandlers.get(type);

      if (commandHandler != null) {
        commandHandler.handle(payload, this);
        JSONObject r = new JSONObject();
        r.put("code", 200);
        r.put("message", String.format("%s:: Command %s processed", TAG, type));
        callbackContext.success(r);
      } else {
        JSONObject r = new JSONObject();
        r.put("code", 404);
        r.put("message", String.format("%s:: Command handler for %s not found", TAG, type));
        callbackContext.error(r);
      }
    }
    JSONObject r = new JSONObject();
    r.put("code", 404);
    r.put("message", String.format("%s:: Plugin action %s not found", TAG, action));
    callbackContext.error(r);

    return true;
  }
}
