import { useEffect, useState } from "react";
import { Moon, Sun } from "../IconComponents";
import style from "./ThemeBtn.module.css";
import localStorageUtil from "../utils/localStorageUtil";

export default function ThemeBtn() {
  const htmlElement = document.documentElement;  
  const [theme, setTheme] = useState("light");  

  useEffect(() => {
    if (typeof document !== "undefined") {
      const storedTheme = htmlElement.getAttribute("data-theme") || localStorageUtil.getItem("theme") || "light";
      setTheme(storedTheme);
      htmlElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  function changeTheme() {
    if (typeof document !== "undefined") {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      setTheme(newTheme);
      localStorageUtil.setItem("theme", newTheme);
      htmlElement.setAttribute("data-theme", newTheme);
    }
  }

  return (
    <button className={style.themeBtn} onClick={changeTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
