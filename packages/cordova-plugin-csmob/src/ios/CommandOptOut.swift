//
//  CommandOptOut.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandOptOut: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> CDVPluginResult {
        Contentsquare.optOut();
    }
}
