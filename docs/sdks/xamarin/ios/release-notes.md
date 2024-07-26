---
toc_max_heading_level: 4
displayed_sidebar: xamarinIosSidebar
hide_title: true
title: Release Notes
pagination_prev: null
---

## 6.25.0

**Released:** July 5, 2024

### New Features

#### Barcode

* Added the ability to hide the progress bar when counting against a list with BarcodeCount: [`BarcodeCountView.shouldShowListProgressBar`](https://docs.scandit.com/data-capture-sdk/xamarin.ios/barcode-capture/api/ui/barcode-count-view.html#property-scandit.datacapture.barcode.count.ui.BarcodeCountView.ShouldShowListProgressBar).
* Introduced smart battery management to lower the energy consumption and increase the up-time of the device. In our tests of repeatedly scanning a sequence of 5 different labels mimicking the user movement, this led to an improvement of up to 15% in battery life.
  - This option is disabled by default, but can be enabled via [`BarcodeCaptureSettings.BatterySavingMode`](https://docs.scandit.com/data-capture-sdk/xamarin.ios/barcode-capture/api/barcode-capture-settings.html#property-scandit.datacapture.barcode.BarcodeCaptureSettings.BatterySavingMode), deciding whether it’s automatic, always on or always off (default).

#### ID

* Improved the extraction of the document number from UK driver’s licenses.
* Added [`AamvaBarcodeResult.FirstNameWithoutMiddleName`](https://docs.scandit.com/data-capture-sdk/xamarin.ios/id-capture/api/aamva-barcode-result.html#property-scandit.datacapture.id.AamvaBarcodeResult.FirstNameWithoutMiddleName).
* Added the following properties to [`IdCaptureOverlay`](https://docs.scandit.com/data-capture-sdk/xamarin.ios/id-capture/api/ui/id-capture-overlay.html#class-scandit.datacapture.id.ui.IdCaptureOverlay):
  - `IdCaptureOverlay.TextHintPosition` that allows setting of textual hint position.
  - `IdCaptureOverlay.ShowTextHints` for showing/hiding text hints.
  - `IdCaptureOverlay.SetFrontSideTextHint()` that allows to set custom text for textual hint displayed when scanning the front of document.
  - `IdCaptureOverlay.SetBackSideTextHint()` that allows to set custom text for textual hint displayed when scanning the back of document.

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

- **Smart Scan Intention**: Introduced a new algorithm that intelligently identifies and scans the intended barcode, reducing errors. Enabled by default in SparkScan (`SparkScanSettings.ScanIntention`) and can be manually set in Barcode Capture (`BarcodeCaptureSettings.ScanIntention`).

- **Improved Scanning Range**: Enhanced scanning range for 1D barcodes on Electronic Shelf Labels (ESL) and paper shelf labels by 30-40% in both Full HD and 4K without compromising scanning speed. This improvement benefits scanning tiny barcodes and ESLs, especially those on top or bottom shelves.

- **User-Facing Camera**: SparkScan now allows switching to the user-facing camera for scanning, useful in scenarios where the rear camera is not accessible or barcodes are hard to reach. See `SparkScanView.CameraSwitchButtonVisible`.

- **New Symbology Support**:
  - **Symbology.AustralianPost**: Added support for decoding misprinted Australian Post codes.

#### ID

- **State-Specific Thresholds in ID Verification**: Added support for per-state thresholds and removed the hardcoded number of features. This is a breaking change; old verification models will not work.

- **Timeout Callback Modification**: Modified `IIdCaptureListener.OnIdCaptureTimedOut()` to be invoked whenever a document is localized for a period but not captured.

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

- **Battery Saving Mode**: Changed from `BatterySavingMode.Off` to `BatterySavingMode.Auto`. This can be changed via `SparkScanSettings.BatterySaving`.

### Performance Improvements

#### ID

- **Improved Capture Performance**: Enhanced capture performance for US driver’s license PDF417 barcodes with printing defects, particularly from Ohio, Louisiana, and Florida.

### Bug Fixes

#### Barcode

- Fixed the “Tap to Focus” animation when the view size changes.

#### ID

- Fixed a crash when scanning a passport MRZ followed by a non-passport VIZ.
- Fixed an issue causing the century of birth dates, issue dates, and expiry dates to be returned incorrectly when scanning the VIZ of European IDs, Swiss driver’s licenses, and UAE IDs.
- Fixed instances where information was incorrectly extracted from British Columbia PDF417.