---
sidebar_position: 1
toc_max_heading_level: 4
slug: /
sidebar_label: 'Overview'
hide_title: true
displayed_sidebar: sdcSidebar
title: 'Overview'
---

Scandit Smart Data Capture is a powerful suite of solutions designed to enable mobile devices to capture and process a wide range of barcodes and other types of data, including ID scanning and validation. You can use Smart Data Capture to easily build high-performance data capture applications that leverage the latest advancements in computer vision and machine learning.

<CustomDocCardsWrapper>

<CustomDocCard title="Barcode Scanning" description="" link="#barcode-scanning" imgSrc="./img/icons/barcode_capture.svg" smallIcon ></CustomDocCard>

<CustomDocCard title="ID Scanning and Validation" description="" link="#id-scanning-and-validation" imgSrc="./img/icons/id_capture.svg" smallIcon ></CustomDocCard>

</CustomDocCardsWrapper>

## Barcode Scanning

Add barcode scanning to any application, using either the pre-built UI components and the fully-customizable APIs of the Scandit Barcode Scanner SDK, or the Scandit Express application.

### SDK

The Scandit Smart Data Capture SDK provides a comprehensive set of APIs and UI components that enable you to quickly and easily integrate barcode scanning into your mobile application no matter the specific use case. The SDK supports a wide range of [barcode symbologies](./barcode-symbologies.md), including 1D and 2D barcodes, and is available for all major mobile platforms and frameworks.

#### Pre-built UI Components

The Scandit Barcode Scanner SDK provides a set of pre-built UI components that enable you to quickly and easily integrate barcode scanning into your mobile application. These include:

<CustomDocCardsWrapper>

<CustomDocCard title="SparkScan" description="High-speed single scanning" link="./sdks/android/sparkscan/intro" smallIcon ><Sparkscan /></CustomDocCard>

<CustomDocCard title="MatrixScan Count" description="Scanning and counting of multiple items" link="./sdks/android/matrixscan-count/intro" smallIcon ><MsCount /></CustomDocCard>

<CustomDocCard title="MatrixScan Find" description="Search and find items via AR overlays" link="./sdks/android/matrixscan-find/intro" smallIcon ><MsFind/></CustomDocCard>

<CustomDocCard title="Barcode Selection" description="Scan only the desired barcode from many" link="./sdks/android/barcode-selection/intro" smallIcon> <BarcodeSelection /> </CustomDocCard>

</CustomDocCardsWrapper>


#### Fully-customizable APIs

The Scandit Barcode Scanner SDK provides a comprehensive set of APIs that enable you to fully customize the barcode scanning experience in your mobile application. These include:

<CustomDocCardsWrapper>

<CustomDocCard title="Barcode Capture" description="Scanning one or many barcodes" link="./sdks/android/barcode-capture/intro" smallIcon ><BarcodeCapture/></CustomDocCard>

<CustomDocCard title="MatrixScan + AR" description="Identify and track multiple barcodes" link="./sdks/android/matrixscan/intro" smallIcon ><MsAr/></CustomDocCard>

</CustomDocCardsWrapper>

#### Feature Comparison

The table below provides an overview of the features and capabilities, and the use cases, available for the pre-built UI components and the fully-customizable APIs:

<table>
  <thead>
    <tr>
      <th></th>
      <th colSpan="4">Prebuilt Barcode Scanning Components</th>
      <th colSpan="2">Fully-Customizable APIs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>SparkScan</td>
      <td>MatrixScan Count</td>
      <td>MatrixScan Find</td>
      <td>Barcode selection</td>
      <td>Barcode capture</td>
      <td>MatrixScan + Augmented Reality</td>
    </tr>
    <tr>
      <td>Scan one barcode at the time</td>
      <td>✅</td>
      <td>-</td>
      <td>-</td>
      <td>✅</td>
      <td>✅</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Scan multiple barcodes at the same time</td>
      <td>-</td>
      <td>✅</td>
      <td>✅</td>
      <td>-</td>
      <td>-</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Select a single barcode out of many</td>
      <td>✅</td>
      <td>-</td>
      <td>-</td>
      <td>✅</td>
      <td>-</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>AR overlays</td>
      <td>-</td>
      <td>✅</td>
      <td>✅</td>
      <td>-</td>
      <td>-</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>UI</td>
      <td>Out-of-the-box UI</td>
      <td>Out-of-the-box UI</td>
      <td>Out-of-the-box UI</td>
      <td>Out-of-the-box UI</td>
      <td>No pre-built UI</td>
      <td>No pre-built UI</td>
    </tr>
    <tr>
      <td>Extent of customization</td>
      <td>Limited</td>
      <td>Limited</td>
      <td>Limited</td>
      <td>Customizable</td>
      <td>Fully customizable</td>
      <td>Fully customizable</td>
    </tr>
    <tr>
      <td>Use cases and scenarios</td>
      <td>Recommended for all high speed single scanning.</td>
      <td>Recommended for batch scanning during receiving and inventory counting.</td>
      <td>Recommended for search & find scenarios during picking, packing, shipping and clienteling.</td>
      <td>Recommended for scanning one or several of many crowded codes.</td>
      <td>Applicable to all single scanning use cases.</td>
      <td>Applicable to all multi-scanning use cases.</td>
    </tr>
  </tbody>
</table>

### Scandit Express

Scandit Express is an application that enables you to instantly add barcode scanning to any existing app or software tool on a smart device.It requires no software changes or coding effort, and is compatible with any app or system, even those that cannot be modified.

<CustomDocCardsWrapper>

<CustomDocCard title="Scandit Express" description="Get Started with Scandit Express" link="./hosted/express/overview" smallIcon ><Express/></CustomDocCard>

</CustomDocCardsWrapper>


## ID Scanning and Validation

Scandit can capture and extract data from over 2,000 identity documents worldwide. The ID Capture API can be used to read Machine Readable Zones (MRZ) on passports, visa stickers and ID cards, and PDF417 barcodes on the back of driver’s licenses and ID cards, as well as visual inspection zones on the front of various ID documents.

To experience Scandit scanning and verification capabilities firsthand, check out the ID Scanning mode on the Scandit Barcode Scanner Demo App ([iOS](https://apps.apple.com/us/app/scandit-barcode-scanner-demo/id453880584?ls=1), [Android](https://play.google.com/store/apps/details?id=com.scandit.demoapp&pli=1)), our [ID Bolt demo](https://id-travel.demos.scandit.com/) or get started using your desired framework below.

### SDK

<CustomDocCardsWrapper>

<CustomDocCard title="iOS" description="Integrate ID Scanning in iOS" link="./sdks/ios/id-capture/intro" smallIcon ><Ios/></CustomDocCard>

<CustomDocCard title="Android" description="Integrate ID Scanning in Android" link="./sdks/android/id-capture/intro" smallIcon ><Android/></CustomDocCard>

<CustomDocCard title="Web" description="Integrate ID Scanning for Web" link="./sdks/web/id-capture/intro" smallIcon ><Javascript/> </CustomDocCard>

<CustomDocCard title="Cordova" description="Integrate ID Scanning in Cordova" link="./sdks/cordova/id-capture/intro" smallIcon ><Cordova/> </CustomDocCard>

<CustomDocCard title="React Native" description="Integrate ID Scanning in React Native" link="./sdks/react/id-capture/intro" smallIcon ><ReactIcon/> </CustomDocCard>

<CustomDocCard title="Flutter" description="Integrate ID Scanning in Flutter" link="./sdks/flutter/id-capture/intro" smallIcon ><Flutter/> </CustomDocCard>

<CustomDocCard title="Capacitor" description="Integrate ID Scanning in Capacitor" link="./sdks/capacitor/id-capture/intro" smallIcon ><Capacitor/></CustomDocCard>

<CustomDocCard title="Xamarin iOS" description="Integrate ID Scanning in Xamarin iOS" link="./sdks/xamarin/ios/id-capture/intro" smallIcon ><XamarinIos/></CustomDocCard>

<CustomDocCard title="Xamarin Android" description="Integrate ID Scanning for Xamarin Android" link="./sdks/xamarin/android/id-capture/intro" smallIcon ><XamarinAndroid/></CustomDocCard>

<CustomDocCard title="Xamarin Forms" description="Integrate ID Scanning in Xamarin Forms" link="./sdks/xamarin/forms/id-capture/intro" smallIcon ><XamarinForms/></CustomDocCard>

<CustomDocCard title=".NET iOS" description="Integrate ID Scanning in .NET iOS" link="./sdks/net/ios/id-capture/intro" smallIcon ><NetIos/></CustomDocCard>

<CustomDocCard title=".NET Android" description="Integrate ID Scanning in .NET Android" link="./sdks/net/android/id-capture/intro" smallIcon ><NetAndroid/></CustomDocCard>

</CustomDocCardsWrapper>

### ID Bolt

ID Bolt is a cloud-based identity scanning solution that can be quickly and easily integrated into any existing web-based application. ID Bolt can be used to scan and extract data from a wide range of identity documents, including passports, visas, driver’s licenses, and ID cards.

<CustomDocCardsWrapper>


<CustomDocCard title="ID Bolt" description="Get Started with ID Bolt" link="./hosted/id-bolt/overview" smallIcon ><Bolt/></CustomDocCard>


</CustomDocCardsWrapper>
