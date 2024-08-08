import { useEffect, useRef, useState } from "react";
import style from "./FrameworksMobile.module.css";
import { frameworkCards } from "../data/frameworkCardsArr";
import { FrameworksName } from "../../constants/frameworksName";
import { Framework } from "@site/src/pages";
import localStorageUtil from "../../utils/localStorageUtil";

interface FrameworksMobileProps {
  setSelectedFramework: (framework: Framework) => void;
  selectedFramework: Framework;
}

export default function FrameworksMobile({
  setSelectedFramework,
  selectedFramework,
}: FrameworksMobileProps) {
  const [openSelector, setOpenSelector] = useState(false);
  const menuRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSelector(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function selectFramework(e: React.ChangeEvent<HTMLInputElement>, framework) {
    const formData = new FormData(e.target.form);
    const frameworkValue = formData.get("framework");
    setSelectedFramework({
      frameworkParent: framework.framework,
      framework: frameworkValue.toString(),
    });
  }

  function clickedFramework(e, framework) {
    localStorageUtil.setItem("selectedFramework", {
      frameworkParent: framework.framework,
      framework: e.target.value,
    });
  }

  return (
    <div className={style.frameworksMobile}>
      <div
        className={style.field}
        onClick={() => setOpenSelector(!openSelector)}
      >
        {FrameworksName[
          selectedFramework.framework as keyof typeof FrameworksName
        ] || "Select framework"}
      </div>
      {openSelector && (
        <form className={style.optionsMain} ref={menuRef}>
          {frameworkCards.map((item) => (
            <div
              key={item.framework}
              onClick={(e) => clickedFramework(e, item)}
            >
              <input
                className={style.input}
                value={item.framework}
                type="radio"
                name="framework"
                id={item.framework}
                onChange={(e) => selectFramework(e, item)}
                checked={
                  item.framework === selectedFramework.frameworkParent ||
                  item.framework === selectedFramework.framework
                }
              />
              <label
                htmlFor={item.framework}
                className={`${style.iconWrapper} ${
                  item.framework === selectedFramework.framework
                    ? style.checkedFramework
                    : ""
                }`}
              >
                <span className={style.optionsIcon}>{item.icon}</span>
                <span>
                  {
                    FrameworksName[
                      item.framework as keyof typeof FrameworksName
                    ]
                  }
                </span>
              </label>
              {item.additional && (
                <ul>
                  {item.additional.map((additionalItem) => (
                    <li
                      key={additionalItem.framework}
                      className={style.additionalFrameworks}
                    >
                      <input
                        className={style.input}
                        value={additionalItem.framework}
                        type="radio"
                        name="framework"
                        id={additionalItem.framework}
                        onChange={(e) => selectFramework(e, additionalItem)}
                        checked={
                          additionalItem.framework ===
                          selectedFramework.framework
                        }
                      />
                      <label
                        htmlFor={additionalItem.framework}
                        className={`${style.iconWrapper} ${
                          additionalItem.framework ===
                          selectedFramework.framework
                            ? style.checkedFramework
                            : ""
                        }`}
                      >
                        <span className={style.optionsIcon}>
                          {additionalItem.icon}
                        </span>
                        <span className={style.titleLabelHover}>
                          {
                            FrameworksName[
                              additionalItem.framework as keyof typeof FrameworksName
                            ]
                          }
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </form>
      )}
    </div>
  );
}
