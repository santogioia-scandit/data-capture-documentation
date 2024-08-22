import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Moon, Sun } from "../IconComponents";
import style from "./ThemeBtn.module.css";
import localStorageUtil from "../utils/localStorageUtil";

function ThemeBtnContent() {
  const [theme, setTheme] = useState("light");
  const htmlElement = document.documentElement;

  useEffect(() => {
    const storedTheme =
      htmlElement.getAttribute("data-theme") ||
      localStorageUtil.getItem("theme") ||
      "light";
    setTheme(storedTheme);
    htmlElement.setAttribute("data-theme", storedTheme);
  }, []);

  function changeTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme)
    htmlElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button className={style.themeBtn} onClick={changeTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}

export default function ThemeBtn() {
  return <BrowserOnly>{() => <ThemeBtnContent />}</BrowserOnly>;
}
