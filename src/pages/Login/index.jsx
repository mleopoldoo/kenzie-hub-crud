import { LoginForm } from "../../components";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";

export const Login = ({ setUser }) => {
  return (
    <>
      <header>
        <img className={style.logo} src={Logo} alt="Logo Kenzie Hub" />
      </header>
      <main>
        <LoginForm setUser={setUser} />
      </main>
    </>
  );
};
