---
sidebar_position: 3
---

# Advanced Configurations

SparkScan is optimized by default for efficiency, accuracy, and a seamless user experience. However, there are some cases where you might want to customize the behavior of SparkScan. This guide will show you how to add additional capabilities and further customize SparkScan to best fit your needs.

## Advanced Capabilities

### Trigger the Error State

You may want to introduce logic in your app to show an error message when scanning specific barcodes (e.g. barcodes already added to the list, barcodes from the wrong lot etc.). SparkScan offers a built-in error state you can easily set to trigger an error feedback prompt to the user. You will be able to customize:

- The text message
- The timeout of the error message: the scanner will be paused for the specified amount of time, but the user can quickly restart the scanning process by tapping the trigger button
- The color of the flashing screen upon scan. You can enable or disable the visual feedback via [SparkScanViewSettings.visualFeedbackEnabled](https://docs.scandit.com/data-capture-sdk/web/barcode-capture/api/ui/spark-scan-view-settings.html#property-scandit.datacapture.barcode.spark.ui.SparkScanViewSettings.VisualFeedbackEnabled) and you can control the color via [SparkScanViewSuccessFeedback](https://docs.scandit.com/data-capture-sdk/web/barcode-capture/api/ui/spark-scan-view-feedback.html#class-scandit.datacapture.barcode.spark.ui.SparkScanViewSuccessFeedback) and [SparkScanViewErrorFeedback](https://docs.scandit.com/data-capture-sdk/web/barcode-capture/api/ui/spark-scan-view-feedback.html#class-scandit.datacapture.barcode.spark.ui.SparkScanViewErrorFeedback).

An error example is here reported:

```js
self.sparkScanView.emitFeedback(SparkScanViewErrorFeedback(message: "This code should not have been scanned",
resumeCapturingDelay: 6, visualFeedbackColor: UIColor.red))
```

**NOTE**: you can have different error states triggered by different logic conditions. For example you can trigger an error state when a wrong barcode is scanned, and another one when a duplicate barcode is scanned. These errors can show different colors and have different timeouts.

**NOTE**: a high timeout (e.g. >10s) typically requires the users to interact with the UI to start scanning again. This is a good choice when you want to interrupt the scanning workflow (e.g. because a wrong barcode is scanned and some actions need to be performed). A small timeout (e.g. \<2s) could allow the user to scan again without having to interact with the app, just momentarily pausing the workflow to acknowledge that a “special” barcode has been scanned.

## Customization

### Customize colors and texts

All texts (guidance inside the trigger button and hints’ messages), colors and opacity of the SparkScan UI elements (trigger button, setting toolbar, toasts) can be customized to match the desired language and color scheme. Please refer to [SparkScanView](https://docs.scandit.com/data-capture-sdk/web/barcode-capture/api/ui/spark-scan-view.html#class-scandit.datacapture.barcode.spark.ui.SparkScanView) for the full list of available parameters.

### Hide Controls from the Setting Toolbar

The Setting Toolbar comes with default buttons included, as detailed in [Learn More About SparkScan](#learn-more-about-sparkscan). In some cases you want to avoid end users from accessing these controls, for example:

- to prevent them disabling audio feedback on scan, as the work environment is always noisy
- to prevent them toggling the continuous mode, as you want them to pick items one by one
- etc.

To do that, you can change the visibility of these buttons, hiding them from the setting toolbar. Please refer to [SparkScanView](https://docs.scandit.com/data-capture-sdk/web/barcode-capture/api/ui/spark-scan-view.html#class-scandit.datacapture.barcode.spark.ui.SparkScanView) for the full list of parameters.
