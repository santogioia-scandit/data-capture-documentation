---
sidebar_position: 2
---

# Get Started

In this guide you will learn step-by-step how to add Text Capture to your application by:

- Include the ScanditTextCapture library and its dependencies to your project, if any.
- Create a new [data capture context](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext) instance, initialized with your license key.
- Create a [text capture settings](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance.
- Create a new [text capture mode](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) instance and initialize it with the settings created above.
- Register a [text capture listener](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) to receive events when a new text is captured.
- Obtain a [camera](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/camera.html#class-scandit.datacapture.core.Camera) instance and set it as the frame source on the data capture context.
- Display the camera preview by creating a [data capture view](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView).
- If displaying a preview, optionally create a new [overlay](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/ui/text-capture-overlay.html#class-scandit.datacapture.text.ui.TextCaptureOverlay) and add it to [data capture view](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) for a better visual feedback.

## Create the Data Capture Context

The first step to add capture capabilities to your application is to create a new [data capture context](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext). The context expects a valid Scandit Data Capture SDK license key during construction.

```c#
DataCaptureContext context = DataCaptureContext.ForLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
```

## Configure the Text Capture Behavior

Text capture is orchestrated by the [TextCapture](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) [data capture mode](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/data-capture-mode.html#interface-scandit.datacapture.core.IDataCaptureMode). This class is the main entry point for capturing text. It is configured through [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) and allows to register one or more [listeners](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) that will get informed whenever a new text has been captured.

For creating a [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance, you need a JSON containing the necessary configuration for the text capture back-end. For details about the format of the JSON check [Text Capture Settings JSON Structure](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/json-structure.html).

First, create a [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance:

```c#
TextCaptureSettings textCaptureSettings = TextCaptureSettings.FromJson(json);
```

Next, create a [TextCapture](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) instance with the settings from the previous step:

```c#
textCapture = TextCapture.Create(context, textCaptureSettings);
```

## Register the Text Capture Listener

To get informed whenever a new text has been captured, add a [ITextCaptureListener](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) through [TextCapture.AddListener()](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture.html#method-scandit.datacapture.text.TextCapture.AddListener) and implement the listener methods to suit your application’s needs.

First implement the [ITextCaptureListener](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) interface. For example:

```c#
public void OnObservationStarted(TextCapture textCapture)
{
}

public void OnObservationStopped(TextCapture textCapture)
{
}

public void OnTextCaptured(TextCapture textCapture, TextCaptureSession session, IFrameData data)
{
// Do something with the captured text.
}
```

Then add the listener:

```c#
textCapture.AddListener(this);
```

Alternatively to register [ITextCaptureListener](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) interface it is possible to subscribe to corresponding events. For example:

```c#
textCapture.TextCaptured += (object sender, TextCaptureEventArgs args) =>
{
// Do something with the captured text.
};
```

## Use the Built-in Camera

The data capture context supports using different frame sources to perform recognition on. Most applications will use the built-in camera of the device, e.g. the world-facing camera of a device. The remainder of this tutorial will assume that you use the built-in camera.

:::important
In iOS, the user must explicitly grant permission for each app to access cameras. Your app needs to provide static messages to display to the user when the system asks for camera permission. To do that include the [NSCameraUsageDescription](https://learn.microsoft.com/en-us/xamarin/ios/app-fundamentals/security-privacy?tabs=macos#:~:text=NSCameraUsageDescription) key in your app’s Info.plist file.
:::

When using the built-in camera there are recommended settings for each capture mode. These should be used to achieve the best performance and user experience for the respective mode. The following couple of lines show how to get the recommended settings and create the camera from it:

```c#
CameraSettings cameraSettings = TextCapture.RecommendedCameraSettings;

// Depending on the use case further camera settings adjustments can be made here.

Camera camera = Camera.GetDefaultCamera();

if (camera != null) {
camera.ApplySettingsAsync(cameraSettings);
}
```

Because the frame source is configurable, the data capture context must be told which frame source to use. This is done with a call to [DataCaptureContext.SetFrameSourceAsync()](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/data-capture-context.html#method-scandit.datacapture.core.DataCaptureContext.SetFrameSourceAsync):

```c#
context.SetFrameSourceAsync(camera);
```

The camera is off by default and must be turned on. This is done by calling [IFrameSource.SwitchToDesiredState()](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/frame-source.html#method-scandit.datacapture.core.IFrameSource.SwitchToDesiredStateAsync) with a value of [FrameSourceState.On](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/frame-source.html#value-scandit.datacapture.core.FrameSourceState.On):

```c#
camera?.SwitchToDesiredStateAsync(FrameSourceState.On);
```

There is a separate guide for [more advanced camera functionality](advanced-topics.html).

## Use a Capture View to Visualize the Scan Process

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. To do that, add a [DataCaptureView](https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) to your view hierarchy:

```c#
DataCaptureView dataCaptureView = DataCaptureView.Create(dataCaptureContext, View.Bounds);
View.AddSubview(dataCaptureView);
```

To visualize the results of text capture, the following [overlay](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/ui/text-capture-overlay.html#class-scandit.datacapture.text.ui.TextCaptureOverlay) can be added:

```c#
TextCaptureOverlay overlay = TextCaptureOverlay.Create(textCapture, dataCaptureView);
```

## Disabling Text Capture

To disable text capture, for instance as a consequence of a text being captured, set [TextCapture.Enabled](https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api/text-capture.html#property-scandit.datacapture.text.TextCapture.IsEnabled) to _false_. The effect is immediate: no more frames will be processed _after_ the change. However, if a frame is currently being processed, this frame will be completely processed and deliver any results/callbacks to the registered listeners. Note that disabling the capture mode does not stop the camera, the camera continues to stream frames until it is turned off.
