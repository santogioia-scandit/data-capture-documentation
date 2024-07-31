import Link from "@docusaurus/Link";
import Arrow from "../../IconComponents/Arrow";
import style from "./DataCaptureCard.module.css";

interface DataCaptureCardProps {
  children: string;
  link: string;
}

export default function DataCaptureCard({
  children,
  link,
}: DataCaptureCardProps) {
  return (
    <Link to={link} className={style.dataCaptureCard}>
      <p className={style.text}>{children}</p>
      <Arrow iconClass={style.dataCaptureCardIcon} />
    </Link>
  );
}
