import style from "./Frameworks.module.css";
import { frameworkCards } from "../data/frameworkCardsArr";
import { FrameworksName } from "../../constants/frameworksName";

interface FrameworksProps {
  setSelectedFramework: (framework: string) => void;
  selectedFramework: string;
}

export default function Frameworks({
  setSelectedFramework,
  selectedFramework,
}: FrameworksProps) {
  function selectFramework(e: React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData(e.target.form);
    const frameworkValue = formData.get("framework");
    setSelectedFramework(frameworkValue.toString());
  }

  return (
    <div>
      <h4 className={style.text}>
        Select your framework to view supported products and features
      </h4>
      <form className={style.iconList}>
        {frameworkCards.map((item) => (
          <div key={item.framework}>
            <input
              className={style.input}
              value={item.framework}
              type="radio"
              name="framework"
              id={item.framework}
              onChange={selectFramework}
              checked={item.framework === selectedFramework}
            />
            <label htmlFor={item.framework} className={style.iconWrapper}>
              {item.icon}
              <span className={style.titleLabelHover}>
                {FrameworksName[item.framework as keyof typeof FrameworksName]}
              </span>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
