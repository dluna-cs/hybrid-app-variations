/*
 * Notes: The @objc shows that this class & function should be exposed to Cordova.
 */
import ContentsquareModule
import WebKit

@objc(CDVCsMobPlugin) class CDVCsMobPlugin : CDVPlugin {
    
    var registeredCommands = [
        "optin": [CommandOptIn()],
        "optout": [CommandOptOut()],
        "sendScreenName": [CommandSendScreenName()],
        "handleUrl": [CommandHandleUrl()],
        "sendTransaction": [CommandSendTransaction()],
        "sendDynamicVar": [CommandSendDynamicVar()],
        "handleUrl": [CommandHandleUrl()]
    ]

  @objc(sendCommand:) // Declare your function name.
  func sendCommand(command: CDVInvokedUrlCommand) { // write the function code.
      
    let name = command.arguments[0] as? String ?? ""
    
    if let commandHandlers = registeredCommands[name] {
      // TODO: wait for all executions or fire and forget
      for handler in commandHandlers {
          handler.handleCommand(command: command)
      }
    } else {
      print("Unknown command \(name)")
    }
  }
}
