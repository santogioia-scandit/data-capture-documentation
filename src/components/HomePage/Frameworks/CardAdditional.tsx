import { FrameworksName } from "../../constants/frameworksName";
import { FrameworkCardType } from "../../constants/types";
import localStorageUtil from "../../utils/localStorageUtil";
import style from "./CardAdditional.module.css";

export default function CardAdditional({
  framework,
  selectedFramework,
  setSelectedFramework,
  handleFrameworkClick,
}) {
  function selectFramework(e: React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData(e.target.form);
    const frameworkValue = formData.get("framework");
    setSelectedFramework((prevState) => ({
      ...prevState,
      framework: frameworkValue.toString(),
    }));
  }

  function clickedFramework(
    e: React.MouseEvent<HTMLDivElement>,
    framework: FrameworkCardType
  ) {
    if (typeof window !== "undefined") {
      e.stopPropagation();
      const existingData = localStorage.getItem("selectedFramework");
      let data = existingData ? JSON.parse(existingData) : {};
      data.framework = framework.framework;
      localStorageUtil.setItem("selectedFramework", data);
      handleFrameworkClick();
    }
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
        onClick={(e) => clickedFramework(e, framework)}
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
        <span>
          {FrameworksName[framework.framework as keyof typeof FrameworksName]}
        </span>
      </label>
    </>
  );
}
