package com.contentsquare.plugins.cordova;

import com.contentsquare.android.Contentsquare;

import org.apache.cordova.Plugin;
import org.json.JSONException;
import org.json.JSONObject;

public class CommandSendScreenNameHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, Plugin plugin) {
        try {
            String name = payload.getString("name");
            Contentsquare.send(name);
        } catch (JSONException jsonException) {
            // TODO: we fall here if there is no name defined. Report bad usage?
        }
    }
}
