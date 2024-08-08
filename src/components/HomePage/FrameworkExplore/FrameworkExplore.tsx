import { FrameworksName } from "../../constants/frameworksName";
import { frameworkCards } from "../data/frameworkCardsArr";
import style from "./FrameworkExplore.module.css";
import FrameworkExploreCard from "./FrameworkExploreCard";

export default function FrameworkExplore() {
  return (
    <div className={style.frameworkExplore}>
      <h2 className={style.frameworkExploreTitle}>Explore by Framework</h2>
      <p className={style.frameworkExploreText}>
        Get started with the Scandit Data Capture SDK using your preferred
        framework.{" "}
      </p>
      <ul className={style.frameworkExploreList}>
        {frameworkCards.map((item, index) => (
          <FrameworkExploreCard
            framework={item.framework}
            icon={item.icon}
            key={index}
          >
            {FrameworksName[item.framework as keyof typeof FrameworksName]}
          </FrameworkExploreCard>
        ))}
      </ul>
    </div>
  );
}
