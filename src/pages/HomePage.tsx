import CardsPart from "../components/HomePage/CardsPart/CardsPart";
import DataCapture from "../components/HomePage/DataCapture/DataCapture";
import Frameworks from "../components/HomePage/Frameworks/Frameworks";
import Header from "../components/HomePage/Header/Header";
import Slogan from "../components/HomePage/Slogan/Slogan";
import style from './index.module.css';

export default function HomePage() {
  return (
    <div className={style.homeWrapper}>
      <Header></Header>
      <Slogan></Slogan>
      <Frameworks></Frameworks>
      <CardsPart></CardsPart>
      <DataCapture></DataCapture>
    </div>
  );
}
