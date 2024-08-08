import { FrameworksName } from "../../constants/frameworksName";
import { frameworkCards } from "../data/frameworkCardsArr";
import style from "./FrameworkExplore.module.css";
import FrameworkExploreCard from "./FrameworkExploreCard";

export default function FrameworkExplore() {
  function processFrameworkCards(cards: any[]) {
    const result: any[] = [];

    cards.forEach((item) => {
      if (item.additional && Array.isArray(item.additional)) {
        result.push(
          ...item.additional.map((additionalItem) => ({
            ...additionalItem,
            additional: undefined,
          }))
        );
      }
      if (!item.additional) {
        result.push(item);
      }
    });

    return result;
  }

  const processedCards = processFrameworkCards(frameworkCards);

  return (
    <div className={style.frameworkExplore}>
      <h2 className={style.frameworkExploreTitle}>Explore by Framework</h2>
      <p className={style.frameworkExploreText}>
        Get started with the Scandit Data Capture SDK using your preferred
        framework.
      </p>
      <ul className={style.frameworkExploreList}>
        {processedCards.map((item, index) => (
          <FrameworkExploreCard
            framework={item.framework}
            icon={item.icon}
            key={index}
            link={item.link || null}
          >
            {FrameworksName[item.framework as keyof typeof FrameworksName]}
          </FrameworkExploreCard>
        ))}
      </ul>
    </div>
  );
}
