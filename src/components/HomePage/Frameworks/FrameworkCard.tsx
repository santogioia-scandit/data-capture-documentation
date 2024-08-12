import { ArrowDropDown } from "../../IconComponents";
import { FrameworksName } from "../../constants/frameworksName";
import style from "./FrameworkCard.module.css";

export function FrameworkCard({
  framework,
  selectedFramework,
  setSelectedFramework,
  hasAdditional = false,
}) {
  function selectFramework(e: React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData(e.target.form);
    const frameworkValue = formData.get("framework");
    setSelectedFramework((prevState) => ({
      ...prevState,
      framework: hasAdditional ? prevState.framework : frameworkValue,
      frameworkParent: frameworkValue,
    }));
  }

  return (
    <>
      <input
        className={style.input}
        value={framework.framework}
        type="radio"
        name="framework"
        id={framework.framework}
        onChange={selectFramework}
        checked={framework.framework === selectedFramework.frameworkParent}
      />
      <label
        htmlFor={framework.framework}
        className={`${style.iconWrapper} ${
          framework.framework === selectedFramework.frameworkParent
            ? style.checkedFramework
            : ""
        }`}
      >
        {framework.icon}
        {!hasAdditional ? (
          <span className={style.titleLabelHover}>
            {FrameworksName[framework.framework as keyof typeof FrameworksName]}
          </span>
        ) : (
          <span className={style.iconDropDown}>
            <ArrowDropDown iconClass={style.icon} />
          </span>
        )}
      </label>
    </>
  );
}
