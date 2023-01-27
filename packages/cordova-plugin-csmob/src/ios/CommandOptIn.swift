//
//  CommandOptIn.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandOptIn: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> CDVPluginResult {
        Contentsquare.optIn();
        
        return CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "CDVContentsquarePlugin processing 'optIn'");
    }
}
