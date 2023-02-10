//
//  CommandSendTransaction.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandSendTransaction: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void {
        let id = payload["id"] as? String ?? ""
        let value = payload["value"] as? Float ?? 0
        let currency = payload["currency"] as? String ?? ""
        
        Contentsquare.send(transaction: CustomerTransaction(id: id, value: value, currency: currency))
    }
}
