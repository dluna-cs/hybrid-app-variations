package com.contentsquare.plugins.capacitor;

import android.util.Log;

public class CAPContentsquare {
    public static final String TAG = "CAPContentsquare";

    public Map<String, ICommandHandler> commandHandlers = new HashMap<>();
    /**
    * Constructor.
    */
    public CAPContentsquare() {
        // Register any handler here
        this.commandHandlers.put("optIn", new CommandOptInHandler());
        this.commandHandlers.put("optOut", new CommandOptOutHandler());
        this.commandHandlers.put("handleUrl", new CommandHandleUrlHandler());
        this.commandHandlers.put("sendDynamicVar", new CommandSendDynamicVarHandler());
        this.commandHandlers.put("sendScreenName", new CommandSendScreenNameHandler());
        this.commandHandlers.put("sendTransaction", new CommandSendTransactionHandler());
    }

    public void sendCommand(PluginCall call, Plugin plugin) {
        JSONObject result = new JSONObject();

        try {
            // Assume error
            String message = String.format("%s:: Bad request", TAG);
            int code = 400;

            String type = args.getString("type");
            JSONObject payload = args.getObject("payload");
            ICommandHandler commandHandler = this.commandHandlers.get(type);
            Boolean existHandler = commandHandler != null;

            // Update the possible error
            message = String.format("%s:: Command %s unknown, check spelling", TAG, type);
            code = 404;

            if (existHandler) {
                commandHandler.handle(payload, plugin);
                message = String.format("%s:: Command %s processed", TAG, type);
                code = 200;
                

                result.put("code", code);
                result.put("message", message);
            }
        } catch (JSONException jsonException) {
            result.put("code", 500);
            result.put("message", String.format("%s:: Exception extracting command data %s", TAG, jsonException.getMessage()));
        } catch (Exception exception) {
            result.put("code", 500);
            result.put("message", String.format("%s:: Unknown exception %s", TAG, exception.getMessage()));
        }

        // We should success always but we can send an error code
        return result;
    }
}
