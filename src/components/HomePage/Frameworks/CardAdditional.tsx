import { FrameworksName } from "../../constants/frameworksName";
import style from "./CardAdditional.module.css";

export default function CardAdditional({
  framework,
  selectedFramework,
  setSelectedFramework,
}) {
  function selectFramework(e: React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData(e.target.form);
    const frameworkValue = formData.get("framework");
    setSelectedFramework((prevState) => ({
      ...prevState,
      framework: frameworkValue.toString(),
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
      />
      <label
        htmlFor={framework.framework}
        className={`${style.iconWrapper} ${
          framework.framework === selectedFramework.framework
            ? style.checkedFramework
            : ""
        }`}
      >
        {framework.icon}
        <span className={style.titleLabelHover}>
          {FrameworksName[framework.framework as keyof typeof FrameworksName]}
        </span>
      </label>
    </>
  );
}
