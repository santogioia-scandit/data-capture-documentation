import { useState } from "react";
import { Moon, Sun } from "../IconComponents";
import style from "./ThemeBtn.module.css";

export default function ThemeBtn() {
  const htmlElement = document.documentElement;
  const [theme, setTheme] = useState(
    htmlElement.getAttribute("data-theme") || "light"
  );

  function changeTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    setTheme(newTheme);
    htmlElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button className={style.themeBtn} onClick={changeTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
