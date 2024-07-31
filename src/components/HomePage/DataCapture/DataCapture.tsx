import style from "./DataCapture.module.css";
import DataCaptureCard from "../DataCaptureCard/DataCaptureCard";
import { dataCaptureArr } from "./dataCaptureArr";

export default function DataCapture() {
  return (
    <div className={style.dataCapture}>
      <h2 className={style.dataCaptureTitle}>Data Capture Basics</h2>
      <p className={style.dataCaptureText}>
        The Scandit Smart Data Capture SDK is a powerful software development
        kit designed to enable mobile devices to capture and process a wide
        range of barcodes and other types of data.
      </p>
      <ul className={style.dataCaptureList}>
        {dataCaptureArr.map((item, index) => (
          <li key={index}>
            <DataCaptureCard link={item.link}>{item.title}</DataCaptureCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
