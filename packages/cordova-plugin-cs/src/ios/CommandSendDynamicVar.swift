//
//  CommandSendDynamicVar.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandSendDynamicVar: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void {
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
