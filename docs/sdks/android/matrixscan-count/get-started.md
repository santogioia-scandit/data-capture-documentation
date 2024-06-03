---
sidebar_position: 2
---

# Get Started

This page describes the steps to add MatrixScan Count to your application.

:::note
MatrixScan Count is implemented via [BarcodeCount].
:::

The general steps are:

- Create a new Data Capture Context instance
- Configure the Barcode Count Mode
- Obtain the camera instance and set frame source
- Register the listener to be informed when scan phase is complete
- Set the capture view and AR overlays
- Configure the camera for scanning view
- Store and retrieve the captured barcodes
- Reset the Barcode Count Mode
- List and exit callbacks

## Create a Data Capture Context

The first step to add capture capabilities to your application is to create a new [Data Capture Context]. The context expects a valid Scandit Data Capture SDK license key during construction.

```java
DataCaptureContext dataCaptureContext = DataCaptureContext.forLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
```

## Configure the Barcode Count Mode

The main entry point for the Barcode Count Mode is the [BarcodeCount] object. It is configured through [BarcodeCountSettings] and allows you to register one or more listeners that are informed whenever a scan phase has finished.

Here we set up Barcode Count for tracking EAN13 codes; however you must change this to the appropriate symbologies for your use case. If you are sure that your environment has only unique barcodes, you can also enable [BarcodeCountSettings.expectsOnlyUniqueBarcodes]. This option improves scanning performance as long as you are sure that no duplicates are present.

```java
let settings = BarcodeCountSettings()
settings.set(symbology: .ean13UPCA, enabled: true)
```

Next, create a `SDCBarcodeCount` instance with the Data Capture Context and the settings initialized in the previous step:

```java
let barcodeCount = BarcodeCount(context: context, settings: settings)
```

## Camera Instance And Set Frame Source

Our recommended camera settings should be used to achieve the best performance and user experience. The following code shows how to get the recommended settings for MatrixScan Count and create the camera from it:

```java
let cameraSettings = BarcodeCount.recommendedCameraSettings

let camera = Camera.default
camera?.apply(cameraSettings)
```

Because the frame source is configurable the data capture context must be told which frame source to use. This is done with a call to `SDCDataCaptureContext.setFrameSource:completionHandler:`:

```java
context.setFrameSource(camera)
```

## Registering the Listener

To keep track of the barcodes that have been scanned, implement the SDCBarcodeCountListener protocol and register the listener.

```java
// Register self as a listener to monitor the barcode count session.
barcodeCount.add(self)
```

`SDCBarcodeCountListener.barcodeCount:didScanInSession:frameData:` is called when the scan phase has finished and results can be retrieved from `SDCBarcodeCountSession`.

## Setting the Capture View and AR Overlays

MatrixScan Count’s built-in AR user interface includes buttons and overlays that guide the user through the capturing process. By adding a `SDCBarcodeCountView` the scanning interface will be added automatically to your application.

Add a `SDCBarcodeCountView` to your view hierarchy:

```java
let barcodeCountView = BarcodeCountView(frame: view.bounds, context: context, barcodeCount: barcodeCount)
barcodeCountView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
view.addSubview(barcodeCountView)
```

## Configuring the Camera for Scanning View

The camera is not automatically turned on when you are in a scanning view. You need to set up the camera so that it switches on when needed and it switches off when not needed anymore.

Similarly `SDCBarcodeCount` should also be enabled and disabled. For example, you should switch off the camera when the `SDCBarcodeCountView` is not visible and switch on the camera when the `SDCBarcodeCountView` is visible. For example:

```java
override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(animated)
    camera?.switch(toDesiredState: .on)
}

override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
    camera?.switch(toDesiredState: .off)
}
```

## Store And Retrieve Scanned Barcodes

The values captured as part of the scanning process are part of the session, and the session is not accessible outside `SDCBarcodeCountListener.barcodeCount:didScanInSession:frameData:`.

We recommend you store the values to present a list, for example when the user taps the list icon. To do this, make a copy of `SDCBarcodeCountSession.recognizedBarcodes`:

```java
extension ViewController: BarcodeCountListener {
    func barcodeCount(_ barcodeCount: BarcodeCount,
                      didScanIn session: BarcodeCountSession,
                      frameData: FrameData) {
        // Gather all the recognized barcodes
        let allRecognizedBarcodes = session.recognizedBarcodes.map({ $0.value })
        // This method is invoked from a recognition internal thread.
        // Dispatch to the main thread to update the internal barcode list.
        DispatchQueue.main.async {
            // Update the internal list
            self.allRecognizedBarcodes = allRecognizedBarcodes
        }
    }
}
```

## Resetting the Barcode Count Mode

When the scanning process is over, you need to reset the mode to make it ready for the next process. This clears the list of barcodes scanned and all the AR overlays.

To reset Barcode Count’s scanning process, call the `SDCBarcodeCount.reset` method:

```java
barcodeCount.reset()
```

## List and Exit Callbacks

The UI includes two icons (buttons): “List” and “Exit”. The SDK provides the callbacks so you can add the desired action when those icons are tapped by the user:

```java
extension ViewController: BarcodeCountViewUIDelegate {
    func listButtonTapped(for view: BarcodeCountView) {
        // Show the current progress but the order is not completed
    }

    func exitButtonTapped(for view: BarcodeCountView) {
        // The order is completed
    }
}
```
