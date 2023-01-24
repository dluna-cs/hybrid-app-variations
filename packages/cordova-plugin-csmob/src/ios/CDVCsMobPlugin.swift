/*
 * Notes: The @objc shows that this class & function should be exposed to Cordova.
 */
import ContentsquareModule
import WebKit

@objc(CDVCsMobPlugin) class CDVCsMobPlugin : CDVPlugin {
    
    var registeredCommands = [
        "optin": CommandOptIn(),
        "optout": CommandOptOut(),
        "sendScreenName": CommandSendScreenName(),
        "handleUrl": CommandHandleUrl(),
        "sendTransaction": CommandSendTransaction(),
        "sendDynamicVar": CommandSendDynamicVar(),
        "handleUrl": CommandHandleUrl()
    ] as [String : CommandHandlerProtocol]

  @objc(sendCommand:) // Declare your function name.
  func sendCommand(command: CDVInvokedUrlCommand) { // write the function code.
      
    let name = command.arguments[0] as? String ?? ""
    
      if let commandHandler = registeredCommands[name] {
      // TODO: wait for execution or fire and forget ???
      commandHandler.handleCommand(command: command)
    } else {
      print("Unknown command \(name)")
    }
  }
}
