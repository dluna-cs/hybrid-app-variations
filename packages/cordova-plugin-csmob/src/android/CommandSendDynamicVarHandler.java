package com.variations.cordova.csmob;

import com.contentsquare.android.Contentsquare;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import org.json.JSONObject;

public class CommandSendDynamicVarHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, CordovaPlugin plugin) {
        try {
            String key = payload.getString("key");
            String strValue = payload.getString("value");
            Integer intValue = this.tryParse(strValue);

            if (intValue != null) {
                Contentsquare.send(key, intValue);
            } else {
                Contentsquare.send(key, strValue);
            }
        } catch (JSONException jsonException) {
            // TODO: we fall here if there is no key/value defined. Report bad usage?
        }
    }

    private Integer tryParse(String text) {
        try {
            return Integer.parseInt(text);
        } catch (NumberFormatException e) {
            return null;
        }
    }
}
