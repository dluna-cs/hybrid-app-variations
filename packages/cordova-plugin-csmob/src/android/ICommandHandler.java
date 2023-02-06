package com.variations.cordova.csmob;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;

public interface ICommandHandler {
    void handle (JSONObject payload, CordovaPlugin plugin);
}
