import Arrow from "../../IconComponents/Arrow";
import Card from "./Card/Card";
import style from "./CardsGroup.module.css";

export default function CardsGroup({ title, mainColor, content, cardColor }) {
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
        {content.map((cardsGroup, index) => {
          return (
            <li className={style.cardsGroup} key={index}>
              <h4 className={style.cardsGroupSubTitle}>{cardsGroup.groupName}</h4>
              <ul className={style.cardsList}>
                {cardsGroup.cards.map((card, index) => {
                  return <Card card={card} mainColor={mainColor} cardColor={cardColor} key={index}></Card>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
