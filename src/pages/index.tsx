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
import FrameworksMobile from "../components/HomePage/Frameworks/FrameworksMobile";

export interface Framework {
  frameworkParent: string;
  framework: string;
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const framework = localStorageUtil.getItem("selectedFramework");
  const [selectedFramework, setSelectedFramework] = useState<Framework>({
    frameworkParent: framework?.frameworkParent || "iso",
    framework: framework?.framework || "iso",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.homeWrapper}>
      <Header></Header>
      <div className={style.body}>
        <Slogan></Slogan>

        {isMobile ? (
          <FrameworksMobile
            setSelectedFramework={setSelectedFramework}
            selectedFramework={selectedFramework}
          ></FrameworksMobile>
        ) : (
          <Frameworks
            setSelectedFramework={setSelectedFramework}
            selectedFramework={selectedFramework}
          ></Frameworks>
        )}
        <CardsPart
          selectedFramework={selectedFramework.frameworkParent}
        ></CardsPart>
        <DataCapture></DataCapture>
        <FrameworkExplore></FrameworkExplore>
      </div>
      <Footer></Footer>
    </div>
  );
}
