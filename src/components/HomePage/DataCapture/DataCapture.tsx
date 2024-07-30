import Link from "@docusaurus/Link";
import style from "./DataCapture.module.css";
import Arrow from "../../IconComponents/Arrow";
import DataCaptureCard from "../DataCaptureCard/DataCaptureCard";

export default function DataCapture() {
  const dataCaptureArr = [
    {
      title: "Core concepts",
      link: "/",
    },
    {
      title: "System requirements",
      link: "/",
    },
    {
      title: "Features by Framework",
      link: "/",
    },
    {
      title: "Barcode Symbologies",
      link: "/",
    },
    {
      title: "Supported documents",
      link: "/",
    },
  ];

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
