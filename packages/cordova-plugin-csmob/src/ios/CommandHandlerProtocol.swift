//
//  CommandHandlerProtocol.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

protocol CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void
}
