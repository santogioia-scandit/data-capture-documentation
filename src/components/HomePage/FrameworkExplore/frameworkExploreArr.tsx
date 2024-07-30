import {
  AntDesign,
  Javascript,
  Net,
  ScanditAndroid,
  ScanditCapacitor,
  ScanditCordova,
  ScanditFlutter,
  ScanditISO,
  ScanditReact,
  Titanium,
  Xamarin,
} from "../../IconComponents";
import style from "./FrameworkExploreCard.module.css";

export const frameworkExploreArr = [
  {
    icon: <ScanditISO iconClass={style.frameworkExploreIcon} />,
    title: "iOS ",
  },
  {
    icon: <ScanditAndroid iconClass={style.frameworkExploreIcon} />,
    title: "Android",
  },
  {
    icon: <Javascript iconClass={style.frameworkExploreIcon} />,
    title: "JS",
  },
  {
    icon: <ScanditReact iconClass={style.frameworkExploreIcon} />,
    title: "React Native",
  },
  {
    icon: <ScanditCordova iconClass={style.frameworkExploreIcon} />,
    title: "Cordova",
  },
  {
    icon: <Xamarin iconClass={style.frameworkExploreIcon} />,
    title: "Xamarin",
  },
  {
    icon: <ScanditFlutter iconClass={style.frameworkExploreIcon} />,
    title: "Flutter",
  },
  {
    icon: <Net iconClass={style.frameworkExploreIcon} />,
    title: ".NET",
  },
  {
    icon: <ScanditCapacitor iconClass={style.frameworkExploreIcon} />,
    title: "Capacitor",
  },

  {
    icon: <Titanium iconClass={style.frameworkExploreIcon} />,
    title: "Titanium",
  },
  {
    icon: <AntDesign iconClass={style.frameworkExploreIcon} />,
    title: "Linux",
  },
];
