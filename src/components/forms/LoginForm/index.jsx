import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormsSchema } from "./loginForm.schema";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./style.module.scss";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormsSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (payload) => {
    userLogin(payload);
  };

  const userLogin = async (payload) => {
    try {
      const { data } = await api.post("/sessions", payload);
      navigate("/dashboard");
      setUser(data.user);
    } catch (error) {
      console.log(error);
      if (
        error.response.data.message === "Incorrect email / password combination"
      ) {
        toast.error("Credenciais inválidas");
      }
    }
  };

  return (
    <form className={style.container__form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title1">Login</h1>

      <Input
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu email"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />

      <button className="btn" type="submit">
        Entrar
      </button>
      <p className="headline headlineBold">Ainda não possui uma conta?</p>
      <Link to="/register" className="btn disable">
        Cadastre-se
      </Link>
    </form>
  );
};
