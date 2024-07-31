import Link from "@docusaurus/Link";
import Arrow from "../../../IconComponents/Arrow";
import style from "./Card.module.css";
import { CardType } from "../../../constants/types";

interface CardProps {
  card: CardType;
  cardColor: string;
  mainColor: string;
}

export default function Card({ card, cardColor, mainColor }: CardProps) {
  return (
    <li
      className={`${style.card} ${!card.isActive ? style.cardNotActive : ""}`}
      style={{
        background: card.isActive
          ? `linear-gradient(90deg, #e0f6f8 0%, ${cardColor} 100%)`
          : "transparent",
      }}
    >
      <Link
        className={`${style.cardLink} ${
          !card.isActive ? style.cardNotActiveLink : ""
        }`}
        to={card.isActive ? card.link : ""}
      >
        <div style={{ color: card.isActive ? mainColor : "#000" }}>
          {card.icon}
        </div>
        <p className={style.cardTitle}>
          {card.name} <Arrow iconClass={style.cardsGroupIcon} />
        </p>
        <p className={style.cardApi}>{card.text}</p>
      </Link>
    </li>
  );
}
