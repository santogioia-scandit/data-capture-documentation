import Arrow from "../../IconComponents/Arrow";
import { CardGroupType } from "../../constants/types";
import Card from "./Card/Card";
import style from "./CardsGroup.module.css";

interface CardsGroupProps {
  title: string;
  mainColor: string;
  content: CardGroupType[];
  cardColor: string;
}

export default function CardsGroup({
  title,
  mainColor,
  content,
  cardColor,
}: CardsGroupProps) {
  return (
    <div className={style.cardsGroupWrapper}>
      <div className={style.cardsGroupHeader}>
        <h2 className={style.cardsGroupTitle}>{title}</h2>
        <button
          className={style.cardsGroupBtn}
          style={{ color: mainColor }}
          type="button"
        >
          Get started
          <Arrow iconClass={style.cardsGroupIcon} />
        </button>
      </div>
      <ul>
        {content.map((cardsGroup, index: number) => {
          return (
            <li className={style.cardsGroup} key={index}>
              {cardsGroup.cards.length !== 0 && (
                <h4 className={style.cardsGroupSubTitle}>
                  {cardsGroup.groupName}
                </h4>
              )}

              <ul className={style.cardsList}>
                {cardsGroup.cards.map((card, index) => {
                  return (
                    <Card
                      card={card}
                      mainColor={mainColor}
                      cardColor={cardColor}
                      key={index}
                    ></Card>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
