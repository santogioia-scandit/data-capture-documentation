import style from './FrameworkExploreCard.module.css';

export default function FrameworkExploreCard({ icon, children }) {
  return (
    <li className={style.frameworkExploreCard}>
      <div className={style.iconWrapper}>{icon}</div>
      <p className={style.frameworkExploreCardText}>{children}</p>
    </li>
  );
}
