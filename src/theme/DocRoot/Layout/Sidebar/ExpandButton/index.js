import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
import RightDoubleArrow from "@site/src/components/IconComponents/RightDoubleArrow";

export default function DocRootLayoutSidebarExpandButton({ toggleSidebar }) {
  return (
    <div
      className={styles.expandButton}
      title={translate({
        id: "theme.docs.sidebar.expandButtonTitle",
        message: "Expand sidebar",
        description:
          "The ARIA label and title attribute for expand button of doc sidebar",
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description:
          "The ARIA label and title attribute for expand button of doc sidebar",
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onClick={toggleSidebar}
    >
      <div className={styles.rightArrow__styleBefore}></div>
      <RightDoubleArrow className="sidebarButtonIcon" />
      <div className={styles.rightArrow__styleAfter}></div>
    </div>
  );
}
