package com.contentsquare.plugins.cordova;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;

public interface ICommandHandler {
    void handle (JSONObject payload, CordovaPlugin plugin);
}
