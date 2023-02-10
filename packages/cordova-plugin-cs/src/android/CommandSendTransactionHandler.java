package com.variations.cordova.csmob;

import com.contentsquare.android.Contentsquare;
import com.contentsquare.android.api.model.Transaction;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import org.json.JSONObject;

public class CommandSendTransactionHandler implements ICommandHandler {
    @Override
    public void handle(JSONObject payload, CordovaPlugin plugin) {
        try {
            String id = payload.getString("id");
            String value = payload.getString("value");
            String currency = payload.getString("currency");

            Transaction.TransactionBuilder builder = Transaction.builder(Float.parseFloat(value), currency);
            if (!id.isEmpty()) {
                builder.id(id);
            }
            Contentsquare.send(builder.build());
        } catch (JSONException jsonException) {
            // TODO: we fall here if there is no name defined. Report bad usage?
        } catch (NumberFormatException numberError) {
            // TODO: bad data failure. Report?
        }
    }
}
