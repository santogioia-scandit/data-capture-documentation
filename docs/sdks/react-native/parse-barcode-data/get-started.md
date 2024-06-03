---
sidebar_position: 2
---

# Get Started

The parser parses data strings, e.g. as found in barcodes, into a set of key-value mappings. In this guide, you will know briefly how to use a parser and what types of parser are currently supported by Scandit. These data formats are supported: [Health Industry Bar Code (HIBC)](parser/hibc.html), [GS1 Application Identifier (parser/AI) system](parser/gs1ai.html) and [Swiss QR Codes](parser/swissqr.html), [VIN Vehicle Identification Number](parser/vin.html), [IATA Bar Coded Boarding Pass (BCBP)](parser/iata-bcbp.html).

More data formats will be added in future releases. Please contact us if the data format you are using is not yet supported, or you want to use the parser on a currently unsupported platform.

## Format-Specific Documentation

- [Supported Data Formats](parser/formats.html)
- [HIBC](parser/hibc.html)
- [GS1 AI](parser/gs1ai.html)
- [Swiss QR](parser/swissqr.html)
- [VIN](parser/vin.html)
- [IATA BCBP](parser/iata-bcbp.html)

## Prerequisites

Before starting with adding a capture mode, make sure that you have a valid Scandit Data Capture SDK license key and that you added the necessary dependencies. If you have not done that yet, check out [this guide](add-sdk.html).

:::note
You can retrieve your Scandit Data Capture SDK license key, by signing in to your account at [ssl.scandit.com/dashboard/sign-in](https://ssl.scandit.com/dashboard/sign-in).
:::

First of all, include the ScanditParser library and its dependencies to your project, if any.

### Internal dependencies

Some of the Scandit Data Capture SDK modules depend on others to work:

| Module                                   | Dependencies                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| scandit-react-native-datacapture-core    | No dependencies                                                                            |
| scandit-react-native-datacapture-barcode | scandit-react-native-datacapture-core                                                      |
| scandit-react-native-datacapture-parser  | scandit-react-native-datacapture-core                                                      |
| scandit-react-native-datacapture-text    | scandit-react-native-datacapture-core                                                      |
| scandit-react-native-datacapture-id      | scandit-react-native-datacapture-core scandit-react-native-datacapture-text(VIZ documents) |
