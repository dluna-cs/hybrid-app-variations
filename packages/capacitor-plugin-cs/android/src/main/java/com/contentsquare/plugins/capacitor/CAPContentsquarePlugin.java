package com.contentsquare.plugins.capacitor;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CAPContentsquare")
public class CAPContentsquarePlugin extends Plugin {

    private CAPContentsquare implementation = new CAPContentsquare();

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void sendCommand(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);

        
    }
}
