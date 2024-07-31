import { ReactElement } from "react";

export interface CardType {
  isActive: boolean;
  link: string;
  name: string;
  text: string;
  icon: ReactElement;
}

export interface CardGroupType {
  cards: CardType[];
  groupName: string;
}
