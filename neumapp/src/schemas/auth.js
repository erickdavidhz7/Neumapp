import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const lenderSchema = z.object({
  firstName: z
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
  phoneClient: z
    .string({ required_error: "Celular es requerido" })
    .regex(/^[0-9]{10}$/, {
      message: "Ingrese un numero valido",
    }),
  phoneProvider: z
    .string({ required_error: "Celular es requerido" })
    .regex(/^[0-9]{10}$/, {
      message: "Ingrese un numero valido",
    }),
  agreements: z.boolean().refine((value) => value === true, {
    message: "Debe aceptar los términos y condiciones",
    path: [],
  }),
  photo: z
    .any()
    .nullable()
    .refine((file) => {
      if (file[0] === undefined || file[0] === null) return true; // Validación pasa si el campo es opcional
      return file[0].size <= MAX_FILE_SIZE;
    }, "La imagen debe tener un tamaño máximo de 5MB.")
    .refine((file) => {
      if (file[0] === undefined || file[0] === null) return true; // Validación pasa si el campo es opcional
      return ACCEPTED_IMAGE_TYPES.includes(file[0].type);
    }, "La imagen debe ser .jpg, .jpeg, .png o .webp."),
});

export const userSchema = z.object({
  email: z.string().email({
    message: "Introduzca una dirección de correo electrónico válida",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});
