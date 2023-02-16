package com.contentsquare.plugins.capacitor;

import android.util.Log;

public class CAPContentSqaurePlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
