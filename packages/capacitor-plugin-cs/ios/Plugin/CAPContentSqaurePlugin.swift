import Foundation

@objc public class CAPContentSqaurePlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
