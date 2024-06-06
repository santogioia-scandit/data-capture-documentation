---
toc_max_heading_level: 4
displayed_sidebar: flutterSidebar
hide_title: true
title: Release Notes
---

## 6.24.0

**Released**: May 8, 2024

### New Features

#### Barcode

- **Smart Scan Intention**: Introduced a new algorithm that intelligently identifies and scans the barcode that the user intends to capture, reducing errors. Enabled by default in SparkScan (`SparkScanSettings.scanIntention`) and can be manually set in Barcode Capture (`BarcodeCaptureSettings.scanIntention`).

- **Improved Scanning Range**: Enhanced scanning range for 1D barcodes on Electronic Shelf Labels (ESL) and paper shelf labels by 30-40% in both Full HD and 4K without compromising scanning speed. This improvement enables the fastest and most ergonomic scanning experience for tiny barcodes and ESLs, particularly those placed on top or bottom shelves.

- **Smart Battery Management**: Introduced smart battery management to lower energy consumption and increase the up-time of the device. Tests show up to a 15% improvement in battery life. This option is disabled by default but can be enabled via `BarcodeCaptureSettings.batterySavingMode`, with settings for automatic, always on, or always off (default).

- **User-Facing Camera**: SparkScan now allows switching to the user-facing camera for scanning, useful in scenarios where the rear camera is not accessible or barcodes are hard to reach. See `SparkScanView.cameraSwitchButtonVisible`.

- **New Symbology Supports**:
  - **Symbology.frenchPost**: Allows the recognition of postal codes (code postal) used by the French Post.
  - **Symbology.australianPost**: Added support for decoding misprinted Australian Post codes.

#### ID

- **State-Specific Thresholds in ID Verification**: Added support for per-state thresholds and removed the hardcoded number of features. This is a breaking change; old verification models will not work.

- **Timeout Callback Modification**: Modified `IdCaptureListener.didTimedOut()` to be invoked whenever a document is localized for a period of time but could not be captured.

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

- **Battery Saving Mode**: Changed from `BatterySavingMode.off` to `BatterySavingMode.auto`. This can be changed via `SparkScanSettings.batterySaving`.

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

### API Changes

#### Barcode

- **Renamed Methods in BarcodePickView**:
  - **Lifecycle Methods**:
    - When a widget is shown or when `AppLifecycleState` is `AppLifecycleState.resumed`, `BarcodePickView.resume()` should be called.
    - When you navigate to a new widget, hide the widget, or `AppLifecycleState` is not `AppLifecycleState.resumed`, `BarcodePickView.pause()` should be called.
  - **Start/Stop Scanning**:
    - `BarcodePickView.start()`: Starts the scanning flow and can be manually stopped by calling `BarcodePickView.stop()`. It will be stopped automatically when `BarcodePickView.pause()` is called and resumed with `BarcodePickView.resume()`.
    - `BarcodePickView.stop()`: Stops the scanning flow and can be manually started by calling `BarcodePickView.start()`.

:::note
Scanning is only possible when in resumed state, meaning `BarcodePickView.start()` won’t start the scanning flow if `BarcodePickView.resume()` isn’t called before or afterwards.
:::