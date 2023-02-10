//
//  CommandOptOut.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandOptOut: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void {
        Contentsquare.optOut();
    }
}
