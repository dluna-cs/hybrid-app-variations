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
      
    let data = command.arguments[0] as? NSDictionary ?? [:]
    let type = data["type"] as? String ?? ""
    let payload = data["payload"] as? NSDictionary ?? [:]
    
    if let commandHandler = self.registeredCommands[type] {
      let result = commandHandler.handleCommand(payload: payload)
      self.commandDelegate!.send(result, callbackId: command.callbackId);
    } else {
      let message = "CDVContentsquarePlugin unknown SDK command type \(type)"
      let error = CDVPluginResult (status: CDVCommandStatus_ERROR, messageAs: message);
      self.commandDelegate!.send(error, callbackId: command.callbackId);
    }
  }
}
