//
//  CommandOptIn.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandOptIn: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void {
        Contentsquare.optIn();
    }
}
