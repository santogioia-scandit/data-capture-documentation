---
sidebar_position: 1
toc_max_heading_level: 4
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

This page describes how to integrate the Scandit Data Capture SDK into your Capacitor project.

## Prerequisites

- The latest stable version of [Capacitor and other related tools and dependencies](https://capacitorjs.com/docs/getting-started).
- A project with minimum iOS deployment target of 11.0 or higher. Or an Android project with target SDK version 23 (Android 6, Marshmallow) or higher.
- A valid Scandit Data Capture SDK license key. You can sign up for a free [test account](https://ssl.scandit.com/dashboard/sign-up?p=test&utm%5Fsource=documentation).

:::note
Android devices running the Scandit Data Capture SDK need to have a GPU or the performance will drastically decrease.
:::

## Get a License Key

1. [Sign up](https://ssl.scandit.com/dashboard/sign-up?p=test) or [Sign in](https://ssl.scandit.com/dashboard/sign-in) to your Scandit account
2. Create a project
3. Create a license key

If you have a paid subscription, please reach out to [Scandit Support](mailto:support%40scandit.com) if you need a new license key.

## Add the SDK

Currently we support adding the Scandit Data Capture SDK Capacitor plugins to your project in two ways. The simplest way is to use the npm registry, alternatively you can manually download the plugins and add them to your project.

:::note
You should always make sure to add the scandit-capacitor-datacapture-core plugin, as all other plugins depend on it.
:::

### 1. Create a new project (optional)

If you do not have a Capacitor project yet that you’ll use, you should create a new one.

```sh
npx cap init
npx cap add ios
npx cap add android
```

### 2a. Add the Scandit Data Capture SDK from the npm registry

To add our plugins from the npm registry, you can run these commands from your project’s root folder. In the following snippet we’re adding [ScanditBarcodeCapture API](https://docs.scandit.com/data-capture-sdk/capacitor/barcode-capture/api.html)

```sh
yarn add scandit-capacitor-datacapture-core
yarn add scandit-capacitor-datacapture-barcode
```

:::note
You can also specify a version `@<version>`.
:::

### 2b. Add the Scandit Data Capture SDK manually

After you download the [archive](https://ssl.scandit.com/dashboard/downloads) containing all the plugins, unzip the archive. It includes the available Capacitor plugins, including the scandit-capacitor-datacapture-core plugin that all other plugins depend on.

First add scandit-capacitor-datacapture-core plugin:

```sh
yarn add <path to scandit-capacitor-datacapture-core plugin>
```

Once this is done, you can continue with adding the plugin for your desired functionality, e.g. for barcode capture, add the scandit-capacitor-datacapture-barcode plugin:

```sh
yarn add <path to scandit-capacitor-datacapture-barcode plugin>
```

### 3. Update the project

After adding the plugins, you’ll want to make sure they’re added to your project properly:

```sh
# iOS
npx cap sync

# Android
npx cap update android
npx cap sync
```
