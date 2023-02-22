/*
 * Notes: The @objc shows that this class & function should be exposed to Cordova.
 */
import ContentsquareModule
import WebKit

@objc(CDVContentsquarePlugin) class CDVContentsquarePlugin : CDVPlugin {
  var registeredCommands = [:] as [String : CommandHandlerProtocol]

  override func pluginInitialize() {
      super.pluginInitialize()

      // Inject bridge
      if let realWebView = self.webView as? WKWebView {
          Contentsquare.register(webView: realWebView)
          print("Webview injection successful")
      } else {
          print("Webview injection failed")
      }

      // Extension point for new commands
      registeredCommands = [
          "handleUrl": CommandHandleUrl(),
          "optIn": CommandOptIn(),
          "optOut": CommandOptOut(),
          "sendDynamicVar": CommandSendDynamicVar(),
          "sendScreenName": CommandSendScreenName(),
          "sendTransaction": CommandSendTransaction()
      ]
  }
  
  @objc(sendCommand:)
  func sendCommand(command: CDVInvokedUrlCommand) {
    let name = command.arguments[0] as? String ?? ""
    let payload = command.arguments[1] as? NSDictionary ?? [:]

    var code = 404
    var message = "CDVContentsquarePlugin unknown SDK command name \(name)"

    if let commandHandler = self.registeredCommands[name] {
      commandHandler.handleCommand(payload: payload)
      code = 200
      message = "CDVContentsquarePlugin command \(name) processed"
    }

    let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: ["code": code, "message": message]);
    self.commandDelegate!.send(result, callbackId: command.callbackId);
  }
}
