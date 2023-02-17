package com.contentsquare.plugins.cordova;

import com.contentsquare.android.Contentsquare;

import org.apache.cordova.Plugin;
import org.json.JSONObject;

public class CommandOptOutHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, Plugin plugin) {
        Contentsquare.optOut(plugin.getContext());
    }
}
