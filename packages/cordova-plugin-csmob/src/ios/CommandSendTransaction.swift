//
//  CommandSendTransaction.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandSendTransaction: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> CDVPluginResult {
        let id = payload["id"] as? String ?? ""
        let value = payload["value"] as? Float ?? 0
        let currency = payload["currency"] as? String ?? ""
        
        Contentsquare.send(transaction: CustomerTransaction(id: id, value: value, currency: currency))
    }
}
