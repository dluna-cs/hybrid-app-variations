//
//  CommandSendScreenName.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandSendScreenName: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> CDVPluginResult {
        let name = payload["name"] as? String ?? ""
        
        Contentsquare.send(screenViewWithName: name);
    }
}
