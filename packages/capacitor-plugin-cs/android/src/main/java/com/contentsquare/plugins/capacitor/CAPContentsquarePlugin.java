package com.contentsquare.plugins.capacitor;

import android.util.Log;

public class CAPContentsquarePlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
