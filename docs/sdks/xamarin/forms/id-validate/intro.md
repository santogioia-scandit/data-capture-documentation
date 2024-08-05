---
sidebar_position: 1
toc_max_heading_level: 4
pagination_prev: null
---

# About ID Validate

ID Validate builds upon the functionality provided by Scandit [ID Capture](../id-capture/intro.md) to enable the verification of personal identification documents. ID Validate provides the capability to conduct complex analysis of identity documents to verify if they are real or fake.

Scandit ID Capture and Validation software captures data from IDs using a combination of text recognition (optical character recognition/OCR), barcode scanning, and image recognition. This data can be instantly analyzed, on-device, to determine if the ID is authentic.

ID Validate runs on any smart device with a camera, including smartphones, tablets, and dedicated scanners.

## Supported ID Types

ID Validate supports documents that follow the Driver License/Identification Card specification by the American Association of Motor Vehicle Administrators (AAMVA). The following ID types are supported:

### Barcode ID Formats

ID Validate supports the following documents with PDF417 barcodes:

| Country     | Supported Document |
|-------------|-----------------------------------------|
| USA         | AAMVA-compliant documents: ID Validate supports all versions of the Driver License and Identification Standard published by [AAMVA](https://www.aamva.org/). Some pre-Standard barcodes (documents issued before 2000) may also be successfully parsed, if their format doesn’t differ much from version 1 of the Standard. **Encrypted barcodes issued in the US State of Georgia before 2012 are currently not supported**. More information can be found in the API documentation of `SDCCapturedId` and [`SDCAAMVABarcodeResult`](https://docs.scandit.com/data-capture-sdk/xamarin.forms/id-capture/api/aamva-barcode-result.html#class-scandit.datacapture.id.AamvaBarcodeResult). |

### Human-Readable Text

#### North America

| Country - State   | Supported Document Types  |
|--------------------------|--------------------------------------------------------------|
| USA - Alabama            | Driver’s License*       |
| USA - Alaska             | Driver’s License     |
| USA - Arizona            | Driver’s License*       |
| USA - Arkansas           | Driver’s License*       |
| USA - California         | Driver’s License*       |
| USA - Colorado           | Driver’s License*                                              |
| USA - Connecticut        | Driver’s License*                                              |
| USA - Delaware           | Driver’s License*     |
| USA - District Of Columbia | Driver’s License*       |
| USA - Florida            | Driver’s License*       |
| USA - Georgia            | Driver’s License*       |
| USA - Hawaii             | Driver’s License*                                              |
| USA - Idaho              | Driver’s License*                                              |
| USA - Illinois           | Driver’s License*       |
| USA - Indiana            | Driver’s License                                               |
| USA - Iowa               | Driver’s License*       |
| USA - Kansas             | Driver’s License*       |
| USA - Kentucky           | Driver’s License*       |
| USA - Louisiana          | Driver’s License    |
| USA - Maine              | Driver’s License*                                              |
| USA - Maryland           | Driver’s License*       |
| USA - Massachusetts      | Driver’s License*       |
| USA - Michigan           | Driver’s License*       |
| USA - Minnesota          | Driver’s License*       |
| USA - Mississippi        | Driver’s License*       |
| USA - Missouri           | Driver’s License*       |
| USA - Montana            | Driver’s License                                               |
| USA - Nebraska           | Driver’s License*                                              |
| USA - Nevada             | Driver’s License*       |
| USA - New Hampshire      | Driver’s License*     |
| USA - New Jersey         | Driver’s License*       |
| USA - New Mexico         | Driver’s License*                                              |
| USA - New York           | Driver’s License*       |
| USA - North Carolina     | Driver’s License*       |
| USA - North Dakota       | Driver’s License*    |
| USA - Ohio               | Driver’s License*       |
| USA - Oklahoma           | Driver’s License*       |
| USA - Oregon             | Driver’s License*                                              |
| USA - Pennsylvania       | Driver’s License*       |
| USA - Rhode Island       | Driver’s License*                                              |
| USA - South Carolina     | Driver’s License*       |
| USA - South Dakota       | Driver’s License*    |
| USA - Tennessee          | Driver’s License*       |
| USA - Texas              | Driver’s License*       |
| USA - Utah               | Driver’s License*       |
| USA - Vermont            | Driver’s License    |
| USA - Virginia           | Driver’s License*                                              |
| USA - Washington         | Driver’s License*       |
| USA - West Virginia      | Driver’s License    |
| USA - Wisconsin          | Driver’s License*                                              |
| USA - Wyoming            | Driver’s License                                               |

\* Vertical IDs are supported
