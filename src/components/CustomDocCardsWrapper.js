import React from "react";

export default function CustomDocCardsWrapper({ children, className = "" }) {
  return <div className={`custom-cards-wrapper ${className}`}>{children}</div>;
}
