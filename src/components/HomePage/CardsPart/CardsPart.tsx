import CardsGroup from "../CardsGroup/CardsGroup";
import style from "./CardsPart.module.css";
import { createBarcodeScanningArr } from "../data/createBarcodeScanningArr";
import { createIdScanningArr } from "../data/createIdScanningArr";
import { ArrowDropDown } from "../../IconComponents";
import { useState } from "react";

interface CardsPartProps {
  selectedFramework: string;
}

export default function CardsPart({ selectedFramework }: CardsPartProps) {
  const [allCards, setAllCards] = useState(true);
  const barcodeScanning = createBarcodeScanningArr(selectedFramework, allCards);
  const idScanning = createIdScanningArr(selectedFramework);

  return (
    <div className={style.cardsPartWrapper}>
      <div className={style.cardsGroupWrapper}>
        <CardsGroup
          title="Barcode Scanning"
          content={barcodeScanning}
          mainColor="#065DB8"
          cardColor="#C3E1FF"
          linkStarted="/barcode-scanning"
        ></CardsGroup>
        <button
          className={style.hiddenBtn}
          onClick={() => setAllCards(!allCards)}
        >
          {allCards ? "Hide all functionality" : "See all functionality"}
          <ArrowDropDown iconClass={allCards ? style.reversIcon : style.icon} />
        </button>
      </div>
      <div className={style.cardsGroupWrapper}>
        <CardsGroup
          title="ID Scanning"
          content={idScanning}
          mainColor="var(--IDScanningColor)"
          cardColor="var(--IDScanningColor)"
          linkStarted="/id-scanning"
        ></CardsGroup>
      </div>
    </div>
  );
}
