import { BarcodeCapture } from "../../IconComponents";
import IdCapture from "../../IconComponents/IdCapture";
import Ms from "../../IconComponents/Ms";

export const idScanning = [
  {
    groupName: "Low-level APIs",
    cards: [
      {
        name: "ID Scan",
        api: "IDCapture API",
        icon: <IdCapture />,
        isActive: true,
      },
      {
        name: "ID Validate",
        api: "Coming soon",
        icon: <Ms />,
        isActive: false,
      },
    ],
  },
  {
    groupName: "Pre-built workflow",
    cards: [
      {
        name: "ID Bolt",
        api: "Hosted solution",
        icon: <BarcodeCapture />,
        isActive: true,
      }
    ],
  },
];
