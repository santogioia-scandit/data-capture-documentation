---
sidebar_position: 2
---

# Get Started

In this guide you will learn step-by-step how to add SparkScan to your application.

## Prerequisites

- The latest stable version of [Node.js and npm](https://nodejs.org/en/download/) (required only if including and building the SDK as part of an app, instead of just including it as an external resource from a CDN in HTML).
- A valid Scandit Data Capture SDK license key. You can sign up for a free test account at [ssl.scandit.com](https://ssl.scandit.com/dashboard/sign-up?p=test&utm%5Fsource=documentation).

:::note
Devices running the Scandit Data Capture SDK need to have a GPU and run a browser capable of making it available (requires [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL%5FAPI) \- [current support?](https://caniuse.com/#feat=webgl) and [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) \- [current support?](https://caniuse.com/#feat=offscreencanvas)) or the performance will drastically decrease.
:::

### Add the SDK

### Get a License Key

1. [Sign up](https://ssl.scandit.com/dashboard/sign-up?p=test) or [Sign in](https://ssl.scandit.com/dashboard/sign-in) to your Scandit account
2. Create a project
3. Create a license key

If you have a paid subscription, please reach out to [support@scandit.com](mailto:support%40scandit.com) if you need a new license key.

### Additional Information

- When using the Scandit Data Capture SDK you will want to set the camera as the frame source for various capture modes. The camera permissions are handled by the browser, can only be granted if a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure%5FContexts) is used and have to be accepted by the
  user explicitly when needed.

#### Progressive Web App (PWA)

You can easily configure the scanner to work offline[making the web app progressive (Progressive Web App)](https://web.dev/progressive-web-apps/). There are some settings to consider though. If you use [workbox](https://developer.chrome.com/docs/workbox/) , or you’re using a tool that use workbox under the hood like [Vite PWA](https://github.com/vite-pwa/docs) , you must consider to set these options:

```js
{
globPatterns: ["**/*.{css,html,ico,png,svg,woff2}", "**/*.{wasm,js,data}"], // Be sure to add also .wasm
maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // Increase size cache up to 6mb
ignoreURLParametersMatching: [/^v/], // Ignore ?v=x.x.x query string param when using importScripts
}
```

With these settings in place and the service worker correctly configured, you will be able to have a full offline scanning experience.

Note: on iOS there’s a persisting [issue while accessing the video stream inside a progressive web app](https://bugs.webkit.org/show%5Fbug.cgi?id=252465)
