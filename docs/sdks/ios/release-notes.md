---
toc_max_heading_level: 4
displayed_sidebar: iosSidebar
hide_title: true
title: Release Notes
---

## 6.24.0

**Released**: May 8, 2024

### New Features

#### Barcode

- **Smart Scan Intention**: Introduced a new algorithm that intelligently identifies and then scans the barcode that the user intends to capture, reducing errors. It is enabled in SparkScan by default (see `SDCSparkScanSettings.scanIntention`) and can be manually set in Barcode Capture (see `SDCBarcodeCaptureSettings.scanIntention`).
  
- **Improved Scanning Range**: The scanning range for 1D barcodes on Electronic Shelf Labels (ESL) and paper shelf labels was improved by 30-40% in both Full HD and 4K without compromising scanning speed. This enhancement enables the fastest and most ergonomic scanning experience for tiny barcodes and ESLs, particularly those on top or bottom shelves.

- **User Facing Camera in SparkScan**: It is now possible to switch to the user-facing camera for scanning. This is useful in specific use-cases where the rear camera is not accessible or barcodes are hard to reach otherwise. See `SDCSparkScanView.cameraSwitchButtonVisible`.

- **Dynamic Item List in MatrixScan Find**: Added support for dynamically modifying a list of items to be found by calling `SDCBarcodeFind.setItemList:` during a scanning session in `SDCBarcodeFind`.

- **New Symbology Supports**:
  - Added support for `SDCSymbologyFrenchPost`, recognizing postal codes (code postal) used by the French Post.
  - Added support for decoding misprinted `SDCSymbologyAustralianPost` codes.

- **New APIs in BarcodePick View Highlight Styles**: New APIs to show a different highlight while waiting for an async pick/unpick action to complete. New setters & getters for selected brushes and/or icons are available in:
  - `SDCBarcodePickViewHighlightStyleRectangular`
  - `SDCBarcodePickViewHighlightStyleDot`
  - `SDCBarcodePickViewHighlightStyleRectangularWithIcons`
  - `SDCBarcodePickViewHighlightStyleDotWithIcons`

  Additionally, a selected brush and icon can be provided asynchronously with the new `SDCBarcodePickHighlightStyleResponse` constructor.

- **Programmatic Item Selection**: Added `SDCBarcodePick.selectItemWithData:completionHandler:` to programmatically select an item.

#### ID

- **Reject Voided IDs**: Added `SDCIdCaptureSettings.rejectVoidedIds`. When enabled, documents voided by authorities are rejected (`SDCIdCaptureListener.idCapture:didRejectInSession:frameData:`). This feature supports cut corners, holes punched in the document, and “VOID” perforations, currently only for US Driver’s Licenses. The `ScanditIdVoidedDetection` library must be included when activating this setting.

- **Rejection Reason**: Added `SDCRejectedId.rejectionReason` which contains the reason why the document was rejected.

- **Per State Thresholds in ID Verification**: Added support for per state thresholds and removed the hardcoded number of features. This is a breaking change; old verification models will not work.

- **Timeout Callback Modification**: Modified how `SDCIdCaptureListener.idCapture:didTimeoutInSession:frameData:` is emitted. The callback is invoked whenever a document is localized for a period but could not be captured.

- **Newly Supported Documents**:
  - **MRZ Scanning**: Mexico: Matrícula Consular
  - **Front of Card/VIZ Scanning**:
    - USA: District of Columbia, Idaho, North Dakota, West Virginia, Wisconsin (2023 versions)
    - Mexico: Consular Voter ID

- **Additional Features**:
  - Added `SDCAAMVABarcodeResult.rawData`.
  - Fixed truncated surnames in US driver’s licenses using magnetic stripe format.
  - Added `SDCCapturedId.secondaryLastName` containing the common name (“nom d’usage”) on French passports.

#### Parser

- **GS1 Digital Link**: The parser now supports uncompressed GS1 Digital Link. For complete documentation, refer to the official website.

### Behavioral Changes

#### Barcode

- **Battery Saving Mode in SparkScan**: Changed from `SDCBatterySavingModeOff` to `SDCBatterySavingModeAuto`. The option can be changed via `SDCSparkScanSettings.batterySaving`.

### Performance Improvements

#### ID

- **VIZ/Front of Card Scanning**: Significantly improved performance in low-light conditions.
- **US Driver’s License Barcodes**: Improved capture performance for PDF417 barcodes with printing defects, particularly from Ohio, Louisiana, and Florida.

### Bug Fixes

#### Barcode

- Fixed the “Tap to Focus” animation when the view size changes.

#### ID

- Fixed a crash when scanning a passport MRZ then a non-passport VIZ.
- Fixed an issue where the century of birth dates, issue dates, and expiry dates was returned incorrectly when scanning the VIZ of European IDs, Swiss driver’s licenses, and UAE IDs.
- Fixed incorrect information extraction from British Columbia PDF417.

## 6.23.2

**Released**: April 30, 2024

- Fixed crash (SIGILL) on Exynos 9810-based Galaxy S9 and Galaxy S9+ devices.
- Removed unused code and updated the privacy manifest to conform to [new privacy requirements](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files).

## 6.23.1

**Released**: April 24, 2024

- Added support for Mexican Matrícula Consular MRZ codes.
- Improved ID scanning performance in low-light conditions.
- Fixed truncated surnames in US driver’s licenses using magnetic stripe format.

## 6.23.0

### New Features

- **Privacy Manifests**: Updated privacy manifests with the description of data collected by the frameworks.

#### Barcode

##### SparkScan Improvements

- **Target Mode**: Improved performance with faster selection of barcodes, a more consistent workflow, and a better UI (new aimer and icon).
- **Preview Size Control**: Now independent from scanning mode or scanning precision parameters. Controlled by a dedicated control added to the preview. Use `SDCSparkScanView.previewSizeControlVisible` to define if preview size control should be displayed.
- **Accuracy Workflow**: Streamlined into a more consistent and performant workflow.
- **Preview Behavior**: Developers can set `SDCSparkScanPreviewBehavior` to specify the preview behavior type of the `SDCSparkScanView`. When `previewBehavior` is `SDCSparkScanPreviewBehaviorPersistent`, after the scan, the preview does not disappear but stays obscured and running for easier aiming.
- **Toast Messages**: Displayed on top of the preview rather than the scan button, with additional messages for better guidance.
- **Zoom Functionality**: Now independent from scanning mode and available in both default and target modes.
- **Feedback Emission System**: Improved to implicitly emit a success feedback on scan.
- **New APIs**:
  - `SDCSparkScanScanningModeTarget.previewBehavior`
  - `SDCSparkScanScanningModeDefault.previewBehavior`
  - `SDCSparkScanViewSettings.zoomFactorOut`
  - `SDCSparkScanViewSettings.zoomFactorIn`
  - `SDCSparkScanBarcodeFeedback`
  - `SDCSparkScanFeedbackDelegate`
  - `SDCSparkScanView.feedbackDelegate`
  - `SDCSparkScanViewSettings.inactiveStateTimeout`
  - `withSparkScan` SwiftUI view modifier

##### Barcode Pick

- **New Feature in 6.23**:
  - `SDCBarcodePickStatusIconStyle`
  - `SDCBarcodePickViewHighlightStyle`
  - `SDCBarcodePickListener`

##### New Symbology Supports

- **SDCSymbologyAustralianPost**: Added support with options to enforce decoding with specific tables and returning error-corrected customer information bars.

##### Swift-Friendly API Updates

- **Properties Exposed as Set(Symbology)**:
  - `BarcodeCaptureLicenseInfo.licensedSymbologies`
  - `BarcodeCaptureSettings.enabledSymbologies`
  - `BarcodeCountSettings.enabledSymbologies`
  - `BarcodeFilterSettings.excludedSymbologies`
  - `BarcodeFindSettings.enabledSymbologies`
  - `BarcodePickSettings.enabledSymbologies`
  - `BarcodeSelectionLicenseInfo.licensedSymbologies`
  - `BarcodeSelectionSettings.enabledSymbologies`
  - `BarcodeTrackingLicenseInfo.licensedSymbologies`
  - `BarcodeTrackingSettings.enabledSymbologies`
  - `CompositeTypeDescription.symbologies`
  - `SparkScanLicenseInfo.licensedSymbologies`
  - `SparkScanSettings.enabledSymbologies`

- **Methods Accepting Set(Symbology)**:
  - `BarcodeCaptureSettings.enableSymbologies(_:)`
  - `BarcodeCountSettings.enableSymbologies(_:)`
  - `BarcodeFindSettings.enableSymbologies(_:)`
  - `BarcodePickSettings.enableSymbologies(_:)`
  - `BarcodeSelectionSettings.enableSymbologies(_:)`
  - `BarcodeTrackingSettings.enableSymbologies(_:)`
  - `SparkScanSettings.enableSymbologies(_:)`

- **Exposed as Dictionary**:
  - `BarcodeCountSession.recognizedBarcodes`
  - `BarcodeFilterSettings.excludedSymbolCounts`
  - `BarcodeTrackingSession.removedTrackedBarcodes`
  - `BarcodeTrackingSession.trackedBarcodes`

- **Symbology Conforms to CaseIterable**: `SDCAllSymbologies` is not available anymore in Swift.
- **Exposed as Set(Int)**: `SymbologySettings.activeSymbolCounts`
- **WaveFormVibration Properties**:
  - `WaveFormVibration.timings`
  - `WaveFormVibration.amplitudes`

### Performance Improvements

#### Barcode

- Improved tracking robustness for low-end devices in MatrixScan Count.

### Bug Fixes

#### Barcode

- Fixed flickering of guidances in `SDCBarcodeSelection`.

#### ID

- Fixed issues with scanning AAMVA documents with non-English characters.
- Fixed licensing issue for scanning the back side of UK driver’s license.
- Fixed a crash when scanning a passport MRZ then a non-passport VIZ.

#### Core

- Fixed the radius selection for cases where the `SDCDataCaptureView`’s aspect ratio is considerably different from the camera frames.

### Deprecations

#### Barcode

- **Deprecated APIs**:
  - `SDCSparkScanScanningPrecision` replaced by `SDCSparkScanPreviewBehavior`.
  - `SDCSparkScanScanningModeTarget` and `SDCSparkScanScanningModeDefault` initializers accepting `SDCSparkScanScanningPrecision` replaced by initializers accepting `SDCSparkScanPreviewBehavior`.
  - `SDCSparkScanView.shouldShowTargetModeHint` and `SDCSparkScanView.targetModeHintText`.
  - `barcode.spark.ui.SparkScanToastSettings.CameraTimeoutMessage`.
  - `SDCSparkScanViewSettings.targetZoomFactorOut` and `SDCSparkScanViewSettings.targetZoomFactorIn` replaced by `SDCSparkScanViewSettings.zoomFactorOut` and `SDCSparkScanViewSettings.zoomFactorIn`.
  - `SDCSparkScanViewSettings.continuousCaptureTimeout` replaced by `SDCSparkScanViewSettings.inactiveStateTimeout`.
  - `SDCSparkScanViewFeedback`, `SDCSparkScanFeedback`, `SDCSparkScanView.brush`, and `SDCSparkScanView.emitFeedback` replaced by `SDCSparkScanBarcodeFeedback` and `SDCSparkScanView.feedbackDelegate`.

## 6.22.2

**Released**: April 30, 2024

* Removed unused code and updated the privacy manifest to conform to the [new privacy requirements](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files).

## 6.22.1

**Released**: March 13, 2024

* Fixed a licensing issue where a Barcode Scanner license was wrongly required when scanning the back side of a UK driver’s license.

## 6.22.0

**Released**: February 16, 2024

### New Features

#### Barcode

- **IATA Bar Coded Boarding Pass (BCBP) Support**: The Parser now supports `SDCParserDataFormatIataBcbp` according to the latest specifications from the 2023-2024 Passenger Services Conference Resolution Manual (PSCRM). For complete documentation, refer to the official website.
  
- **SparkScan UI Improvements**:
  - Redesigned minimized trigger button to occupy less space when the scanner is stopped.
  - Slightly decreased size of the expanded trigger button to leave more space for the underlying application.
  - Setting toolbar now shows fewer options by default (Target Mode and Torch), offering a less crowded and more efficient user experience. Icon visibility can still be personalized in `SDCSparkScanView`.
  
- **New Features and Improvements**:
  - Added `SDCBarcodeGenerator.upcaBarcodeGeneratorBuilderWithContext:` to generate UPCA barcodes.
  - Added QR symbology extension called `strict` to suppress rare QR reader false positives, reducing the scan robustness of damaged codes.
  - Introduced smart battery management to lower energy consumption and increase device uptime, with up to 15% improvement in battery life during tests. This option is disabled by default but can be enabled via `SDCBarcodeCaptureSettings.batterySavingMode`.

#### ID

- **New Features and Improvements**:
  - Added `SDCAAMVAVizBarcodeComparisonResult.frontMismatchImage` to visualize document data printed on the front side that differs from the barcode. Contact [support@scandit.com](mailto:support@scandit.com) to use this feature.
  - Improved the accuracy of `SDCAAMVAVizBarcodeComparisonVerifier`.
  - Improved the accuracy of `SDCVizMrzComparisonVerifier`.
  - Added `SDCIdCaptureOverlay.textHintPosition` to set the position of textual hints.
  - Added `SDCIdCaptureOverlay.showTextHints` for showing/hiding text hints.
  - Replay the flip document animation when the user keeps scanning the wrong side of the document.
  - Added `SDCAAMVAVizBarcodeComparisonResult.frontMismatchImage` to highlight suspicious fields (currently in beta).

### Performance Improvements

#### Barcode

- Improved QR code scan performance for codes occluded by glare.
- Improved scan performance for 1D barcodes with missing or damaged quiet zones.

### Bug Fixes

#### Barcode

- Fixed incorrect EAN13/UPCA checksum computation when generating barcodes with `SDCBarcodeGenerator`.
- Fixed a bug in handling active symbol counts for Codabar.

#### ID

- Fixed an issue where US Border Crossing Cards were not recognized.

### Deprecations

#### Barcode

- Deprecated `SDCSparkScanViewSettings.ignoreDragLimits`. There is no drag limit anymore; the button can be repositioned from the bottom to the top of the screen.