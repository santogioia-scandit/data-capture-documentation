---
sidebar_position: 1
sidebar_label: 'Overview'
title: 'Scandit Express'
displayed_sidebar: expressSidebar
framework: express
tags: [express]
keywords:
  - express
---

Scandit Express is an application that enables you to instantly add barcode scanning to any existing app or software tool on a smart device.It requires no software changes or coding effort, and is compatible with any app or system, even those that cannot be modified. By adding a keyboard that has a scan button above the standard keys (a keyboard wedge), it allows users to scan barcodes directly into any input field.


Scandit Express is built for enterprise use and supports distribution through mobile device management (MDM) and enterprise mobility management (EMM) systems.

## Minimum Requirements

| Platform | Minimum Version | Camera |
|----------|------------------|--------|
| Android  | 9.0              | 720p, Autofocus and fixed-focus |
| iOS      | 12.0             | 720p, Autofocus and fixed-focus |

## UI/UX

The Scandit Express user interface (UI) is designed to resemble a smartphone camera. It also includes features to reduce user workload and frustration, such as aiming assist, batch scanning, and visual, sound, and haptic feedback. There is also an advanced _Find_ mode that helps frontline workers and customers instantly locate items using an augmented-reality (AR) interface.

![Scandit Express](/img/express/express_ui.png)

Depending on the mode selected, the user has a choice of scanning barcodes one by one or batch scanning many codes simultaneously. For batch scanning, users can scan as many barcodes as they want and verify them in a list, before inputting them into the desired field.

### Scanning Modes

Scandit Express offers multiple scanning modes:

* **Accuracy**: Scans one barcode out of many in the camera’s field of view. It detects all barcodes available and provides an AR overlay to help the user select one target barcode.
* **Speed**: Scans multiple barcodes in quick succession. It removes the need to tap the screen repeatedly.
* **Batch**: Scans all visible barcodes and stores them in a list.
* **Find**: Scans multiple items simultaneously and highlights the ones needed using an AR overlay.

## Security and Compliance

Scandit Express follows the same [security and compliance standards](https://www.scandit.com/company/security/) as all other Scandit products.

Your data belongs to you, and we will never collect it unless authorized by you. No keystrokes are recorded, no images captured for barcode decoding are stored on the device after the scan is complete, and no images are transmitted. Scandit Express is fully functional without network access.

* Devices register with Scandit’s servers to track the total number of devices on which Scandit Express is used.
* No personally identifiable information stored on the device (such as name, phone number, email address, or device ID) is ever processed or transmitted by Scandit Express.
* All communication is encrypted.
* No connectivity into your network and no access to your IT system is required.

# Available Configurations

There are many configuration options and functionalities available in Scandit Express. This section provides an overview of the different configuration options and how to set them up.

## Configuration Options

### Recognized Symbologies

You can configure which [barcode symbologies](/barcode-symbologies.md) Scandit Express should recognize. By default, all symbologies are enabled. You can disable symbologies that are not needed to improve scanning performance.

1. Login to your [Scandit Dashboard](https://ssl.scandit.com/).
2. Click on the Project card you want to configure.
3. For each symbology, you can enable or disable it by checking the **enabled** checkbox.
    ![Symbology Configuration](/img/express/enabled_symbology.png)
4. [Reload the configuration](/hosted/express/getting-started/rollout.md#updating-configuration) in your app to apply the changes.

If you want to further restrict what barcodes are accepted by Scandit Express, you can define a specific match as a regular expression. Only barcode data matching the specified regular expression will be accepted.

The corresponding field is in the `barcodeRegexValidation` section.

![Barcode Regex Validation](/img/express/regex_validation.png)

### Keystroke Injection

You can configure Scandit Express to inject additional keystrokes after a barcode is scanned. This is useful if you want to automate the process of entering data into a form or application.

1. Login to your [Scandit Dashboard](https://ssl.scandit.com/).
2. Click ont the Project card you want to configure.
3. Using the `appendKeyPress` section, you can define the keypresses that should be injected after a barcode is scanned.
    * `null` means no keypresses will be injected.
    * `enter` will inject an Enter keypress.
    * `\n` for Return Carriage.
    * `tab` for Tab.
4. [Reload the configuration](/hosted/express/getting-started/rollout.md#updating-configuration) in your app to apply the changes.

### Scanning Modes

Scandit Express supports different scanning modes to optimize the scanning experience for different use cases. There are two scanning modes available by default: Accuracy and Speed. Two additional modes, Batch and List, are available if you have purchased MatrixScan.

#### Accuracy

Use this mode to select one barcode out of many. This mode detects all barcodes available, then gives visual feedback on the screen (an augmented-reality overlay) so the user can select the target barcode. This mode scans one barcode at a time.

#### Speed

Use this mode to scan barcodes consecutively at high speed. This mode scans successive items at high speed without the need to keep tapping on the screen.

<img src="/img/express/speed.gif" alt="Speed Mode" width="250px" />

#### Batch

Use this mode to scan a batch of barcodes all at once. This mode scans all visible barcodes instantly. It’s perfect when all barcodes are visible and the volume is high.

<img src="/img/express/batch.gif" alt="Batch Mode" width="250px" />

#### List

The list mode icon allows the user to see the list of barcodes that have been scanned. List mode, when activated, works for barcodes scanned in any mode (basic speed scanning, accuracy, and batch).

### Activate via Hardware Button

This feature is only supported for Android devices, and must be enabled by the Scandit Support team on your account. Contact us using this [webform](https://support.scandit.com/hc/en-us/requests/new) and include the following information:

* Your Scandit account email address.
* The project name you want to enable the feature for.
* The device model(s) you want to enable the feature for.
* The key code(s) you want to use to trigger the barcode scanner.

:::tip
You can identify the key code with key code identifier apps available in the Play Store, such as [KeyEvent Display](https://play.google.com/store/apps/details?id=aws.apps.keyeventdisplay).
:::

### Parse and Sort Data

Scandit Express gives you several options to parse the scanned data for such formats as:

* Health Industry Barcodes (HIBC)
* GS1 Application Identifiers
* VIN Numbers
* Swiss QR Codes

You can parse and sort the scanned data either directly from Scandit Express, using the **Scan barcodes** tile in the **Scan and Export** section, or through keyboard injection. All scanning modes will return parsed data.

Please contact [Scandit Support](mailto:support@scandit.com) if you would like to have parser capabilities enabled in your account and we will support you with the necessary details for your specific use case.

### How is an updated configuration distributed to the devices?

Scandit Express gives you several options to parse the scanned data for such formats as:

* When updating the configuration of a barcode scanner deployment or switching to a new production or trial license, the data is synced to all clients via the Scandit Cloud.

Scandit Express automatically updates the license and configuration when restarted. To force a reload:

1. Tap on the person icon on the top right.
[User Icon](https://support.scandit.com/hc/article_attachments/7837932867612)
2. Slide from top to bottom to update your project.
[Refresh Project](https://support.scandit.com/hc/article_attachments/17147306612508)