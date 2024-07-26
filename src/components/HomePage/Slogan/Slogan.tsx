import style from "./Slogan.module.css";

export default function Slogan() {
  return (
    <div className={style.sloganWrapper}>
      <h2 className={style.title}>Scandit Developer Documentation</h2>
      <p className={style.subTitle}>
        Something catchy here about the benefits of the data capture SDK
      </p>
      <p className={style.subTitle}>Just a couple of lines.</p>
      <p className={style.subTitle}>But really compelling.</p>
    </div>
  );
}
