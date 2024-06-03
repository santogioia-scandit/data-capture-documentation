---
sidebar_position: 3
---

# Advanced Configurations

The are several advanced configurations that can be used to customize the behavior of the ID Capture SDK and enable additional features.

## Capture Front and Back of Document

By default, when `SDCIdDocumentTypeDLVIZ` or `SDCIdDocumentTypeIdCardVIZ` are selected, Id Capture scans only the front side of documents. You may be interested in extracting combined information from both the front and back.

The combined result contains the following information:

* AAMVA-compliant documents (e.g. US Driver’s Licenses): the human-readable front side of the document and the data encoded in the PDF417 barcode on the back 
* European IDs: the human-readable sections of the front and the back side, and the data encoded in the Machine Readable Zone (MRZ) 
* Other documents: the human-readable section of the front and the back side (if present)

To enable scanning of both sides of documents in `SDCIdCaptureSettings`:

```swift
settings.supportedDocuments = [.idCardVIZ, .dlVIZ]
settings.supportedSides = .frontAndBack
```

Start by scanning the front side of a document. After you receive the result in `SDCIdCaptureListener`, inspect `SDCVizResult.isBackSideCaptureSupported`. 

If scanning of the back side of your document is supported, flip the document and capture the back side as well. The next result that you receive is a combined result that contains the information from both sides. You may verify this by checking `SDCVizResult.capturedSides`. After both sides of the document are scanned, you may proceed with another document.

Sometimes, you may not be interested in scanning the back side of a document after you completed the front scan. For example, your user may decide to cancel the process. Internally, Id Capture maintains the state of the scan, that helps it to provide better combined results. To abandon capturing the back of a document, reset this state by calling:

```swift
idCapture.reset()
```

## Detect Fake IDs

ID Validate is a fake ID detection software. It currently supports documents that follow the Driver License/Identification Card specification by the American Association of Motor Vehicle Administrators (AAMVA).

The following two verifiers are available:

* `SDCAAMVAVizBarcodeComparisonVerifier`: Validates the authenticity of the document by comparing the data from the VIZ and the barcode on the back.
* `SDCAAMVABarcodeVerifier`: Validates the authenticity of the document by scanning the barcode on the back.

To enable ID Validate for your subscription, please reach out to [support@scandit.com](mailto:support@scandit.com).

