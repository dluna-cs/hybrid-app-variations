//
//  CommandHandleUrl.swift
//  com.contentsquare.plugins.cordova
//
//  Created by Contentsquare Mobile Team on 20/1/23.
//

import ContentsquareModule
import WebKit

class CommandHandleUrl: CommandHandlerProtocol {
    func handleCommand(payload: NSDictionary) -> Void {
      let urlParam = payload["url"] as? String ?? ""
      let url = URL(string: urlParam);
      
      Contentsquare.handle(url: url!);
    }
}
