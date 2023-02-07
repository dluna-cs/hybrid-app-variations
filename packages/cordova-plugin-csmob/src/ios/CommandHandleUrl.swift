//
//  CommandHandleUrl.swift
//  Variations
//
//  Created by David Luna Bistuer on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandHandleUrl: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> CDVPluginResult {
      let urlParam = payload["url"] as? String ?? ""
      let url = URL(string: urlParam);
      
      Contentsquare.handle(url: url!);
    }
}
