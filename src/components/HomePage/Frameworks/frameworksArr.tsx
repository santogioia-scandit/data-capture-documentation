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
  Titanium,
  Xamarin,
} from "../../IconComponents";
import style from "./Frameworks.module.css";

export const frameworksArr = [
  {
    name: "iso",
    icon: <Ios iconClass={style.iconStyle} />,
  },
  {
    name: "android",
    icon: <Android iconClass={style.iconStyle} />,
  },
  {
    name: "javascript",
    icon: <Javascript iconClass={style.iconStyle} />,
  },
  {
    name: "react",
    icon: <ReactIcon iconClass={style.iconStyle} />,
  },
  {
    name: "cordova",
    icon: <Cordova iconClass={style.iconStyle} />,
  },
  {
    name: "xamarin",
    icon: <Xamarin iconClass={style.iconStyle} />,
  },
  {
    name: "flutter",
    icon: <Flutter iconClass={style.iconStyle} />,
  },
  {
    name: "net",
    icon: <Net iconClass={style.iconStyle} />,
  },
  {
    name: "capacitor",
    icon: <Capacitor iconClass={style.iconStyle} />,
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
