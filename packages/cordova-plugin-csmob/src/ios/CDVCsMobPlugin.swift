/*
 * Notes: The @objc shows that this class & function should be exposed to Cordova.
 */

@objc(CDVCsMobPlugin) class CDVCsMobPlugin : CDVPlugin {

  @objc(optIn:) // Declare your function name.
  func optIn(command: CDVInvokedUrlCommand) { // write the function code.
  /* 
   * Always assume that the plugin will fail.
   * Even if in this example, it can't.
   */
  // Set the plugin result to fail.
  var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR, messageAs: "CDVContentsquarePlugin 'optIn' method Failed");
  Contentsquare.optIn();
  // Set the plugin result to succeed.
  pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "CDVContentsquarePlugin processing 'optIn'");
  // Send the function result back to Cordova.
  self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
  }
}