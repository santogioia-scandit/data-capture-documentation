import Link from "@docusaurus/Link";
import style from "./DataCapture.module.css";
import Arrow from "../../IconComponents/Arrow";

export default function DataCapture() {
  return (
    <div className={style.dataCapture}>
      <h2 className={style.dataCaptureTitle}>Data Capture Basics</h2>
      <p className={style.dataCaptureText}>
        The Scandit Smart Data Capture SDK is a powerful software development
        kit designed to enable mobile devices to capture and process a wide
        range of barcodes and other types of data.{" "}
      </p>
      <ul className={style.dataCaptureList}>
        <li>
          <Link className={style.dataCaptureLink}>
            Core concepts <Arrow />
          </Link>
        </li>
        <li>
          <Link className={style.dataCaptureLink}>
            System requirements Core concepts <Arrow />
          </Link>
        </li>
        <li>
          <Link className={style.dataCaptureLink}>
            Features by Framework Core concepts <Arrow />
          </Link>
        </li>
        <li>
          <Link className={style.dataCaptureLink}>
            Barcode symbologies Core concepts <Arrow />
          </Link>
        </li>
        <li>
          <Link className={style.dataCaptureLink}>
            Supported documents Core concepts <Arrow />
          </Link>
        </li>
      </ul>
    </div>
  );
}
