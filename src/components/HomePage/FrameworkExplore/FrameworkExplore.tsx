import { FrameworksName } from "../../constants/frameworksName";
import { frameworkCards } from "../data/frameworkCardsArr";
import style from "./FrameworkExplore.module.css";
import FrameworkExploreCard from "./FrameworkExploreCard";

export default function FrameworkExplore() {
  return (
    <div className={style.frameworkExplore}>
      <h2 className={style.frameworkExploreTitle}>Explore by framework</h2>
      <p className={style.frameworkExploreText}>
        The Scandit Smart Data Capture SDK is a powerful software development
        kit designed to enable mobile devices to capture{" "}
      </p>
      <ul className={style.frameworkExploreList}>
        {frameworkCards.map((item, index) => (
          <FrameworkExploreCard icon={item.icon} key={index}>
            {FrameworksName[item.framework as keyof typeof FrameworksName]}
          </FrameworkExploreCard>
        ))}
      </ul>
    </div>
  );
}
