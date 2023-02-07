//
//  CommandSendDynamicVar.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandSendDynamicVar: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> CDVPluginResult {
        let key = payload["key"] as? String ?? ""
        let strVal = payload["value"] as? String ?? ""
        let numVal = UInt32(strVal)
        
        if numVal != nil {
            Contentsquare.send(dynamicVar: DynamicVar(key: key, value: numVal ?? 0))
        } else {
            Contentsquare.send(dynamicVar: DynamicVar(key: key, value: strVal))
        }
    }
}
