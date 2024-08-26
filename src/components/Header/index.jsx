import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export const Header = ({ userLogout }) => {
  return (
    <nav className={style.nav__header}>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <div className="btn__small return" onClick={userLogout}>
        <Link className="title2" to="/">
          Sair
        </Link>
      </div>
    </nav>
  );
};
