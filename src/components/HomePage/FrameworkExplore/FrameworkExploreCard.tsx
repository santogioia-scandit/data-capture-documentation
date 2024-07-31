import { ReactElement } from "react";
import style from "./FrameworkExploreCard.module.css";

interface FrameworkExploreCardProps {
  icon: ReactElement;
  children: string;
}

export default function FrameworkExploreCard({
  icon,
  children,
}: FrameworkExploreCardProps) {
  return (
    <li className={style.frameworkExploreCard}>
      <div className={style.iconWrapper}>{icon}</div>
      <p className={style.frameworkExploreCardText}>{children}</p>
    </li>
  );
}
