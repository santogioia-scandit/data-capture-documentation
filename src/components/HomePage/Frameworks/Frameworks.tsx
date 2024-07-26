import style from "./Frameworks.module.css";
import { frameworksArr } from "./frameworksArr";

export default function Frameworks() {
  return (
    <div>
      <h4 className={style.text}>
        Select your framework to view supported products and features
      </h4>
      <ul className={style.iconList}>
        {frameworksArr.map((item) => (
          <li className={style.iconWrapper} key={item.name}>
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
