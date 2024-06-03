---
sidebar_position: 1
toc_max_heading_level: 4
---

# About ID Capture

ID Capture provides the capability to scan personal identification documents, such as identity cards, passports or visas, covering everything from checking the age or name on a person’s ID to conducting complex analysis of identity documents to verify if they are real or fake.

Scandit ID Capture software captures data from IDs using a combination of text recognition (optical character recognition/OCR), barcode scanning, and image recognition. This data can be instantly analyzed, on-device, to determine if the ID is authentic.

The scanning and validation results can be used to enable real-time decision making and workflow automation at scale. For example, frontline workers can be given an instant age calculation from the extracted date of birth and/or guidance on whether an ID is real or fake.

ID Capture runs on any smart device with a camera, including smartphones, tablets, and dedicated scanners.

## Supported ID Types

ID Capture supports scanning and verifying ID documents based on their Machine Readable Zone (MRZ), Barcodes, and human-readable text. The following ID types are supported:

### Machine Readable Zone (MRZ) Documents

Scandit ID Capture supports all versions of Machine Readable Travel Documents (MRTD) specified by the International Civil Aviation Organization (ICAO). This includes all documents of the types TD1 (ID cards), TD2 (other official travel documents), TD3/MRP (passports) and MRV (visas).

:::note
More information can be found in the API documentation of `SDCCapturedId` and `SDCMrzResult`.
:::

In addition, ID Capture supports some non-ICAO standards. A non-exhaustive list of supported documents can be found below.

| Region      | Supported Document Types                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Worldwide   | Passport (TD3)                                                                                    |
| Europe      | All ID Cards (TD1/TD2)                                                                            |
| USA         | Enhanced Driver’s License (TD1)                                                                   |
|             | Green Card, Passport Card, Border Crossing Card, NEXUS + Global Entry Cards (TD1)                 |
| Canada      | Enhanced Driver’s License (TD1)                                                                   |
| Switzerland | Driver’s License (non-ICAO)                                                                       |
| Asia        | China Mainland Travel Permit for Hong Kong & Macau Residents (non-ICAO)                           |
|             | China Mainland Travel Permit for Taiwan Residents (non-ICAO)                                      |
|             | China Exit-Entry Permit for Traveling to and from Hong Kong and Macau (往来港澳通行证) (non-ICAO) |
|             | China Exit-Entry Permit for Traveling to and from Taiwan (往来台灣通行证) (non-ICAO)              |
|             | APEC (Asia-Pacific Economic Cooperation) Business Travel Card (non-ICAO)                          |

### Barcode ID Formats

ID Capture supports the following documents with PDF417 barcodes:

| Country      | Supported Document Types                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| USA          | AAMVA-compliant documents: ID Capture supports all versions of the Driver License and Identification Standard published by AAMVA. Some pre-Standard barcodes (documents issued before 2000) may also be successfully parsed, if their format doesn’t differ much from version 1 of the Standard. **Encrypted barcodes issued in the US State of Georgia before 2012 are currently not supported**. More information can be found in the API documentation of `SDCCapturedId` and `SDCAAMVABarcodeResult`. |
|              | US Uniformed Services Identification Card with PDF417 barcodes: both Sponsor and Dependant documents are supported (versions 1, 2 and 3). More information can be found in the API Documentation of `SDCCapturedId` and `SDCUsUniformedServicesBarcodeResult`.                                                                                                                                                                                                                                            |
|              | Common Access Card: the PDF417 on the front side of the document.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Argentina    | ID Card (Documento Nacional de Identidad): the PDF417 on the front side of the document. More information can be found in the API Documentation of `SDCCapturedId` and `SDCArgentinaIdBarcodeResult`.                                                                                                                                                                                                                                                                                                     |
| Colombia     | ID Card (Cédula de Ciudadanía): the PDF417 on the back side of the document. More information can be found in the API Documentation of `SDCCapturedId` and `SDCColombiaIdBarcodeResult`.                                                                                                                                                                                                                                                                                                                  |
|              | Driver’s License (Licencia de Conducción): The PDF417 on the back side of the document. More information can be found in the API Documentation of `SDCCapturedId` and `SDCColombiaDlBarcodeResult`.                                                                                                                                                                                                                                                                                                       |
| South Africa | Driver’s License - version 2: the PDF417 on the back side of the document. More information can be found in the API Documentation of `SDCCapturedId` and `SDCSouthAfricaDLBarcodeResult`.                                                                                                                                                                                                                                                                                                                 |
|              | Smart ID Card: the PDF417 on the back side of the document. More information can be found in the API Documentation of `SDCCapturedId` and `SDCSouthAfricaIdBarcodeResult`.                                                                                                                                                                                                                                                                                                                                |

### Human-Readable Text

#### Asia

| Country             | Supported Document Types                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| Afghanistan         | ID Card                                                                                          |
| Armenia             | ID Card                                                                                          |
| Azerbaijan          | ID Card                                                                                          |
| Bangladesh          | ID Card, Passport                                                                                |
| Brunei              | ID Card                                                                                          |
| Cambodia            | ID Card, Passport                                                                                |
| China               | Passport                                                                                         |
| Hong Kong           | ID Card                                                                                          |
| India               | PAN Card, Voter ID, Passport                                                                     |
| India - Karnataka   | Driver’s License                                                                                 |
| India - Maharashtra | Driver’s License                                                                                 |
| Indonesia           | Driver’s License, ID Card, Passport                                                              |
| Japan               | Passport                                                                                         |
| Kyrgyzstan          | ID Card                                                                                          |
| Malaysia            | Driver’s License, Refugee ID, MyKid, i-Kad, MyTentera, MyKad, Passport, MyPR, MyKAS              |
| Maldives            | ID Card                                                                                          |
| Myanmar             | Driver’s License, Passport                                                                       |
| Nepal               | Passport                                                                                         |
| Pakistan            | Consular ID, ID Card, Passport                                                                   |
| Pakistan - Punjab   | Driver’s License                                                                                 |
| Philippines         | Driver’s License, Professional ID, ID Card, Passport, Multipurpose ID, Social Security Card      |
| Singapore           | Driver’s License, S Pass, Fin Card, Employment Pass, Resident ID, Work Permit, ID Card, Passport |
| Sri Lanka           | Driver’s License, ID Card, Passport                                                              |
| Thailand            | Alien ID, ID Card, Passport                                                                      |
| Uzbekistan          | Passport                                                                                         |

#### Europe

| Country                | Supported Document Types                                                          |
| ---------------------- | --------------------------------------------------------------------------------- |
| Albania                | Driver’s License, ID Card, Passport                                               |
| Austria                | Driver’s License, ID Card, Passport                                               |
| Belarus                | Driver’s License, ID Card, Passport                                               |
| Belgium                | Driver’s License, Residence Permit, Resident ID, ID Card, Passport, Minors ID     |
| Bosnia And Herzegovina | ID Card, Driver’s License, Passport                                               |
| Bulgaria               | ID Card, Driver’s License, Passport                                               |
| Croatia                | Driver’s License, ID Card, Passport                                               |
| Cyprus                 | Driver’s License, ID Card, Residence Permit, Passport                             |
| Czechia                | Driver’s License, ID Card, Residence Permit, Passport                             |
| Denmark                | Driver’s License, Passport                                                        |
| Estonia                | Driver’s License, ID Card, Passport                                               |
| Finland                | Alien ID, Driver’s License, ID Card, Passport, Residence Permit                   |
| France                 | Driver’s License, ID Card                                                         |
| Georgia                | Driver’s License, ID Card                                                         |
| Germany                | Driver’s License, ID Card, Residence Permit, Passport                             |
| Greece                 | Driver’s License, ID Card, Residence Permit, Passport                             |
| Hungary                | Driver’s License, ID Card, Passport                                               |
| Ireland                | Driver’s License, Public Services Card, Passport Card, Passport                   |
| Italy                  | Driver’s License, ID Card, Residence Permit                                       |
| Kosovo                 | Driver’s License, ID Card, Passport                                               |
| Latvia                 | Alien ID, ID Card, Driver’s License, Passport                                     |
| Liechtenstein          | ID Card                                                                           |
| Lithuania              | Driver’s License, ID Card, Passport, Residence Permit                             |
| Luxembourg             | Driver’s License, ID Card, Residence Permit, Passport                             |
| Malta                  | Driver’s License, ID Card, Residence Permit                                       |
| Montenegro             | Driver’s License, ID Card, Passport                                               |
| Netherlands            | Driver’s License, ID Card, Residence Permit, Passport                             |
| North Macedonia        | ID Card, Driver’s License, Passport                                               |
| Norway                 | Driver’s License, ID Card, Residence Permit, Passport                             |
| Poland                 | Driver’s License, ID Card, Passport                                               |
| Portugal               | Driver’s License, ID Card, Passport                                               |
| Romania                | Driver’s License, ID Card, Passport                                               |
| Russia                 | Driver’s License, Passport                                                        |
| Serbia                 | ID Card, Driver’s License, Passport                                               |
| Slovakia               | Driver’s License, ID Card, Residence Permit, Passport                             |
| Slovenia               | Driver’s License, ID Card, Residence Permit, Passport                             |
| Spain                  | Alien ID, Driver’s License, ID Card, Passport, Residence Permit                   |
| Sweden                 | Driver’s License, ID Card, Passport, Residence Permit, Social Security Card       |
| Switzerland            | Driver’s License, ID Card, Residence Permit, Passport                             |
| UK                     | Driver’s License, Residence Permit, Proof of Age Card, Passport                   |
| Ukraine                | Temporary Residence Permit, Driver’s License, Residence Permit, Passport, ID Card |

#### Central and South America

| Country                           | Supported Document Types                                                |
| --------------------------------- | ----------------------------------------------------------------------- |
| Argentina                         | Alien ID, ID Card, Passport                                             |
| Bahamas                           | Driver’s License                                                        |
| Bolivia                           | Driver’s License, ID Card, Minors ID                                    |
| Brazil                            | Driver’s License                                                        |
| Brazil - Rio De Janeiro           | ID Card                                                                 |
| Brazil - Sao Paolo                | ID Card                                                                 |
| Chile                             | Alien ID, ID Card, Driver’s License, Passport                           |
| Colombia                          | Alien ID, Driver’s License, ID Card, Passport, Minors ID                |
| Costa Rica                        | ID Card                                                                 |
| Cuba                              | Passport                                                                |
| Dominican Republic                | ID Card, Passport                                                       |
| Ecuador                           | Driver’s License, ID Card                                               |
| El Salvador                       | ID Card                                                                 |
| Guatemala                         | Driver’s License, Consular ID, ID Card, Passport                        |
| Guyana                            | ID Card                                                                 |
| Haiti                             | Driver’s License, ID Card, Passport                                     |
| Jamaica                           | Driver’s License, Passport                                              |
| Mexico                            | Voter ID, Passport                                                      |
| Mexico - Aguascalientes           | Driver’s License                                                        |
| Mexico - Baja California          | Driver’s License                                                        |
| Mexico - Chiapas                  | Driver’s License                                                        |
| Mexico - Chihuahua                | Driver’s License                                                        |
| Mexico - Ciudad De Mexico         | Driver’s License                                                        |
| Mexico - Coahuila                 | Driver’s License                                                        |
| Mexico - Colima                   | Driver’s License                                                        |
| Mexico - Durango                  | Driver’s License                                                        |
| Mexico - Guanajuato               | Driver’s License                                                        |
| Mexico - Hidalgo                  | Driver’s License                                                        |
| Mexico - Jalisco                  | Driver’s License                                                        |
| Mexico - Mexico                   | Driver’s License                                                        |
| Mexico - Michoacan                | Driver’s License                                                        |
| Mexico - Morelos                  | Driver’s License                                                        |
| Mexico - Nuevo Leon               | Driver’s License                                                        |
| Mexico - Oaxaca                   | Driver’s License                                                        |
| Mexico - Quintana Roo Solidaridad | Driver’s License                                                        |
| Mexico - San Luis Potosi          | Driver’s License                                                        |
| Mexico - Tamaulipas               | Driver’s License                                                        |
| Mexico - Tlaxcala                 | Driver’s License                                                        |
| Mexico - Zacatecas                | Driver’s License                                                        |
| Nicaragua                         | ID Card                                                                 |
| Panama                            | Driver’s License, ID Card, Residence Permit, Temporary Residence Permit |
| Paraguay                          | Driver’s License, ID Card                                               |
| Peru                              | Driver’s License, ID Card, Passport                                     |
| Puerto Rico                       | Driver’s License                                                        |
| Saint Kitts And Nevis             | Driver’s License                                                        |
| Trinidad And Tobago               | Driver’s License, ID Card, Passport                                     |
| Uruguay                           | ID Card                                                                 |
| Venezuela                         | Driver’s License, ID Card, Passport                                     |

#### Middle East and Africa

| Country      | Supported Document Types                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Algeria      | Driver’s License, ID Card, Passport                                                                                |
| Bahrain      | ID Card (incl. Arabic script)                                                                                      |
| Botswana     | ID Card                                                                                                            |
| Burkina Faso | ID Card                                                                                                            |
| Cameroon     | ID Card                                                                                                            |
| Egypt        | ID Card (incl. Arabic script)                                                                                      |
| Eswatini     | Passport                                                                                                           |
| Ghana        | Driver’s License, ID Card, Passport                                                                                |
| Israel       | Driver’s License                                                                                                   |
| Ivory Coast  | Driver’s License, ID Card                                                                                          |
| Jordan       | ID Card (incl. Arabic script)                                                                                      |
| Kenya        | ID Card, Passport                                                                                                  |
| Kuwait       | Driver’s License, Resident ID (incl. Arabic script), ID Card (incl. Arabic script)                                 |
| Lebanon      | ID Card (incl. Arabic script)                                                                                      |
| Libya        | Passport (incl. Arabic script)                                                                                     |
| Mauritius    | ID Card                                                                                                            |
| Morocco      | Driver’s License, ID Card                                                                                          |
| Mozambique   | ID Card                                                                                                            |
| Nigeria      | Driver’s License, ID Card, Voter ID, Passport                                                                      |
| Oman         | Resident ID (incl. Arabic script), ID Card (incl. Arabic script)                                                   |
| Palestine    | Passport (incl. Arabic script)                                                                                     |
| Qatar        | Driver’s License, Residence Permit (incl. Arabic script), Passport (incl. Arabic script)                           |
| Rwanda       | ID Card                                                                                                            |
| Saudi Arabia | Driver’s License (incl. Arabic script), Resident ID (incl. Arabic script), Passport (incl. Arabic script)          |
| Senegal      | ID Card                                                                                                            |
| South Africa | Driver’s License, ID Card, Passport                                                                                |
| Sudan        | Passport                                                                                                           |
| Syria        | Passport (incl. Arabic script), ID Card (incl. Arabic script)                                                      |
| Tanzania     | Driver’s License                                                                                                   |
| Togo         | ID Card                                                                                                            |
| Tunisia      | Driver’s License, Passport (incl. Arabic script)                                                                   |
| Turkey       | Driver’s License, ID Card, Passport                                                                                |
| UAE          | Driver’s License, Resident ID (incl. Arabic script), Passport (incl. Arabic script), ID Card (incl. Arabic script) |
| Uganda       | Driver’s License, ID Card                                                                                          |
| Zimbabwe     | ID Card, Passport                                                                                                  |

#### North America

| Country                            | Supported Document Types                                                                                                                  |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Canada                             | Tribal ID, Residence Permit, Passport                                                                                                     |
| Canada - Alberta                   | Driver’s License, ID Card                                                                                                                 |
| Canada - British Columbia          | Driver’s License, ID Card, Public Services Card                                                                                           |
| Canada - Manitoba                  | Driver’s License, ID Card                                                                                                                 |
| Canada - New Brunswick             | Driver’s License                                                                                                                          |
| Canada - Newfoundland And Labrador | Driver’s License                                                                                                                          |
| Canada - Nova Scotia               | Driver’s License                                                                                                                          |
| Canada - Ontario                   | Driver’s License, Health Insurance Card, ID Card                                                                                          |
| Canada - Quebec                    | Driver’s License                                                                                                                          |
| Canada - Saskatchewan              | Driver’s License                                                                                                                          |
| Canada - Yukon                     | Driver’s License                                                                                                                          |
| USA                                | Green Card, Work Permit, Border Crossing Card, Global Entry Card, Veteran ID, Passport, Uniformed Services ID, Military ID, Passport Card |
| USA - Alabama                      | Driver’s License*, ID Card*                                                                                                               |
| USA - Alaska                       | Driver’s License, ID Card                                                                                                                 |
| USA - Arizona                      | Driver’s License*, ID Card*                                                                                                               |
| USA - Arkansas                     | Driver’s License*, ID Card*                                                                                                               |
| USA - California                   | Driver’s License*, ID Card*                                                                                                               |
| USA - Colorado                     | Driver’s License\*, ID Card                                                                                                               |
| USA - Connecticut                  | Driver’s License\*, ID Card                                                                                                               |
| USA - Delaware                     | Driver’s License\*                                                                                                                        |
| USA - District Of Columbia         | Driver’s License*, ID Card*                                                                                                               |
| USA - Florida                      | Driver’s License*, ID Card*                                                                                                               |
| USA - Georgia                      | Driver’s License*, ID Card*                                                                                                               |
| USA - Hawaii                       | Driver’s License\*, ID Card                                                                                                               |
| USA - Idaho                        | Driver’s License\*, ID Card                                                                                                               |
| USA - Illinois                     | Driver’s License*, ID Card*                                                                                                               |
| USA - Indiana                      | Driver’s License, ID Card                                                                                                                 |
| USA - Iowa                         | Driver’s License*, ID Card*                                                                                                               |
| USA - Kansas                       | Driver’s License*, ID Card*                                                                                                               |
| USA - Kentucky                     | Driver’s License*, ID Card*                                                                                                               |
| USA - Louisiana                    | Driver’s License                                                                                                                          |
| USA - Maine                        | Driver’s License\*, ID Card                                                                                                               |
| USA - Maryland                     | Driver’s License*, ID Card*                                                                                                               |
| USA - Massachusetts                | Driver’s License*, ID Card*                                                                                                               |
| USA - Michigan                     | Driver’s License*, ID Card*                                                                                                               |
| USA - Minnesota                    | Driver’s License*, ID Card*                                                                                                               |
| USA - Mississippi                  | Driver’s License*, ID Card*                                                                                                               |
| USA - Missouri                     | Driver’s License*, ID Card*                                                                                                               |
| USA - Montana                      | Driver’s License, ID Card                                                                                                                 |
| USA - Nebraska                     | Driver’s License\*, ID Card                                                                                                               |
| USA - Nevada                       | Driver’s License*, ID Card*                                                                                                               |
| USA - New Hampshire                | Driver’s License\*                                                                                                                        |
| USA - New Jersey                   | Driver’s License*, ID Card*                                                                                                               |
| USA - New Mexico                   | Driver’s License\*, ID Card                                                                                                               |
| USA - New York                     | Driver’s License*, ID Card*                                                                                                               |
| USA - New York City                | ID Card                                                                                                                                   |
| USA - North Carolina               | Driver’s License*, ID Card*                                                                                                               |
| USA - North Dakota                 | Driver’s License\*                                                                                                                        |
| USA - Ohio                         | Driver’s License*, ID Card*                                                                                                               |
| USA - Oklahoma                     | Driver’s License*, ID Card*                                                                                                               |
| USA - Oregon                       | Driver’s License\*, ID Card                                                                                                               |
| USA - Pennsylvania                 | Driver’s License*, ID Card*                                                                                                               |
| USA - Rhode Island                 | Driver’s License\*, ID Card                                                                                                               |
| USA - South Carolina               | Driver’s License*, ID Card*                                                                                                               |
| USA - South Dakota                 | Driver’s License\*                                                                                                                        |
| USA - Tennessee                    | Driver’s License*, ID Card*                                                                                                               |
| USA - Texas                        | Driver’s License*, ID Card*                                                                                                               |
| USA - Utah                         | Driver’s License*, ID Card*                                                                                                               |
| USA - Vermont                      | Driver’s License                                                                                                                          |
| USA - Virginia                     | Driver’s License\*, ID Card                                                                                                               |
| USA - Washington                   | Driver’s License*, ID Card*                                                                                                               |
| USA - West Virginia                | Driver’s License                                                                                                                          |
| USA - Wisconsin                    | Driver’s License\*, ID Card                                                                                                               |
| USA - Wyoming                      | Driver’s License, ID Card                                                                                                                 |

\* Vertical IDs are supported

#### Oceania

| Country                                  | Supported Document Types            |
| ---------------------------------------- | ----------------------------------- |
| Australia                                | Passport                            |
| Australia - Australian Capital Territory | Driver’s License                    |
| Australia - New South Wales              | Driver’s License, ID Card           |
| Australia - Northern Territory           | Driver’s License, Proof of Age Card |
| Australia - Queensland                   | Driver’s License                    |
| Australia - South Australia              | Driver’s License, Proof of Age Card |
| Australia - Tasmania                     | Driver’s License                    |
| Australia - Victoria                     | Driver’s License, Proof of Age Card |
| Australia - Western Australia            | Driver’s License                    |
| New Zealand                              | Driver’s License, Passport          |
