---
sidebar_position: 2
---

# Get Started

In this guide you will learn step-by-step how to add ID Capture to your application.

:::note
Using ID Capture at the same time as other modes (e.g. Barcode Capture or Text Capture) is not supported.
:::

The general steps are:

- Creating a new Data Capture Context instance
- Accessing a Camera
- Configuring the Capture Settings
- Implementing a Listener to Receive Scan Results
- Setting up the Capture View and Overlay
- Starting the Capture Process

## Create a Data Capture Context

The first step to add capture capabilities to your application is to create a new Data Capture Context. The context expects a valid Scandit Data Capture SDK license key during construction.

```swift
self.context = DataCaptureContext(licenseKey: "-- ENTER YOUR SCANDIT LICENSE KEY HERE --")
```

## Access a Camera

Next, you need to create a new instance of the `SDCCamera` class to indicate the camera that will be used to stream previews and to capture images. The camera settings are also configured, in this case, we use the `recommendedCameraSettings` that come withe ID Capture SDK.

```swift
camera = Camera.default
context.setFrameSource(camera, completionHandler: nil)

// Use the recommended camera settings for the IdCapture mode.
let recommendedCameraSettings = IdCapture.recommendedCameraSettings
camera?.apply(recommendedCameraSettings)
```

## Configure the Capture Settings

Use `SDCIdCaptureSettings` to configure the types of documents you need to scan. Check `SDCIdDocumentType` for all the available options.

:::warning
Using `SDCIdDocumentTypeDLVIZ` or `SDCIdDocumentTypeIdCardVIZ` together with any MRZ document while `SDCSupportedSidesFrontAndBack` is enabled **is not** supported.
:::

```swift
idCaptureSettings.supportedDocuments = [.idCardViz, .aamvaBarcode, .dlViz]
```

## Implement a Listener

To receive scan results implement `SDCIdCaptureListener`.

A result is delivered as an `SDCCapturedId`. This class contains data common for all kinds of personal identification documents. For more specific information use its non-nil result properties (for example `SDCCapturedId.aamvaBarcodeResult`).

```swift
extension IdCaptureViewController: IdCaptureListener {
  func idCapture(_ idCapture: IdCapture, didCaptureIn session: IdCaptureSession, frameData: FrameData) {
    let capturedId = session.newlyCapturedId

    // The recognized fields of the captured Id can vary based on the type.
    if capturedId.mrzResult != nil {
        // Handle the information extracted.
    } else if capturedId.vizResult != nil {
        // Handle the information extracted.
    } else if capturedId.aamvaBarcodeResult != nil {
        // Handle the information extracted.
    } else if capturedId.usUniformedServicesBarcodeResult != nil {
        // Handle the information extracted.
    }
  }

  func idCapture(_ idCapture: IdCapture,
                didFailWithError error: Error,
                session: IdCaptureSession,
                frameData: FrameData) {
    // Handle the error.
  }
}
```

Create a new ID Capture mode with the chosen settings. Then register the listener:

```swift
idCapture = IdCapture(context: context, settings: idCaptureSettings)
idCapture.addListener(self)
```

## Set up Capture View and Overlay

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. 

To do that, add a `SDCDataCaptureView` to your view hierarchy:

```swift
let captureView = DataCaptureView(for: context, frame: view.bounds)
captureView.dataCaptureContext = context
captureView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
view.addSubview(captureView)
```

Then, add a `SDCIdCaptureOverlay` to the view:

```swift
let overlay = IdCaptureOverlay(idCapture: idCapture, view: captureView)
```

The overlay chooses the displayed UI automatically, based on the selected `SDCIdCaptureSettings`.

## Start the Capture Process

Finally, turn on the camera to start scanning:

```swift
camera?.switch(toDesiredState: .on)
```