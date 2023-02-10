//
//  CommandHandlerProtocol.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

protocol CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void
}
