---
sidebar_position: 1
toc_max_heading_level: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

This page describes how to integrate the Scandit Data Capture SDK into your iOS project. The SDK can be added via:

- [CocoaPods](#cocoapods)
- [Carthage](#carthage)
- [Swift Package Manager](#swift-package-manager)
- [Import in Source Code](#import-in-source-code)

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

- Latest version of Xcode
- iOS project with a deployment target of iOS 13.0+
- Scandit license key

## CocoaPods

[CocoaPods](https://cocoapods.org/) is a dependency manager for Swift and Objective-C Cocoa projects. To integrate the Scandit Data Capture SDK into your Xcode project using CocoaPods, specify it in your `Podfile`:

```ruby
pod 'ScanditBarcodeCapture', '~> |shortversion|'
```

:::note
The `|shortversion|` placeholder in the snippet above should be replaced with the short version you want to use. For example, `6.20`.

Additionally, this command also download `ScanditCaptureCore` as `ScanditBarcodeCapture` depends on it.
:::

## Carthage

[Carthage](https://github.com/Carthage/Carthage) is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks. To integrate the Scandit Data Capture SDK into your Xcode project using Carthage, specify it in your `Cartfile`:

```ruby
binary "https://ssl.scandit.com/sdk/download/carthage/ScanditBarcodeCapture.json"
binary "https://ssl.scandit.com/sdk/download/carthage/ScanditCaptureCore.json"
```

## Swift Package Manager

To integrate the Scandit Data Capture SDK into your Xcode project using Swift Package Manager:

1. Navigate to __File__ > __Add Package Dependencies__:
    ![Add Package Dependencies](./img/add-via-spm.png)
2. Enter the URL of the Scandit Data Capture SDK repository in the search field: `https://github.com/Scandit/datacapture-spm`
3. Select __Add Package__. When prompted, select the products you want to use.:
    ![Select Products](./img/choose_products.png).
4. Select __Add Package__ again to add the selected products to your project.

## Import in Source Code

To import the Scandit Data Capture SDK into your source code, add the following import statement:

<Tabs>
<TabItem value="swift" label="Swift">

```swift
import ScanditCaptureCore
import ScanditBarcodeCapture
```

</TabItem>
<TabItem value="objectivec" label="Objective-C">

```objectivec
@import ScanditCaptureCore;
@import ScanditBarcodeCapture;
```

</TabItem>
</Tabs>
