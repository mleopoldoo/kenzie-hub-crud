import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormsSchema } from "./registerForm.schema";
import { InputPassword } from "../InputPassword";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormsSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (payload) => {
    userRegister(payload);
    console.log(payload);
  };

  const userRegister = async (payload) => {
    try {
      const { data } = await api.post("/users", payload);
      navigate("/");
      console.log(data);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.log(error);
      if (error) {
        toast.error("Ops! Algo deu errado.");
      }
    }
  };

  return (
    <form className={style.container__form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title1">Crie sua conta</h1>
      <p className="headline headlineBold">Rapido e grátis, vamos nessa</p>

      <Input
        label="Nome"
        placeholder="Digite aqui seu nome"
        type="text"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label="E-mail"
        placeholder="Digite aqui seu email"
        type="email"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />

      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        error={errors.bio}
        {...register("bio")}
      />

      <Input
        label="Contato"
        placeholder="Opção de contato"
        type="tel"
        error={errors.contact}
        {...register("contact")}
      />

      <div className={style.container__select}>
        <label className="headline">Selecionar módulo</label>
        <select
          name="courseModule"
          id="courseModule"
          {...register("course_module")}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </div>
      <button className="btn negative" type="submit">
        Cadastrar
      </button>
    </form>
  );
};
