import CardsGroup from "../CardsGroup/CardsGroup";
import style from "./CardsPart.module.css";
import { createBarcodeScanningArr } from "../data/createBarcodeScanningArr";
import { createIdScanningArr } from "../data/createIdScanningArr";
import { ArrowDropDown } from "../../IconComponents";
import { useState } from "react";
import { FrameworksName } from "../../constants/frameworksName";
import { Framework } from "@site/src/pages";

interface CardsPartProps {
  selectedFramework: Framework;
}

export default function CardsPart({ selectedFramework }: CardsPartProps) {
  const [allCards, setAllCards] = useState(false);
  const barcodeScanning = createBarcodeScanningArr(
    selectedFramework.framework,
    allCards
  );
  const idScanning = createIdScanningArr(selectedFramework.framework);

  const transformFrameworkName = (framework: string): string => {
    const frameworkUrls: { [key: string]: string } = {
      react: "sdks/react-native/add-sdk",
      linux: "https://docs.scandit.com/stable/c_api/index.html",
      netIos: "sdks/net/ios/add-sdk",
      netAndroid: "sdks/net/android/add-sdk",
      xamarinIos: "sdks/xamarin/ios/add-sdk",
      xamarinAndroid: "sdks/xamarin/android/add-sdk",
      xamarin: "sdks/xamarin/forms/add-sdk",
    };

    return frameworkUrls[framework] || `sdks/${framework}/add-sdk`;
  };

  return (
    <div className={style.cardsPartWrapper}>
      <div className={style.cardsGroupWrapper}>
        <CardsGroup
          title={`Barcode Scanning for ${
            FrameworksName[selectedFramework.framework]
          }`}
          content={barcodeScanning}
          mainColor="var(--barcode-scanning-color)"
          cardColor="var(--barcode-scanning-gradient)"
          linkStarted={`${transformFrameworkName(selectedFramework.framework)}`}
        ></CardsGroup>
        <button
          className={style.hiddenBtn}
          onClick={() => setAllCards(!allCards)}
        >
          {allCards ? "Show less" : "Show more functionality"}
          <ArrowDropDown iconClass={allCards ? style.reversIcon : style.icon} />
        </button>
      </div>
      <div className={style.cardsGroupWrapper}>
        <CardsGroup
          title={`ID scanning for ${
            FrameworksName[selectedFramework.framework]
          }`}
          content={idScanning}
          mainColor="var(--IDScanningColor)"
          cardColor="var(--id-scanning-gradient)"
          linkStarted={`${transformFrameworkName(selectedFramework.framework)}`}
        ></CardsGroup>
      </div>
    </div>
  );
}
