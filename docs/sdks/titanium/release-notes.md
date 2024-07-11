---
toc_max_heading_level: 4
displayed_sidebar: titaniumSidebar
hide_title: true
title: Release Notes
pagination_prev: null
---

## 6.25.0

**Released:** July 5, 2024

### New Features

#### Core

* Increased min Titanium SDK version to 12.2.1.GA.

### Performance Improvements

#### Barcode

* Improved recognition rate for Composite A and Composite B barcodes, thanks to an increased robustness for small and low resolution MicroPDF417.
* Improved recognition rate of long, thin linear 1d codes, such as those found on electronic shelf labels (ESLs).
* Improved recognition rate of linear codes which are partially affected by damage or glare, with a particular focus on codabar barcodes.

## 6.24.0

**Released**: May 8, 2024

### New Features

#### ID

- Added support for per state thresholds in id verification and removed the hardcoded number of features. This is a breaking change, old verification models will not work.

### Bug Fixes

#### Barcode

- Fixed the “Tap to Focus” animation when the view size changes.
