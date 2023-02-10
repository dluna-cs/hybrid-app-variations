package com.contentsquare.plugins.cordova;

import com.contentsquare.android.Contentsquare;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;

public class CommandOptInHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, CordovaPlugin plugin) {
        Contentsquare.optIn(plugin.cordova.getActivity().getApplicationContext());
    }
}
