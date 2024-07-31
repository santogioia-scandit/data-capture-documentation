import { useEffect, useState } from "react";
import CardsPart from "../components/HomePage/CardsPart/CardsPart";
import DataCapture from "../components/HomePage/DataCapture/DataCapture";
import Footer from "../components/HomePage/Footer/Footer";
import FrameworkExplore from "../components/HomePage/FrameworkExplore/FrameworkExplore";
import Frameworks from "../components/HomePage/Frameworks/Frameworks";
import Header from "../components/HomePage/Header/Header";
import Slogan from "../components/HomePage/Slogan/Slogan";
import style from "./index.module.css";
import localStorageUtil from "../components/utils/localStorageUtil";

export default function HomePage() {
  const framework = localStorageUtil.getItem("selectedFramework");
  const [selectedFramework, setSelectedFramework] = useState(
    framework || "iso"
  );

  useEffect(() => {
    localStorageUtil.setItem("selectedFramework", selectedFramework);
  }, [selectedFramework]);

  return (
    <div className={style.homeWrapper}>
      <Header></Header>
      <div className={style.body}>
        <Slogan></Slogan>
        <Frameworks
          setSelectedFramework={setSelectedFramework}
          selectedFramework={selectedFramework}
        ></Frameworks>
        <CardsPart selectedFramework={selectedFramework}></CardsPart>
        <DataCapture></DataCapture>
        <FrameworkExplore></FrameworkExplore>
      </div>
      <Footer></Footer>
    </div>
  );
}
