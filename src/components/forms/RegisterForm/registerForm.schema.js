import { z } from "zod";

export const registerFormsSchema = z
  .object({
    name: z.string().min(1, "Este campo é obrigatório."),
    email: z
      .string()
      .email("Forneça um e-mail válido.")
      .min(1, "Este campo é obrigatório."),
    password: z
      .string()
      .min(8, "São necessários pelo menos oito (8) caracteres.")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
      .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
        "É necessário conter pelo menos um caracter especial."
      ),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
    bio: z.string().min(1, "Este campo é obrigatório"),
    contact: z.string().min(11, "Este campo é obrigatório."),
    course_module: z
      .string()
      .min(1, "Este campo é obrigatório.")
      .refine(
        value => {
          const allowedOptions = [
            "Primeiro módulo (Introdução ao Frontend)",
            "Segundo módulo (Frontend Avançado)",
            "Terceiro módulo (Introdução ao Backend)",
            "Quarto módulo (Backend Avançado)"
          ];
          return allowedOptions.includes(value);
        },
        {
          message: "Opção de módulo inválida.",
          path: ["course_module"]
        }
      )
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"]
  });
