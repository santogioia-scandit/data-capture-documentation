import style from "./Frameworks.module.css";
import { frameworkCards } from "../data/frameworkCardsArr";
import { FrameworkCard } from "./FrameworkCard";
import CardAdditional from "./CardAdditional";
import localStorageUtil from "../../utils/localStorageUtil";
import { Framework } from "@site/src/pages";

interface FrameworksProps {
  setSelectedFramework: (framework: Framework) => void;
  selectedFramework: Framework;
}

export default function Frameworks({
  setSelectedFramework,
  selectedFramework,
}: FrameworksProps) {
  function clickedFramework(e, framework) {
    localStorageUtil.setItem("selectedFramework", {
      frameworkParent: framework.framework,
      framework: e.target.value,
    });
  }

  return (
    <div>
      <h4 className={style.text}>
        Select your framework to view supported products and features
      </h4>
      <form className={style.iconList}>
        {frameworkCards.map((item) => (
          <div
            onClick={(e) => clickedFramework(e, item)}
            key={item.framework}
            className={style.frameworkCardWrapper}
          >
            <FrameworkCard
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
