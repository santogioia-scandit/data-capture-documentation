---
sidebar_position: 2
---

# Get Started

In this guide you will learn step-by-step how to add MatrixScan to your application.

The general steps are:

- Creating a new Data Capture Context instance
- Configuring the MatrixScan mode
- Using the built-in camera
- Visualizing the scan process
- Providing feedback
- Disabling barcode tracking

## Create a Data Capture Context

The first step to add capture capabilities to your application is to create a new Data Capture Context. The context expects a valid Scandit Data Capture SDK license key during construction.

```swift
self.context = DataCaptureContext(licenseKey: "-- ENTER YOUR SCANDIT LICENSE KEY HERE --")
```

## Configure the Barcode Tracking Mode

The main entry point for the Barcode Tracking Mode is the `SDCBarcodeTracking` object. It is configured through `SDCBarcodeTrackingSettings` and allows to register one or more listeners that will get informed whenever a new frame has been processed.

:::note
Typically you will not need to conform to a `SDCBarcodeTrackingListener`, instead you will add a `SDCBarcodeTrackingBasicOverlay` and conform to a `SDCBarcodeTrackingBasicOverlayDelegate`.
:::

Here we will setup Barcode Tracking for tracking QR codes:

```swift
let settings = BarcodeTrackingSettings()
settings.set(symbology: .qr, enabled: true)
```

Next, create a `SDCBarcodeTracking` instance with the data capture context and the settings initialized in the previous steps:

```swift
barcodeTracking = BarcodeTracking(context: context, settings: settings)
```

## Use the Built-in Camera

:::note
In iOS the user must explicitly grant permission to access cameras. Your app needs to provide static messages to display to the user when the system asks for camera permission by including the `NSCameraUsageDescription` key in your app’s `Info.plist` file.
:::

When using the built-in camera there are recommended settings for each capture mode. These should be used to achieve the best performance and user experience for the respective mode.

```swift
let cameraSettings = BarcodeTracking.recommendedCameraSettings

// Depending on the use case further camera settings adjustments can be made here.

let camera = Camera.default
camera?.apply(cameraSettings)
```

Because the frame source is configurable, the data capture context must be told which frame source to use. This is done with a call to `SDCDataCaptureContext.setFrameSource:completionHandler:`:

```swift
context.setFrameSource(camera)
```

The camera is off by default and must be turned on. This is done by calling `SDCFrameSource.switchToDesiredState:completionHandler:` with a value of `SDCFrameSourceStateOn`:

```swift
camera?.switch(toDesiredState: .on)
```

## Visualize the Scan Process

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. 

To do that, add a `SDCDataCaptureView` to your view hierarchy:

```swift
let captureView = DataCaptureView(for: context, frame: view.bounds)
captureView.dataCaptureContext = context
captureView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
view.addSubview(captureView)
```

To visualize the results of Barcode Tracking, first you need to add the following overlay:

```swift
let overlay = BarcodeTrackingBasicOverlay(barcodeTracking: barcodeTracking, view: captureView)
```

Once the overlay has been added, you should conform to the `SDCBarcodeTrackingBasicOverlayDelegate` protocol. The method `SDCBarcodeTrackingBasicOverlayDelegate.barcodeTrackingBasicOverlay:brushForTrackedBarcode:` is invoked every time a new tracked barcode appears and it can be used to set a brush used to highlight that specific barcode in the overlay.

```swift
extension ViewController: BarcodeTrackingBasicOverlayDelegate {
    func barcodeTrackingBasicOverlay(_ overlay: BarcodeTrackingBasicOverlay,
                                brushFor trackedBarcode: TrackedBarcode) -> Brush? {
        // Return a custom Brush based on the tracked barcode.
    }
}
```

If you would like to make the highlights tappable, you need to implement the `SDCBarcodeTrackingBasicOverlayDelegate.barcodeTrackingBasicOverlay:didTapTrackedBarcode:` method.

```swift
extension ViewController: BarcodeTrackingBasicOverlayDelegate {
    func barcodeTrackingBasicOverlay(_ overlay: BarcodeTrackingBasicOverlay,
                                didTap trackedBarcode: TrackedBarcode) {
        // A tracked barcode was tapped.
    }
}
```

## Barcode Tracking Feedback

Barcode Tracking, unlike Barcode Capture, doesn’t emit feedback (sound or vibration) when a new barcode is recognized. However, you may implement a `SDCBarcodeTrackingListener` to provide a similar experience.

Here, we use the default `SDCFeedback`, but you may configure it with your own sound or vibration.

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    feedback = Feedback.default
}
```

Next, use this feedback in a `SDCBarcodeTrackingListener`:

```swift
extension ScanningViewController: BarcodeTrackingListener {
    func barcodeTracking(_ barcodeTracking: BarcodeTracking,
                            didUpdate session: BarcodeTrackingSession,
                            frameData: FrameData) {
        if !session.addedTrackedBarcodes.isEmpty {
            feedback?.emit()
        }
    }
}
```

`SDCBarcodeTrackingListener.barcodeTracking:didUpdate:frameData:` is invoked for every processed frame. The session parameter contains information about the currently tracked barcodes. We check if there are any newly recognized barcodes and emit the feedback if so.

As the last step, register the delegate responsible for emitting the feedback with the `SDCBarcodeTracking` instance.

```swift
barcodeTracking.addListener(self)
```

## Disable Barcode Tracking

To disable barcode tracking set `SDCBarcodeTracking.enabled` to `NO`.

The effect is immediate, no more frames will be processed after the change. However, if a frame is currently being processed, this frame will be completely processed and deliver any results/callbacks to the registered listeners.

Note that disabling the capture mode does not stop the camera, the camera continues to stream frames until it is turned off or put it in standby.