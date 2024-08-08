import { Bolt, IDValidate, IdCapture } from "../../IconComponents";
import { frameworkCards } from "./frameworkCardsArr";
import { IDScanning } from "../../constants/scanningEnums";
import { FrameworkCard } from "../../constants/types";

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

  function getFrameworkPath(frameworkData: FrameworkCard): string {
    return frameworkData?.link ? frameworkData.link : framework;
  }

  return [
    {
      groupName: "Low-level APIs",
      cards: [
        {
          name: IDScanning.IdCapture,
          text: "Scan and Extract ID Data",
          icon: <IdCapture />,
          isActive: frameworkData.IDScanning.includes(IDScanning.IdCapture),
          link: `/sdks/${getFrameworkPath(frameworkData)}/id-capture/intro`,
        },
        {
          name: IDScanning.IdValidate,
          text: "Verify ID Validity",
          icon: <IDValidate />,
          isActive: frameworkData.IDScanning.includes(IDScanning.IdValidate),
          link: `/sdks/${getFrameworkPath(frameworkData)}/id-validate/intro`,
        },
      ],
    },
    {
      groupName: "Pre-built workflows",
      cards: [
        {
          name: IDScanning.IdBolt,
          text: "Add ID Scanning to Any Site",
          icon: <Bolt />,
          isActive: frameworkData.IDScanning.includes(IDScanning.IdBolt),
          link: `/hosted/id-bolt/overview`,
        },
      ],
    },
  ];
}
