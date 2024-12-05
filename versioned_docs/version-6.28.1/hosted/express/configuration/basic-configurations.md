---
framework: express
tags: [express]
keywords:
  - express
---

# Available Configurations

There are many configuration options and functionalities available in Scandit Express. This section provides an overview of the different basic configuration options and how to set them up.

## Basic Configuration

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
