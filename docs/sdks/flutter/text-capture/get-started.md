---
sidebar_position: 2
---

# Get Started With Text Capture

In this guide you will learn step by step how to add text capture to your application. The steps are:

- Include the ScanditTextCapture library and its dependencies to your project, if any.
- Create a new [data capture context](https://docs.scandit.com/data-capture-sdk/flutter/core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext) instance, initialized with your license key.
- Create a [text capture settings](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance.
- Create a new [text capture mode](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) instance and initialize it with the settings created above.
- Register a [text capture listener](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) to receive events when a new text is captured.
- Obtain a [camera](https://docs.scandit.com/data-capture-sdk/flutter/core/api/camera.html#class-scandit.datacapture.core.Camera) instance and set it as the frame source on the data capture context.
- Display the camera preview by creating a [data capture view](https://docs.scandit.com/data-capture-sdk/flutter/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView).
- If displaying a preview, optionally create a new [overlay](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/ui/text-capture-overlay.html#class-scandit.datacapture.text.ui.TextCaptureOverlay) and add it to [data capture view](https://docs.scandit.com/data-capture-sdk/flutter/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) for a better visual feedback.

## Initialize the Text plugin

:::warning
Without initializing the text plugin, runtime crashes will occur. However, you don’t have to initialize the core plugin, as initializing the text plugin already does that for you, as presented in the snippet below.
:::

Before accessing anything of the Scandit Data Capture SDK functionality. You have to initialize the text plugin.

```dart
void main() async {
WidgetsFlutterBinding.ensureInitialized();
await ScanditFlutterDataCaptureText.initialize();
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

## Create the Data Capture Context

The first step to add capture capabilities to your application is to create a new [data capture context](https://docs.scandit.com/data-capture-sdk/flutter/core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext). The context expects a valid Scandit Data Capture SDK license key during construction.

```dart
var context = DataCaptureContext.forLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
```

## Configure the Text Capture Behavior

Text capture is orchestrated by the [TextCapture](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) [data capture mode](https://docs.scandit.com/data-capture-sdk/flutter/core/api/data-capture-mode.html#interface-scandit.datacapture.core.IDataCaptureMode). This class is the main entry point for capturing text. It is configured through [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) and allows to register one or more [listeners](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) that will get informed whenever a new text has been captured.

For creating a [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance, you need a JSON containing the necessary configuration for the text capture back-end. For details about the format of the JSON check [Text Capture Settings JSON Structure](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/json-structure.html).

First, create a [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance:

```dart
var textCaptureSettings = TextCaptureSettings.fromJSON(json);
```

Next, create a [TextCapture](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) instance with the settings from the previous step:

```dart
var textCapture = TextCapture.forContext(context, settings);
```

## Register the Text Capture Listener

To get informed whenever a new text has been captured, add a [TextCaptureListener](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) through [TextCapture.addListener()](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture.html#method-scandit.datacapture.text.TextCapture.AddListener) and implement the listener methods to suit your application’s needs.

First implement the [TextCaptureListener](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) interface.

## Use the Built-in Camera

The data capture context supports using different frame sources to perform recognition on. Most applications will use the built-in camera of the device, e.g. the world-facing camera of a device. The remainder of this tutorial will assume that you use the built-in camera.

:::important
In iOS, the user must explicitly grant permission for each app to access cameras. Your app needs to provide static messages to display to the user when the system asks for camera permission. To do that include the [NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information%5Fproperty%5Flist/nscamerausagedescription) key in your app’s Info.plist file.
:::

:::important
In Android, the user must explicitly grant permission for each app to access cameras. Your app needs to declare the use of the Camera permission in the AndroidManifest.xml file and request it at runtime so the user can grant or deny the permission. To do that follow the guidelines from [Request app permissions](https://developer.android.com/training/permissions/requesting) to request the android.permission.CAMERA permission.
:::

When using the built-in camera there are recommended settings for each capture mode. These should be used to achieve the best performance and user experience for the respective mode. The following couple of lines show how to get the recommended settings and create the camera from it:

```dart
var cameraSettings = TextCapture.recommendedCameraSettings;

// Depending on the use case further camera settings adjustments can be made here.

Camera camera = Camera.defaultCamera;

if (camera != null) {
camera.applySettings(cameraSettings);
}
```

Because the frame source is configurable, the data capture context must be told which frame source to use. This is done with a call to [DataCaptureContext.setFrameSource()](https://docs.scandit.com/data-capture-sdk/flutter/core/api/data-capture-context.html#method-scandit.datacapture.core.DataCaptureContext.SetFrameSourceAsync):

```dart
context.setFrameSource(camera);
```

The camera is off by default and must be turned on. This is done by calling [FrameSource.switchToDesiredState()](https://docs.scandit.com/data-capture-sdk/flutter/core/api/frame-source.html#method-scandit.datacapture.core.IFrameSource.SwitchToDesiredStateAsync) with a value of [FrameSourceState.on](https://docs.scandit.com/data-capture-sdk/flutter/core/api/frame-source.html#value-scandit.datacapture.core.FrameSourceState.On):

```dart
camera.switchToDesiredState(FrameSourceState.on);
```

There is a separate guide for [more advanced camera functionality](advanced-topics.html).

## Use a Capture View to Visualize the Scan Process

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. To do that, add a [DataCaptureView](https://docs.scandit.com/data-capture-sdk/flutter/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) to your view hierarchy:

```dart
var dataCaptureView = DataCaptureView.forContext(dataCaptureContext);
// Add the dataCaptureView to your widget tree
```

To visualize the results of text capture, the following [overlay](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/ui/text-capture-overlay.html#class-scandit.datacapture.text.ui.TextCaptureOverlay) can be added:

```dart
var overlay = TextCaptureOverlay.withTextCaptureForView(textCapture, dataCaptureView)
```

## Disabling Text Capture

To disable text capture, for instance as a consequence of a text being captured, set [TextCapture.isEnabled](https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api/text-capture.html#property-scandit.datacapture.text.TextCapture.IsEnabled) to _false_. The effect is immediate: no more frames will be processed _after_ the change. However, if a frame is currently being processed, this frame will be completely processed and deliver any results/callbacks to the registered listeners. Note that disabling the capture mode does not stop the camera, the camera continues to stream frames until it is turned off.
