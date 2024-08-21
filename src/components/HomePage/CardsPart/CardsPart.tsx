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
  const barcodeScanning = createBarcodeScanningArr(selectedFramework.framework, allCards);
  const idScanning = createIdScanningArr(selectedFramework.framework);  

  return (
    <div className={style.cardsPartWrapper}>
      <div className={style.cardsGroupWrapper}>
        <CardsGroup
          title={`Barcode Scanning for ${FrameworksName[selectedFramework.framework]}`}
          content={barcodeScanning}
          mainColor="var(--barcode-scanning-color)"
          cardColor="var(--barcode-scanning-gradient)"
          linkStarted="/barcode-scanning"
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
          title="ID Scanning"
          content={idScanning}
          mainColor="var(--IDScanningColor)"
          cardColor="var(--id-scanning-gradient)"
          linkStarted="/id-scanning"
        ></CardsGroup>
      </div>
    </div>
  );
}
