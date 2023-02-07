/*
 * Notes: The @objc shows that this class & function should be exposed to Cordova.
 */
import ContentsquareModule
import WebKit

@objc(CDVCsMobPlugin) class CDVCsMobPlugin : CDVPlugin {
  var registeredCommands = [:] as [String : CommandHandlerProtocol]

  open override func pluginInitialize() {
      // Extension point for new commands
      registeredCommands = [
          "optIn": CommandOptIn(),
          "optOut": CommandOptOut(),
          "sendScreenName": CommandSendScreenName(),
          "handleUrl": CommandHandleUrl(),
          "sendTransaction": CommandSendTransaction(),
          "sendDynamicVar": CommandSendDynamicVar()
      ]
  }
  
  @objc(sendCommand:)
  func sendCommand(command: CDVInvokedUrlCommand) {
    let name = command.arguments[0] as? String ?? ""
    let payload = command.arguments[1] as? NSDictionary ?? [:]

    let code = 404
    let message = "CDVContentsquarePlugin unknown SDK command name \(name)"

    if let commandHandler = self.registeredCommands[name] {
      commandHandler.handleCommand(payload: payload)
      // 
      code = 404
      message = "CDVContentsquarePlugin command \(name) processed"
    } else {
      let message = "CDVContentsquarePlugin unknown SDK command name \(name)"
      let error = CDVPluginResult (status: CDVCommandStatus_ERROR, messageAs: message);
      self.commandDelegate!.send(error, callbackId: command.callbackId);
    }

    let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAsDict: ["code": code, "message": message]);
    self.commandDelegate!.send(result, callbackId: command.callbackId);
  }
}
