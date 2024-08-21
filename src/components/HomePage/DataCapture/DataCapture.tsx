import style from "./DataCapture.module.css";
import DataCaptureCard from "../DataCaptureCard/DataCaptureCard";
import { dataCaptureArr } from "./dataCaptureArr";

export default function DataCapture() {
  return (
    <div className={style.dataCapture}>
      <h2 className={style.dataCaptureTitle}>Data Capture Basics</h2>
      <p className={style.dataCaptureText}>
        Learn about the core concepts used throughout the Scandit Data Capture
        SDK and the full suite of available features and functionalities.
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
