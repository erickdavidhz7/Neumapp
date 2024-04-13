import { z } from "zod";

export const lenderSchema = z.object({
  name: z
    .string({ required_error: "Nombre es requerido" })
    .min(3, {
      message: "Debe tener mas de 3 caracteres",
    })
    .max(12, { message: "El nombre debe tener menos de 12 caracteres" }),
  lastName: z
    .string({ required_error: "Apellido es requerido" })
    .min(3, {
      message: "Debe tener mas de 3 caracteres",
    })
    .max(12, { message: "El nombre debe tener menos de 12 caracteres" }),
  email: z.string().email({
    message: "Introduzca una dirección de correo electrónico válida",
  }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(12, { message: "La contraseña debe tener menos de 12 caracteres" }),
  codeP: z.string().regex(/^\+\d{2}$/, { message: "requerido" }),
  codeL: z.string().regex(/^\+\d{2}$/, { message: "requerido" }),
  phonePersonal: z
    .string({ required_error: "Celular es requerido" })
    .regex(/^[0-9]{10}$/, {
      message: "Ingrese un numero valido",
    }),
  phoneLaboral: z
    .string({ required_error: "Celular es requerido" })
    .regex(/^[0-9]{10}$/, {
      message: "Ingrese un numero valido",
    }),
  agreements: z.boolean().refine((value) => value === true, {
    message: "Debe aceptar los términos y condiciones",
    path: [],
  }),
});
