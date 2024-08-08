import { ReactElement } from "react";
import style from "./FrameworkExploreCard.module.css";
import Link from "@docusaurus/Link";

interface FrameworkExploreCardProps {
  icon: ReactElement;
  children: string;
  framework: string
}

export default function FrameworkExploreCard({
  icon,
  children,
  framework,
}: FrameworkExploreCardProps) {
  return (
    <li>
      <Link to={`/sdks/${framework}/add-sdk`} className={style.frameworkExploreCard}>
        <div className={style.iconWrapper}>{icon}</div>
        <p className={style.frameworkExploreCardText}>{children}</p>
      </Link>
    </li>
  );
}
