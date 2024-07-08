---
toc_max_heading_level: 4
displayed_sidebar: reactnativeSidebar
hide_title: true
title: Release Notes
---

## 6.25.0

**Released:** July 5, 2024

### New Features

#### Barcode

* Added the ability to hide the progress bar when counting against a list with BarcodeCount: [`BarcodeCountView.shouldShowListProgressBar`](https://docs.scandit.com/data-capture-sdk/react-native/barcode-capture/api/ui/barcode-count-view.html#property-scandit.datacapture.barcode.count.ui.BarcodeCountView.ShouldShowListProgressBar).

#### ID

* Added the following properties to [`SDCVizResult`](https://docs.scandit.com/data-capture-sdk/web/id-capture/api/viz-result.html#viz-result):
  - `SDCVizResult.bloodType` to represent the blood type of the document owner.
  - `SDCVizResult.sponsor` to represent the sponsor of the document owner.
  - `SDCVizResult.mothersName` to represent the mother’s name of the document owner.
  - `SDCVizResult.fathersName` to represent the father’s name of the document owner.
* Added [`IdCaptureSettings.rejectVoidedIds`](https://docs.scandit.com/data-capture-sdk/react-native/id-capture/api/id-capture-settings.html#property-scandit.datacapture.id.IdCaptureSettings.RejectVoidedIds). When enabled, documents voided by authorities are rejected.
  :::warning
  This feature currently supports 3 kinds of invalidation: Cut corners, holes punched in the document, and “VOID” perforations. Additionally, this feature currently supports only US Driver’s Licenses, and has no effect when scanning other document types.
  :::
* Added [`RejectedId.rejectionReason`](https://docs.scandit.com/data-capture-sdk/react-native/id-capture/api/rejected-id.html#property-scandit.datacapture.id.RejectedId.RejectionReason) which contains the reason the document was rejected.
* Improved the extraction of the document number from UK driver’s licenses.
* Added _scandit-react-native-datacapture-id-voided-detection_ library that must be included when activating `IdCaptureSettings.rejectVoidedIds`.

### Performance Improvements

#### Barcode

* Improved recognition rate for Composite A and Composite B barcodes, thanks to an increased robustness for small and low resolution MicroPDF417.
* Improved recognition rate of long, thin linear 1d codes, such as those found on electronic shelf labels (ESLs).
* Improved recognition rate of linear codes which are partially affected by damage or glare, with a particular focus on codabar barcodes.

#### ID

* Improved the accuracy of the AAMVA Barcode Verification.

## 6.24.0

**Released**: May 8, 2024

### New Features

#### Barcode

- **Smart Scan Intention**: Introduced a new algorithm that intelligently identifies and scans the intended barcode, reducing errors. Enabled by default in SparkScan (`SparkScanSettings.scanIntention`) and can be manually set in Barcode Capture (`BarcodeCaptureSettings.scanIntention`).

- **Improved Scanning Range**: Enhanced scanning range for 1D barcodes on Electronic Shelf Labels (ESL) and paper shelf labels by 30-40% in both Full HD and 4K without compromising scanning speed. This improvement benefits scanning tiny barcodes and ESLs, especially those on top or bottom shelves.

- **Smart Battery Management**: Introduced smart battery management to lower energy consumption and increase device uptime. Tests show up to a 15% improvement in battery life. This option is disabled by default but can be enabled via `BarcodeCaptureSettings.batterySavingMode`.

- **User-Facing Camera**: SparkScan now allows switching to the user-facing camera for scanning, useful in scenarios where the rear camera is not accessible or barcodes are hard to reach. See `SparkScanView.cameraSwitchButtonVisible`.

- **Barcode Generation**: Added `BarcodeGenerator` class, allowing the generation of Code 39, Code 128, EAN13, ITF, QR, UPCA, and DataMatrix codes directly in the SDK.

- **New Symbology Supports**:
  - **Symbology.FrenchPost**: Recognizes postal codes used by the French Post.
  - **Symbology.AustralianPost**: Decodes misprinted Australian Post codes.

#### ID

- **State-Specific Thresholds in ID Verification**: Added support for per-state thresholds and removed the hardcoded number of features. This is a breaking change; old verification models will not work.

- **Timeout Callback Modification**: Modified `IdCaptureListener.didTimeoutInSession()` to be invoked whenever a document is localized for a period but not captured.

- **Fixed Surnames in US Driver’s Licenses**: Fixed truncated surnames in US driver’s licenses using magnetic stripe format.

- **Newly Supported Documents for MRZ Scanning**:
  - Mexico: Matrícula Consular

- **Newly Supported Documents for Front of Card/VIZ Scanning**:
  - USA:
    - District of Columbia - Driver License & ID Card (2023 version)
    - Idaho - Driver License & ID Card (2023 version)
    - North Dakota - Driver License & ID Card (2023 version)
    - West Virginia - Driver License & ID Card (2023 version)
    - Wisconsin - Driver License & ID Card (2023 version)
  - Mexico: Consular Voter ID

### Behavioral Changes

#### Barcode

- **Battery Saving Mode**: Changed from `BatterySavingMode.Off` to `BatterySavingMode.Auto`. This can be changed via `SparkScanSettings.batterySaving`.

# Performance Improvements

#### ID

- **Improved Capture Performance**: Enhanced capture performance for US driver’s license PDF417 barcodes with printing defects, particularly from Ohio, Louisiana, and Florida.

### Bug Fixes

#### Barcode

- Fixed the “Tap to Focus” animation when the view size changes.

#### ID

- Fixed a crash when scanning a passport MRZ followed by a non-passport VIZ.
- Fixed an issue causing the century of birth dates, issue dates, and expiry dates to be returned incorrectly when scanning the VIZ of European IDs, Swiss driver’s licenses, and UAE IDs.
- Fixed instances where information was incorrectly extracted from British Columbia PDF417.

### API Changes

#### Barcode

- **Renamed Methods in BarcodePickView**:
  - **Lifecycle Methods**:
    - When the AppState changes to active, `BarcodePickView.resume()` should be called.
    - When the AppState changes to inactive or background, `BarcodePickView.pause()` should be called.
  - **Start/Stop Scanning**:
    - `BarcodePickView.start()`: Starts the scanning flow and can be manually stopped by calling `BarcodePickView.stop()`. It will be stopped automatically when `BarcodePickView.pause()` is called and resumed with `BarcodePickView.resume()`.
    - `BarcodePickView.stop()`: Stops the scanning flow and can be manually started by calling `BarcodePickView.start()`.

:::note
Scanning is only possible when in resumed state, meaning `BarcodePickView.start()` won’t start the scanning flow if `BarcodePickView.resume()` isn’t called before or afterwards.
:::