---
framework: express
tags: [express]
keywords:
  - express
---

# iOS: Why does Scandit Express need "Allow Full Access" permissions?

During the setup of Scandit Express on iOS, the app will ask for "Allow Full Access" permissions from the user. If "Allow Full Access" is not enabled, the keyboard won't allow users to scan barcodes.

This is a mandatory requirement because the software keyboard Scandit Express installs needs to communicate with the app responsible for scanning. (Software keyboards do not have access to the camera). Scandit Express does not capture any keystroke data or transfer any of the typed data (or any other keyboard data) over the internet.

We do record the scanned barcodes as part of our scanner analytics offering for customers. This can be disabled if requested for productive accounts.

For more information, please refer to the following Techcrunch article for a good summary on how Keyboard Permissions in iOS work: Techcrunch.com: Everything You Need To Know About iOS 8 Keyboard Permissions (Oct 4, 2014).