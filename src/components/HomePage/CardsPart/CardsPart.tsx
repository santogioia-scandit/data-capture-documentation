import CardsGroup from "../CardsGroup/CardsGroup";
import style from "./CardsPart.module.css";
import { createBarcodeScanningArr } from "../data/createBarcodeScanningArr";
import { createIdScanningArr } from "../data/createIdScanningArr";

interface CardsPartProps {
  selectedFramework: string;
}

export default function CardsPart({ selectedFramework }: CardsPartProps) {    
  const barcodeScanning = createBarcodeScanningArr(selectedFramework);
  const idScanning = createIdScanningArr(selectedFramework)

  return (
    <div className={style.cardsPartWrapper}>
      <CardsGroup
        title="Barcode scanning"
        content={barcodeScanning}
        mainColor="#065DB8"
        cardColor="#C3E1FF"
      ></CardsGroup>
      <CardsGroup
        title="ID scanning"
        content={idScanning}
        mainColor="#2EC1CE"
        cardColor="#2EC1CE"
      ></CardsGroup>
    </div>
  );
}
