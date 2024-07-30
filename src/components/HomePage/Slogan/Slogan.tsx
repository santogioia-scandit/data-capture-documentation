import style from "./Slogan.module.css";

export default function Slogan() {
  return (
    <div className={style.sloganWrapper}>
      <h2 className={style.title}>Scandit Developer Documentation</h2>
      <p className={style.subTitle}>
        The Scandit Smart Data Capture Platform is a powerful XXX to capture and
        process a wide range of barcodes, IDs and other forms of data. With
        Scandit, you can build high-performance data capture applications that
        leverage the latest advancements in computer vision and machine
        learning.
      </p>
    </div>
  );
}
