---
sidebar_position: 3
---

# Advanced Configurations

MatrixScan Find is optimized by default for efficiency, accuracy, and a seamless user experience. However, there are multiple advanced settings available to further customize MatrixScan Find to best fit your needs.

## BarcodeFind Listener

You may want more fine-grained knowledge over the different events happening during the life of the `BarcodeFind` mode, such as when the search starts, pauses, and stops.

To do this, you can directly register a `SDCBarcodeFindListener` on the mode itself, keeping in mind that these listeners are called from a background thread.

```java
mode.addListener(self)

extension PlaygroundViewController: BarcodeFindListener {
    func barcodeFind(_ barcodeFind: BarcodeFind,
                     didPauseSearch foundItems: Set<BarcodeFindItem>) {
        // The mode was paused
    }

    func barcodeFindDidStartSearch(_ barcodeFind: BarcodeFind) {
        // The mode was started
    }

    func barcodeFind(_ barcodeFind: BarcodeFind,
                     didStopSearch foundItems: Set<BarcodeFindItem>) {
        // The mode was stopped
    }
}
```

## UI Customization

The `SDCBarcodeFindView` by default shows a set of UI elements, any of which can be optionally hidden:

- Play/Pause button
- Finish button
- Searched items carousel
- Guidance hints
- Progress bar (hidden by default)

Each of these elements can be shown or hidden as needed. For example:

```java
barcodeFindView.shouldShowCarousel = false
barcodeFindView.shouldShowProgressBar = true
```
