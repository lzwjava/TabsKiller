//
//  SafariWebExtensionHandler.swift
//  TabsKiller Extension
//
//  Created by Zhiwei Li on 2026/5/21.
//

import SafariServices
import os.log

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        guard let item = context.inputItems.first as? NSExtensionItem,
              let userInfo = item.userInfo else {
            return
        }

        let messageInfo: [String: Any]
        if #available(macOS 11.0, *) {
            guard let msg = userInfo[SFExtensionMessageKey] as? [String: Any] else {
                return
            }
            messageInfo = msg
        } else {
            guard let msg = userInfo["message"] as? [String: Any] else {
                return
            }
            messageInfo = msg
        }

        os_log(.default, "Received message from browser.runtime.sendNativeMessage: %@", messageInfo as NSDictionary)

        let response = NSExtensionItem()
        if #available(macOS 11.0, *) {
            response.userInfo = [SFExtensionMessageKey: ["echo": messageInfo]]
        } else {
            response.userInfo = ["message": ["echo": messageInfo]]
        }

        context.completeRequest(returningItems: [response], completionHandler: nil)
    }

}
