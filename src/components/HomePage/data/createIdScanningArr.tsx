import { Bolt, IDValidate, IdCapture } from "../../IconComponents";
import { frameworkCards } from "./frameworkCardsArr";
import { IDScanning } from "../../constants/scanningEnums";

export function createIdScanningArr(framework: string) {
  function findFrameworkData() {
    const frameworkData = frameworkCards.find(
      (item) => item.framework === framework
    );
    if (frameworkData) {
      return frameworkData;
    }

    const additionalFrameworkData = frameworkCards
      .filter((item) => item.additional && Array.isArray(item.additional))
      .flatMap((item) => item.additional)
      .find((additionalItem) => additionalItem.framework === framework);

    return additionalFrameworkData || null;
  }
  const frameworkData = findFrameworkData();
  return [
    {
      groupName: "Low-level APIs",
      cards: [
        {
          name: IDScanning.IdCapture,
          text: "IDCapture API",
          icon: <IdCapture />,
          isActive: frameworkData.IDScanning.includes(IDScanning.IdCapture),
          link: `/`,
        },
        {
          name: IDScanning.IdValidate,
          text: "IDCapture API",
          icon: <IDValidate />,
          isActive: frameworkData.IDScanning.includes(IDScanning.IdValidate),
          link: `/`,
        },
      ],
    },
    {
      groupName: "Pre-built workflows",
      cards: [
        {
          name: IDScanning.IdBolt,
          text: "IDCapture API",
          icon: <Bolt />,
          isActive: frameworkData.IDScanning.includes(IDScanning.IdBolt),
          link: `/hosted/id-bolt/overview`,
        },
      ],
    },
  ];
}
