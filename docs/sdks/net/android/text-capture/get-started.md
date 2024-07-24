---
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Get Started

In this guide you will learn step by step how to add text capture to your application. The steps are:

- Include the ScanditTextCapture library and its dependencies to your project, if any.
- Create a new [data capture context](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext) instance, initialized with your license key.
- Create a [text capture settings](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance.
- Create a new [text capture mode](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) instance and initialize it with the settings created above.
- Register a [text capture listener](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) to receive events when a new text is captured.
- Obtain a [camera](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/camera.html#class-scandit.datacapture.core.Camera) instance and set it as the frame source on the data capture context.
- Display the camera preview by creating a [data capture view](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView).
- If displaying a preview, optionally create a new [overlay](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/ui/text-capture-overlay.html#class-scandit.datacapture.text.ui.TextCaptureOverlay) and add it to [data capture view](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) for a better visual feedback.

## Create the Data Capture Context

The first step to add capture capabilities to your application is to create a new [data capture context](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext). The context expects a valid Scandit Data Capture SDK license key during construction.

```csharp
DataCaptureContext context = DataCaptureContext.ForLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
```

## Configure the Text Capture Behavior

Text capture is orchestrated by the [TextCapture](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) [data capture mode](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/data-capture-mode.html#interface-scandit.datacapture.core.IDataCaptureMode). This class is the main entry point for capturing text. It is configured through [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) and allows to register one or more [listeners](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) that will get informed whenever a new text has been captured.

For creating a [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance, you need a JSON containing the necessary configuration for the text capture back-end. For details about the format of the JSON check [Text Capture Settings JSON Structure](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/json-structure.html).

First, create a [TextCaptureSettings](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-settings.html#class-scandit.datacapture.text.TextCaptureSettings) instance:

```csharp
TextCaptureSettings textCaptureSettings = TextCaptureSettings.FromJson(json);
```

Next, create a [TextCapture](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture.html#class-scandit.datacapture.text.TextCapture) instance with the settings from the previous step:

```csharp
textCapture = TextCapture.Create(context, textCaptureSettings);
```

## Register the Text Capture Listener

To get informed whenever a new text has been captured, add a [ITextCaptureListener](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) through [TextCapture.AddListener()](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture.html#method-scandit.datacapture.text.TextCapture.AddListener) and implement the listener methods to suit your application’s needs.

First implement the [ITextCaptureListener](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) interface. For example:

```csharp
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

```csharp
textCapture.AddListener(this);
```

Alternatively to register [ITextCaptureListener](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture-listener.html#interface-scandit.datacapture.text.ITextCaptureListener) interface it is possible to subscribe to corresponding events. For example:

```csharp
textCapture.TextCaptured += (object sender, TextCaptureEventArgs args) =>
{
// Do something with the captured text.
};
```

## Use the Built-in Camera

The data capture context supports using different frame sources to perform recognition on. Most applications will use the built-in camera of the device, e.g. the world-facing camera of a device. The remainder of this tutorial will assume that you use the built-in camera.

:::important
In Android, the user must explicitly grant permission for each app to access cameras. Your app needs to declare the use of the Camera permission in the AndroidManifest.xml file and request it at runtime so the user can grant or deny the permission. To do that follow the guidelines from [Permissions in Android](https://learn.microsoft.com/en-us/xamarin/android/app-fundamentals/permissions) to request the android.permission.CAMERA permission.
:::

When using the built-in camera there are recommended settings for each capture mode. These should be used to achieve the best performance and user experience for the respective mode. The following couple of lines show how to get the recommended settings and create the camera from it:

```csharp
CameraSettings cameraSettings = TextCapture.RecommendedCameraSettings;

// Depending on the use case further camera settings adjustments can be made here.

Camera camera = Camera.GetDefaultCamera();

if (camera != null) {
camera.ApplySettingsAsync(cameraSettings);
}
```

Because the frame source is configurable, the data capture context must be told which frame source to use. This is done with a call to [DataCaptureContext.SetFrameSourceAsync()](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/data-capture-context.html#method-scandit.datacapture.core.DataCaptureContext.SetFrameSourceAsync):

```csharp
context.SetFrameSourceAsync(camera);
```

The camera is off by default and must be turned on. This is done by calling [IFrameSource.SwitchToDesiredStateAsync()](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/frame-source.html#method-scandit.datacapture.core.IFrameSource.SwitchToDesiredStateAsync) with a value of [FrameSourceState.On](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/frame-source.html#value-scandit.datacapture.core.FrameSourceState.On):

```csharp
camera?.SwitchToDesiredStateAsync(FrameSourceState.On);
```



## Use a Capture View to Visualize the Scan Process

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. To do that, add a [DataCaptureView](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) to your view hierarchy:

```csharp
DataCaptureView dataCaptureView = DataCaptureView.Create(this, dataCaptureContext);
SetContentView(dataCaptureView);
```

Alternatively you can use a [DataCaptureView](https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) from XAML in your MAUI application. For example:

```xml
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
    xmlns:scandit="clr-namespace:Scandit.DataCapture.Core.UI.Maui;assembly=ScanditCaptureCoreMaui">
	<ContentPage.Content>
    <AbsoluteLayout>
        <scandit:DataCaptureView x:Name="dataCaptureView" AbsoluteLayout.LayoutBounds="0,0,1,1"
            AbsoluteLayout.LayoutFlags="All" DataCaptureContext="{Binding DataCaptureContext}">
        </scandit:DataCaptureView>
    </AbsoluteLayout>
    </ContentPage.Content>
</ContentPage>
```

You can configure your view in the code behind class. For example:

```csharp
public partial class MainPage : ContentPage
{
public MainPage()
{
InitializeComponent();

// Initialization of DataCaptureView happens on handler changed event.
dataCaptureView.HandlerChanged += DataCaptureViewHandlerChanged;
}

private void DataCaptureViewHandlerChanged(object? sender, EventArgs e)
{
// Your dataCaptureView configuration goes here, e.g. add overlay
}
}
```

For MAUI development add [Scandit.DataCapture.Core.Maui](https://www.nuget.org/packages/Scandit.DataCapture.Core.Maui) NuGet package into your project.

To visualize the results of text capture, the following [overlay](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/ui/text-capture-overlay.html#class-scandit.datacapture.text.ui.TextCaptureOverlay) can be added:

```csharp
TextCaptureOverlay overlay = TextCaptureOverlay.Create(textCapture, dataCaptureView);
```

## Disabling Text Capture

To disable text capture, for instance as a consequence of a text being captured, set [TextCapture.Enabled](https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api/text-capture.html#property-scandit.datacapture.text.TextCapture.IsEnabled) to _false_. The effect is immediate: no more frames will be processed _after_ the results/callbacks to the registered listeners. Note that disabling the capture mode does not stop the camera, the camera continues to stream frames until it is turned off.
