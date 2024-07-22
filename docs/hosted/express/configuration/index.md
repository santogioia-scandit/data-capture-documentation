---
toc_max_heading_level: 4
---

# Configuration

There are many configuration options and functionalities available in Scandit Express. This section provides an overview of the different configuration options and how to set them up.

## Configuration Options

### Recognized Symbologies

You can configure which [barcode symbologies](../../../barcode-symbologies.md) Scandit Express should recognize. By default, all symbologies are enabled. You can disable symbologies that are not needed to improve scanning performance.

1. Login to your [Scandit Dashboard](https://ssl.scandit.com/).
2. Click on the Project card you want to configure.
3. For each symbology, you can enable or disable it by checking the **enabled** checkbox.
    ![Symbology Configuration](/img/express/enabled_symbology.png)
4. [Reload the configuration](../getting-started/rollout/#updating-configuration) in your app to apply the changes.

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
4. [Reload the configuration](../getting-started/rollout/#updating-configuration) in your app to apply the changes.

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