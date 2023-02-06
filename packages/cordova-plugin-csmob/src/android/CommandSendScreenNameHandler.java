package com.variations.cordova.csmob;

import com.contentsquare.android.Contentsquare;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import org.json.JSONObject;

public class CommandSendScreenNameHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, CordovaPlugin plugin) {
        try {
            String name = payload.getString("name");
            Contentsquare.send(name);
        } catch (JSONException jsonException) {
            // TODO: we fall here if there is no name defined. Report bad usage?
        }
    }
}
