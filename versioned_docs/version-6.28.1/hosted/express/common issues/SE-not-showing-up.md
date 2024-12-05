---
framework: express
tags: [express]
keywords:
  - express
---

# iOS: Why doesn’t Scandit Express show up in some applications?

Some custom applications/input fields can have explicit restrictions on custom keyboards. This is typically for security purposes. Unfortunately, Scandit Express has no control over such cases.

 

A special case of these are numeric fields on websites. These are occasionally flagged as “telephone” fields – where iOS does not allow custom keyboards. In this case, please contact the website operator to fix this incorrectly flagged field.

 

However, when using an EMM/MDM solution with iOS 14.x Scandit Express may also become unavailable for System/Managed apps such as Safari.


To fix this issue the security deployment setting: 'Allow Open from Unmanaged to Managed' has to be set to TRUE (enabled). This  allows the Scandit Express keyboard to be available for system apps.