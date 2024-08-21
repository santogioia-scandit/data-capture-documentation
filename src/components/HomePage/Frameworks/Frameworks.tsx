import BrowserOnly from "@docusaurus/BrowserOnly";
import style from "./Frameworks.module.css";
import { frameworkCards } from "../data/frameworkCardsArr";
import { FrameworkCard } from "./FrameworkCard";
import CardAdditional from "./CardAdditional";
import localStorageUtil from "../../utils/localStorageUtil";
import { Framework } from "@site/src/pages";
import { FrameworkCardType } from "../../constants/types";

interface FrameworksProps {
  setSelectedFramework: (framework: Framework) => void;
  selectedFramework: Framework;
  handleFrameworkClick: () => void;
}

export default function Frameworks({
  setSelectedFramework,
  selectedFramework,
  handleFrameworkClick,
}: FrameworksProps) {
  function clickedFramework(
    e: React.MouseEvent<HTMLDivElement>,
    framework: FrameworkCardType
  ) {
    if (typeof window !== "undefined") {
      localStorageUtil.setItem("selectedFramework", {
        frameworkParent: framework.framework,
        framework: e.currentTarget.dataset.value,
      });
    }
  }

  return (
    <div>
      <h4 className={style.text}>
        Select Your Framework to View Supported Products and Features
      </h4>
      <form className={style.iconList}>
        {frameworkCards.map((item) => (
          <div
            onClick={(e) => clickedFramework(e, item)}
            key={item.framework}
            className={style.frameworkCardWrapper}
            data-value={item.framework}
          >
            <FrameworkCard
              handleFrameworkClick={handleFrameworkClick}
              framework={item}
              selectedFramework={selectedFramework}
              setSelectedFramework={setSelectedFramework}
              hasAdditional={item.additional ? true : false}
            />
            {item.additional &&
              selectedFramework.frameworkParent === item.framework && (
                <div className={style.additionalFrameworks}>
                  {item.additional.map((unit) => {
                    return (
                      <CardAdditional
                        handleFrameworkClick={handleFrameworkClick}
                        key={unit.framework}
                        framework={unit}
                        selectedFramework={selectedFramework}
                        setSelectedFramework={setSelectedFramework}
                      />
                    );
                  })}
                </div>
              )}
          </div>
        ))}
      </form>
    </div>
  );
}
