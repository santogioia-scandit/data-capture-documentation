---
toc_max_heading_level: 4
displayed_sidebar: webSidebar
hide_title: true
title: Release Notes
---

## 6.24.0

**Released**: May 8, 2024

### New Features

#### Barcode

- **Smart Scan Intention**: Introduced a new algorithm named "smart" that intelligently identifies and scans the intended barcode, reducing errors. It can be manually set in Barcode Capture (`BarcodeCaptureSettings.scanIntention`).

- **Advanced Barcode Tracking for WebSDK**: Added advanced Barcode Tracking capabilities with `BarcodeTrackingAdvancedOverlay`, an overlay for `DataCaptureView` that allows anchoring a single user-provided View to each tracked barcode. Users can configure the view displayed for a barcode and its relative position by implementing `BarcodeTrackingAdvancedOverlayListener` or by calling `BarcodeTrackingAdvancedOverlay.setViewForTrackedBarcode()`, `BarcodeTrackingAdvancedOverlay.setAnchorForTrackedBarcode()`, or `BarcodeTrackingAdvancedOverlay.setOffsetForTrackedBarcode()`. For more information, refer to the "Add AR Overlays in MatrixScan" documentation.

#### ID

- **Rejection Reason**: Added `RejectedId.rejectionReason` to provide the reason why a document was rejected.

- **State-Specific Thresholds in ID Verification**: Added support for per-state thresholds and removed the hardcoded number of features. This is a breaking change; old verification models will not work.

- **Timeout Callback Modification**: Modified `IdCaptureListener.didTimedOut()` to be invoked whenever a document is localized for a period but not captured.

- **Fixed Surnames in US Driver’s Licenses**: Fixed truncated surnames in US driver’s licenses using magnetic stripe format.

- **Newly Supported Documents for MRZ Scanning**:
  - Mexico: Matrícula Consular

- **New Feature for French Passports**: Added `CapturedId.secondaryLastName` containing the common name (“nom d’usage”) on French passports.

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