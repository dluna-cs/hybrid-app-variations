package com.contentsquare.plugins.cordova;

import org.apache.cordova.Plugin;
import org.json.JSONObject;

public interface ICommandHandler {
    void handle (JSONObject payload, Plugin plugin);
}
