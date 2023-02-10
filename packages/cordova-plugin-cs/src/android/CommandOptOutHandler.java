package com.variations.cordova.csmob;

import com.contentsquare.android.Contentsquare;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;

public class CommandOptOutHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, CordovaPlugin plugin) {
        Contentsquare.optOut(plugin.cordova.getActivity().getApplicationContext());
    }
}
