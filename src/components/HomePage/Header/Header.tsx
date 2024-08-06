import style from "./Header.module.css";
import logo from "../../../../static/img/logo-dark.svg";
import { Logo } from "../../IconComponents";
import Link from "@docusaurus/Link";
import ThemeBtn from "../../ThemeBtn/ThemeBtn";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.hiddenText}>Scandit</h1>
      <div className={style.logoWrapper}>
        <Logo iconClass={style.logo} />
        <p className={style.logoText}>Docs</p>
      </div>
      <div className={style.authBtns}>
        <Link
          className={style.btnLogin}
          to="https://ssl.scandit.com/dashboard/sign-in?p=test"
        >
          Log In
        </Link>
        <Link className={style.btnSignUp} to="https://www.scandit.com/trial/">
          Sign Up
        </Link>
        <ThemeBtn />
      </div>
    </header>
  );
}
