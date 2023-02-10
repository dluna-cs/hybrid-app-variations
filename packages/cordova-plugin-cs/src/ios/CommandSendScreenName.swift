//
//  CommandSendScreenName.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandSendScreenName: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void {
        let name = payload["name"] as? String ?? ""
        
        Contentsquare.send(screenViewWithName: name);
    }
}
