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

## Create the Data Capture Context

The first step to add capture capabilities to your application is to create a new [data capture context](core/api/data-capture-context.html#class-scandit.datacapture.core.DataCaptureContext). The context expects a valid Scandit Data Capture SDK license key during construction.

```c#
DataCaptureContext context = DataCaptureContext.ForLicenseKey("-- ENTER YOUR SCANDIT LICENSE KEY HERE --");
```

## Add the Camera

You need to also create the [Camera](core/api/camera.html#class-scandit.datacapture.core.Camera):

```c#
camera = Camera.GetDefaultCamera();

if (camera != null)
{
// Use the settings recommended by id capture.
camera.ApplySettingsAsync(IdCapture.RecommendedCameraSettings);
context.SetFrameSourceAsync(camera);
}
```

## Create ID Capture Settings

Use [IdCaptureSettings](id-capture/api/id-capture-settings.html#class-scandit.datacapture.id.IdCaptureSettings) to configure the types of documents that you’d like to scan. Check [IdDocumentType](id-capture/api/id-document-type.html#enum-scandit.datacapture.id.IdDocumentType) for all the available options.

::: warning
Using [IdDocumentType.DlViz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.DlViz) or [IdDocumentType.IdCardViz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.IdCardViz) together with any MRZ document ([IdDocumentType.IdCardMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.IdCardMrz),[IdDocumentType.VisaMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.VisaMrz), [IdDocumentType.PassportMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.PassportMrz), [IdDocumentType.SwissDlMrz](id-capture/api/id-document-type.html#value-scandit.datacapture.id.IdDocumentType.SwissDlMrz)) while [SupportedSides.FrontAndBack](id-capture/api/id-supported-document-sides.html#value-scandit.datacapture.id.SupportedSides.FrontAndBack) is enabled is currently not supported.

```c#
IdCaptureSettings settings = new IdCaptureSettings
{
SupportedDocuments = IdDocumentType.IdCardViz | IdDocumentType.DlViz | IdDocumentType.AamvaBarcode
};
```

## Implement the Listener

To receive scan results, implement [IIdCaptureListener](id-capture/api/id-capture-listener.html#interface-scandit.datacapture.id.IIdCaptureListener). A result is delivered as [CapturedId](id-capture/api/captured-id.html#class-scandit.datacapture.id.CapturedId). This class
contains data common for all kinds of personal identification documents. For more specific information use its non-_null_ result properties (for example [CapturedId.AamvaBarcode](id-capture/api/captured-id.html#property-scandit.datacapture.id.CapturedId.AamvaBarcode)).

Alternatively to register [IIdCaptureListener](id-capture/api/id-capture-listener.html#interface-scandit.datacapture.id.IIdCaptureListener) interface it is possible to subscribe to corresponding events. For example:

```c#
idCapture.IdCaptured += (object sender, IdCaptureEventArgs args) =>
{
CapturedId capturedId = args.Session.NewlyCapturedId;

// The recognized fields of the captured ID can vary based on the type.
if (capturedId.CapturedResultType == CapturedResultType.MrzResult)
{
// Handle the information extracted.
}
else if (capturedId.CapturedResultType == CapturedResultType.VizResult)
{
// Handle the information extracted.
}
else if (capturedId.CapturedResultType == CapturedResultType.AamvaBarcodeResult)
{
// Handle the information extracted.
}
else if (capturedId.CapturedResultType == CapturedResultType.UsUniformedServicesBarcodeResult)
{
// Handle the information extracted.
}
};
```

Create a new ID Capture mode with the chosen settings. Then register the listener:

```c#
idCapture = IdCapture.Create(context, settings);
idCapture.AddListener(new MyListener())
```

## Use a Capture View to Visualize the Scan Process

When using the built-in camera as frame source, you will typically want to display the camera preview on the screen together with UI elements that guide the user through the capturing process. To do that, add a [DataCaptureView](core/api/ui/data-capture-view.html#class-scandit.datacapture.core.ui.DataCaptureView) to your view hierarchy:

```c#
DataCaptureView dataCaptureView = DataCaptureView.Create(dataCaptureContext, View.Bounds);
View.AddSubview(dataCaptureView);
```

Then create an instance of [IdCaptureOverlay](id-capture/api/ui/id-capture-overlay.html#class-scandit.datacapture.id.ui.IdCaptureOverlay) attached to the view:

```c#
overlay = IdCaptureOverlay.Create(idCapture, dataCaptureView);
```

The overlay chooses the displayed UI automatically, based on the selected [IdCaptureSettings](id-capture/api/id-capture-settings.html#class-scandit.datacapture.id.IdCaptureSettings). If you prefer to show a different UI or to temporarily hide it, set the appropriate [IdCaptureOverlay.IdLayout](id-capture/api/ui/id-capture-overlay.html#property-scandit.datacapture.id.ui.IdCaptureOverlay.IdLayout).

## Turn on the Camera

Finally, turn on the camera to start scanning:

```c#
camera.SwitchToDesiredStateAsync(FrameSourceState.On);
```

And this is it. You can now scan documents.
