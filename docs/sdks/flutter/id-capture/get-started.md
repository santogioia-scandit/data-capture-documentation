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

## Initialize the id plugin

:::warning
Without initializing the id plugin, runtime crashes will occur. However, you don’t have to initialize the core plugin, as initializing the id plugin already does that for you, as presented in the snippet below.
:::

Before accessing anything of the Scandit Data Capture SDK functionality. You have to initialize the id plugin.

```dart
void main() async {
WidgetsFlutterBinding.ensureInitialized();
await ScanditFlutterDataCaptureId.initialize();
runApp(MyApp());
}
```

## Internal dependencies

Some of the Scandit Data Capture SDK modules depend on others to work:

| Module                              | Dependencies                                                                     |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| scandit-flutter-datacapture-core    | No dependencies                                                                  |
| scandit-flutter-datacapture-barcode | scandit-flutter-datacapture-core                                                 |
| scandit-flutter-datacapture-parser  | scandit-flutter-datacapture-core                                                 |
| scandit-flutter-datacapture-text    | scandit-flutter-datacapture-core                                                 |
| scandit-flutter-datacapture-id      | scandit-flutter-datacapture-core scandit-flutter-datacapture-text(VIZ documents) |

When adding ScanditIdCapture to a Flutter project, certain native dependencies need to be added manually to your project, depending on the documents you want to scan.

If you’re only scanning barcode based documents, you only need to add the ScanditIdCapture Flutter plugin.

If you’re also scanning VIZ documents, you also need to add the ScanditOCR and ScanditTextCaptureBase native dependencies, as described in our [iOS](https://docs.scandit.com/data-capture-sdk/ios/add-sdk.html) and [Android](https://docs.scandit.com/data-capture-sdk/android/add-sdk.html) documentation.

If you’re also scanning MRZ documents, you also need the native ScanditTextCapture dependency. You can add this as well as described in our [iOS](https://docs.scandit.com/data-capture-sdk/ios/add-sdk.html) and [Android](https://docs.scandit.com/data-capture-sdk/android/add-sdk.html) documentation.

Alternatively, if you’re scanning both VIZ and MRZ documents, you can add the ScanditTextCapture Flutter (scandit-datacapture-flutter-text) plugin, which includes the native dependencies for both VIZ and MRZ documents.

Please note that your license may support only a subset of ID Capture features. If you would like to use additional features please contact us at [Scandit Support](mailto:support%40scandit.com).

## Show loading status with default UI

To show some feedback to the user about the loading status you have two options: use the default UI provided with the SDK or subscribe to the loading status and update your own custom UI. Let’s see how we you can show the default UI

### Show loading status with custom UI

You can also just subscribe for the [loading status](core/api/web/loading-status.html) of the library by simply attaching a listener like this:

:::note
We suggest to serve the library files with the proper headersContent-Length and Content-Encoding if any compression is present. In case of totally missing information we will show an estimated progress
:::

## Create the Data Capture Context

The first step to add capture capabilities to your application is to create a new [data capture context](core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext). The context expects a valid Scandit Data Capture SDK license key during construction.

```dart
var context = DataCaptureContext.forLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
```

## Add the Camera

You need to also create the [Camera](core/api/camera.html#class-scandit.datacapture.core.Camera):

```dart
Camera? camera = Camera.defaultCamera;

if (camera != null) {
// Use the settings recommended by id capture.
camera.applySettings(IdCapture.recommendedCameraSettings);
context.setFrameSource(camera);
}
```

## Create ID Capture Settings

Use [IdCaptureSettings](id-capture/api/id-capture-settings.html#class-scandit.datacapture.id.IdCaptureSettings) to configure the types of documents that you’d like to scan. Check [IdDocumentType](id-capture/api/id-document-type.html#enum-scandit.datacapture.id.IdDocumentType) for all the available options.

:::warning
Using [IdDocumentType.dlViz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.DlViz) or
[IdDocumentType.idCardViz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.IdCardViz) together with any MRZ document ([IdDocumentType.idCardMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.IdCardMrz), [IdDocumentType.visaMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.VisaMrz), [IdDocumentType.passportMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.PassportMrz), [IdDocumentType.swissDlMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.SwissDlMrz)) while [SupportedSides.frontAndBack](id-capture/api/id-supported-document-sides.html#value-scandit.datacapture.id.SupportedSides.FrontAndBack) is enabled is currently not supported.
:::

```dart
var settings = IdCaptureSettings();
settings.supportedDocuments.addAll(
[IdDocumentType.idCardViz, IdDocumentType.dlViz, IdDocumentType.aamvaBarcode]);
```

## Implement the Listener

To receive scan results, implement [IdCaptureListener](id-capture/api/id-capture-listener.html#interface-scandit.datacapture.id.IIdCaptureListener). A result is delivered as [CapturedId](id-capture/api/captured-id.html#class-scandit.datacapture.id.CapturedId). This class contains data common for all kinds of personal identification documents. For more specific information use its non-_null_ result properties (for example [CapturedId.aamvaBarcode](id-capture/api/captured-id.html#property-scandit.datacapture.id.CapturedId.AamvaBarcode)).

```dart
@override
void didCaptureId(IdCapture idCapture, IdCaptureSession session) {
CapturedId? capturedId = session.newlyCapturedId;
// Do something in case the capturedId is not null.
}
```

Create a new ID Capture mode with the chosen settings. Then register the listener:

```dart
idCapture = IdCapture.forContext(context, settings);
idCapture.addListener(this)
```

## Use a Capture View to Visualize the Scan Process

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. To do that, add a [DataCaptureView](core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) to your view hierarchy:

```dart
var dataCaptureView = DataCaptureView.forContext(dataCaptureContext);
// Add the dataCaptureView to your widget tree
```

Then create an instance of [IdCaptureOverlay](id-capture/api/ui/id-capture-overlay.html#class-scandit.datacapture.id.ui.IdCaptureOverlay) attached to the view:

```dart
overlay = IdCaptureOverlay.withIdCaptureForView(idCapture, dataCaptureView);
```

The overlay chooses the displayed UI automatically, based on the selected [IdCaptureSettings](id-capture/api/id-capture-settings.html#class-scandit.datacapture.id.IdCaptureSettings).

## Turn on the Camera

Finally, turn on the camera to start scanning:

```dart
camera.switchToDesiredState(FrameSourceState.on);
```

And this is it. You can now scan documents.
