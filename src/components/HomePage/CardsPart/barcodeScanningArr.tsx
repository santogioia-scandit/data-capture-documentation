import { BarcodeCapture, Sparkscan } from "../../IconComponents";
import Ms from "../../IconComponents/Ms";
import MsPick from "../../IconComponents/MsPick";

export const barcodeScanning = [
  {
    groupName: "Low-level APIs",
    cards: [
      {
        name: "Single Scanning",
        api: "BarcodeCapture API",
        icon: <BarcodeCapture />,
        isActive: true,
        link: '/sdks/android/sparkscan/intro',
      },
      {
        name: "MatrixScan + AR",
        api: "BarcodeTracking API",
        icon: <Ms />,
        isActive: true,
        link: '/sdks/android/matrixscan-count/intro',
      }
    ],
  },
  {
    groupName: "Pre-built UI components",
    cards: [
      {
        name: "Single Scanning",
        api: "SparkScan API",
        icon: <Sparkscan />,
        isActive: true,
        link: '/sdks/android/sparkscan/intro',
      },
      {
        name: "Picking",
        api: "BarcodePick API",
        icon: <MsPick />,
        isActive: false,
        link: '/',
      },
      {
        name: "Search & Find",
        api: "BarcodeFind API",
        icon: <MsPick />,
        isActive: false,
        link: '/sdks/android/matrixscan-find/intro',
      },
      {
        name: "Counting & Receiving",
        api: "BarcodeCount API",
        icon: <MsPick />,
        isActive: false,
        link: '/',
      },
    ],
  },
];
