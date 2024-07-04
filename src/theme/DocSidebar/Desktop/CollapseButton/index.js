import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
import LeftDoubleArrow from "@site/src/components/IconComponents/LeftDoubleArrow";

export default function CollapseButton({ onClick }) {
  return (
    <button
      type="button"
      title={translate({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
      })}
      className={clsx(
        "button button--secondary button--outline",
        styles.collapseSidebarButton
      )}
      onClick={onClick}
    >
      <div className={styles.arrow__styleBefore}></div>
      <LeftDoubleArrow className="sidebarButtonIcon" />
      <div className={styles.arrow__styleAfter}></div>
    </button>
  );
}
