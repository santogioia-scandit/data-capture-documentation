---
sidebar_position: 1
toc_max_heading_level: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

This page describes how to integrate the Scandit Data Capture SDK into your Flutter project.

## Prerequisites

- The latest stable version of the Flutter SDK (for example through the latest Android Studio).
- A project with minimum iOS deployment target of 13.0 or higher. Or an Android project with target SDK version 23 (Android 6, Marshmallow) or higher, and Kotlin 1.7.21 or higher.
- A valid Scandit Data Capture SDK license key. You can sign up for a free [test account](https://ssl.scandit.com/dashboard/sign-up?p=test&utm%5Fsource=documentation).

:::note
Android devices running the Scandit Data Capture SDK need to have a GPU or the performance will drastically decrease.
:::

## Get a License Key

1. [Sign up](https://ssl.scandit.com/dashboard/sign-up?p=test) or [Sign in](https://ssl.scandit.com/dashboard/sign-in) to your Scandit account
2. Create a project
3. Create a license key

If you have a paid subscription, please reach out to [Scandit Support](mailto:support%40scandit.com) if you need a new license key.

## Add the SDK

Currently we support adding the Scandit Data Capture SDK Flutter plugins to your project in two ways. The simplest way is to use the [pub.dev](https://pub.dev/) registry, alternatively you can manually download the plugins and add them to your project.

### 1. Create a new project (optional)

If you do not have a Flutter project yet that you’ll use, you should create a new one (using your IDE of choice: Android Studio or IntelliJ).

### 2a. Add the Scandit Data Capture SDK from the pub.dev registry

To add our plugins from the pub.dev registry, you need to open the pubspec.yaml file located inside the app folder, and add required Scandit plugin(s) under dependencies. In the following snippet we’re adding [ScanditBarcodeCapture API](barcode-capture/api.html)

```yml
dependencies:
  flutter:
    sdk: flutter
  scandit_flutter_datacapture_barcode: <version>
```

### 2b. Add the Scandit Data Capture SDK manually

After you download the [archive](https://ssl.scandit.com/dashboard/downloads) containing all the plugins, unzip the archive. It includes the available Flutter plugins, including the scandit-flutter-datacapture-core plugin that all other plugins depend on.

Move the required Scandit Data Capture SDK Flutter plugins to some subdirectory within your app folder, e.g. to libs/ and then open the pubspec.yaml file located inside the app folder, and add required Scandit plugin(s) under dependencies. In the following snippet we’re adding [ScanditBarcodeCapture API](barcode-capture/api.html)

```yml
dependencies:
  flutter:
    sdk: flutter
  scandit_flutter_datacapture_barcode:
    path: libs/scandit-flutter-datacapture-barcode
```

:::note
You don’t need to add the dependency to the scandit-flutter-datacapture-core plugin in the pubspec.yaml. However, all the other Scandit Flutter plugins depend internally on it, so you still have to copy it to the same location as the other plugins.
:::

### 3. Install Scandit Data Capture SDK Flutter plugin(s)

Run from terminal

```sh
flutter pub get
```

Or perform the instalation from from Android Studio/IntelliJ: click Packages get in the action ribbon at the top of pubspec.yaml.

## Additional Information

:::note

On Android, the Scandit SDK uses content providers to initialize the scanning capabilities properly. If your own content providers depend on the Scandit SDK, choose an **initOrder** lower than 10 to make sure the SDK is ready first.

If not specified, **initOrder** is zero by default and you have nothing to worry about.

Check [the official `<provider>` documentation](https://developer.android.com/guide/topics/manifest/provider-element).
:::

- Camera Permissions: When using the Scandit Data Capture SDK you will want to set the camera as the frame source for various capture modes. On Android, you have to request camera permissions in your own application before starting scanning. To see how you can achieve this, take a look at our samples: [Run our Sample Apps](samples/run-samples.html).
- Remember that, if you want to use the camera as the frame source for barcode, text and label capture, you need to set the “Privacy - Camera Usage Description” field in the Info.plist file for iOS.
