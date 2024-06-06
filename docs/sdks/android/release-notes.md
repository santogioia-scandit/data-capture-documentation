---
toc_max_heading_level: 4
displayed_sidebar: androidSidebar
hide_title: true
title: Release Notes
---

## 6.24.0

**Released**: May 8, 2024

### New Features

#### Barcode

- **Smart Scan Intention**: Introduced a new algorithm that intelligently identifies and scans the intended barcode, reducing errors. Enabled by default in SparkScan (`SparkScanSettings.scanIntention`) and can be manually set in Barcode Capture (`BarcodeCaptureSettings.scanIntention`).
  
- **Improved Scanning Range**: Enhanced the scanning range for 1D barcodes on Electronic Shelf Labels (ESL) and paper shelf labels by 30-40% in both Full HD and 4K, without compromising scanning speed. This improvement benefits scanning tiny barcodes and ESLs, especially those on top or bottom shelves.

- **User-Facing Camera**: SparkScan now allows switching to the user-facing camera for scanning. Useful in scenarios where the rear camera is not accessible or barcodes are hard to reach. See `SparkScanView.cameraSwitchButtonVisible`.

- **Dynamic Item List in MatrixScan Find**: Added support for dynamically modifying the list of items to be found by calling `BarcodeFind.setItemList()` during a scanning session.

- **New Symbology Supports**:
  - **Symbology.FRENCHPOST**: Recognizes postal codes used by the French Post.
  - **Symbology.AUSTRALIANPOST**: Decodes misprinted Australian Post codes.

- **BarcodePick View Highlight Styles**: Added new APIs to show different highlights while waiting for an async pick/unpick action. Setters & getters for selected brushes and/or icons are in `Rectangular`, `Dot`, `RectangularWithIcons`, and `DotWithIcons`. Asynchronous selection is available with the new `BarcodePickViewHighlightStyleResponse` constructor.

- **Programmatic Item Selection**: Added `BarcodePick.selectItemWithData()` to programmatically select an item.

- **Progress Bar in BarcodeCountView**: Added `BarcodeCountView.shouldShowListProgressBar` to enable showing/hiding the progress bar when a capture list is set.

#### ID

- **Reject Voided IDs**: Added `IdCaptureSettings.rejectVoidedIds` to reject documents voided by authorities. Supports cut corners, holes punched in the document, and “VOID” perforations. Currently supports only US Driver’s Licenses. Requires the `ScanditIdVoidedDetection` library.
  
- **Rejection Reason**: Added `RejectedId.rejectionReason` to provide the reason for document rejection.

- **State-Specific Thresholds in ID Verification**: Added support for per-state thresholds and removed the hardcoded number of features. This is a breaking change; old verification models will not work.

- **Timeout Callback Modification**: Modified `IdCaptureListener.onIdCaptureTimedOut()` to be invoked when a document is localized for a period but not captured.

- **Additional Features**:
  - Added `AamvaBarcodeResult.rawData`.
  - Fixed truncated surnames in US driver’s licenses using magnetic stripe format.

- **Newly Supported Documents**:
  - **MRZ Scanning**: Mexico: Matrícula Consular
  - **Front of Card/VIZ Scanning**:
    - USA: District of Columbia, Idaho, North Dakota, West Virginia, Wisconsin (2023 versions)
    - Mexico: Consular Voter ID
  - Added `CapturedId.secondaryLastName` containing the common name (“nom d’usage”) on French passports.

#### Parser

- **GS1 Digital Link**: Expanded support to include uncompressed GS1 Digital Link. For complete documentation, refer to the official website.

### Behavioral Changes

#### Barcode

- **Battery Saving Mode**: Changed from `BatterySavingMode.OFF` to `BatterySavingMode.AUTO`. This can be changed via `SparkScanSettings.batterySaving`.

### Performance Improvements

#### ID

- Improved capture performance for US driver’s license PDF417 barcodes with printing defects, particularly from Ohio, Louisiana, and Florida.

### Bug Fixes

#### Barcode

- Fixed the “Tap to Focus” animation when the view size changes.

#### ID

- Fixed a crash when scanning a passport MRZ followed by a non-passport VIZ.
- Fixed incorrect date handling for European IDs, Swiss driver’s licenses, and UAE IDs.
- Fixed incorrect information extraction from British Columbia PDF417.

### API Changes

#### Barcode

- **Renamed Methods in BarcodePickView**:
  - **Lifecycle Methods**:
    - `Activity/Fragment onResume` should call `BarcodePickView.onResume()`.
    - `Activity/Fragment onPause` should call `BarcodePickView.onPause()`.
    - `Activity onDestroy` or `Fragment onDestroyView` should call `BarcodePickView.onDestroy()`.
  - **Start/Stop Scanning**:
    - `BarcodePickView.start()` starts the scanning flow and can be manually stopped by calling `BarcodePickView.stop()`. It will be stopped automatically when `BarcodePickView.onPause()` is called and resumed with `BarcodePickView.onResume()`.
    - `BarcodePickView.stop()` stops the scanning flow and can be manually started with `BarcodePickView.start()`.
  
:::note
Scanning is only possible when in resumed state. `BarcodePickView.start()` will not start scanning if `BarcodePickView.onResume()` is not called before or after.
:::