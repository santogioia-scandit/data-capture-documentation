import {
  Android,
  AntDesign,
  Capacitor,
  Cordova,
  Flutter,
  Ios,
  Javascript,
  Net,
  ReactIcon,
  ScanditAndroid,
  ScanditCapacitor,
  ScanditCordova,
  ScanditFlutter,
  ScanditISO,
  ScanditReact,
  Titanium,
  Xamarin,
} from "../../IconComponents";
import style from "./Frameworks.module.css";

export const frameworksArr = [
  {
    name: "iso",
    icon: <ScanditISO iconClass={style.iconStyle} />,
  },
  {
    name: "android",
    icon: <ScanditAndroid iconClass={style.iconStyle} />,
  },
  {
    name: "javascript",
    icon: <Javascript iconClass={style.iconStyle} />,
  },
  {
    name: "react",
    icon: <ScanditReact iconClass={style.iconStyle} />,
  },
  {
    name: "cordova",
    icon: <ScanditCordova iconClass={style.iconStyle} />,
  },
  {
    name: "xamarin",
    icon: <Xamarin iconClass={style.iconStyle} />,
  },
  {
    name: "flutter",
    icon: <ScanditFlutter iconClass={style.iconStyle} />,
  },
  {
    name: "net",
    icon: <Net iconClass={style.iconStyle} />,
  },
  {
    name: "capacitor",
    icon: <ScanditCapacitor iconClass={style.iconStyle} />,
  },
  {
    name: "titanium",
    icon: <Titanium iconClass={style.iconStyle} />,
  },
  {
    name: "antDesign",
    icon: <AntDesign iconClass={style.iconStyle} />,
  },
];
