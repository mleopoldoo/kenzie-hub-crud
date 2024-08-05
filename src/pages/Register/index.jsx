import { RegisterForm } from "../../components/forms/RegisterForm";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const Register = () => {
  return (
    <>
      <header className={style.container__header}>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <Link className="btn__small return" to="/">
          Voltar
        </Link>
      </header>
      <main>
        <RegisterForm />
      </main>
    </>
  );
};
