import { z } from "zod";
const MAX_FILE_SIZE = 10000000;
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
    .max(20, { message: "El nombre debe tener menos de 20 caracteres" })
    .regex(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/, {
      message: "No debe contener numeros",
    }),
  lastName: z
    .string({ required_error: "Apellido es requerido" })
    .min(3, {
      message: "Debe tener mas de 3 caracteres",
    })
    .max(20, { message: "El nombre debe tener menos de 20 caracteres" })
    .regex(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/, {
      message: "No debe contener numeros",
    }),
  email: z.string().email({
    message: "Introduzca una dirección de correo electrónico válida",
  }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(12, { message: "La contraseña debe tener menos de 12 caracteres" }),
  codeP: z
    .string()
    .min(2, { message: "No valido" })
    .max(3, { message: "No valido" })
    .includes("+", { message: "Requerido +" })
    .regex(/^[0-9+]+$/, { message: "No valido" }),
  codeL: z
    .string()
    .min(2, { message: "No valido" })
    .max(3, { message: "No valido" })
    .includes("+", { message: "Requerido +" })
    .regex(/^[0-9+]+$/, { message: "No valido" }),
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
    .refine((files) => {
      if (files === null || files.length === 0) {
        return false;
      }
      return true; // Pasa la validación si hay al menos un archivo
    }, "Por favor, ingresa una imagen.")
    .refine((files) => {
      // Verificar si el archivo es undefined
      if (files[0] === undefined) {
        return false; // No pasa la validación si no hay archivo
      }
      // Validar tipo de archivo
      return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
    }, "La imagen debe ser .jpg, .jpeg, .png o .webp.")
    .refine((files) => {
      if (files[0] === undefined) {
        return false; // No pasa la validación si no hay archivo
      }
      // Validar tamaño del archivo
      return files[0].size <= MAX_FILE_SIZE;
    }, "La imagen debe tener un tamaño máximo de 10MB."),
});
export const registerUserSchema = z.object({
  firstName: z
    .string({ required_error: "Nombre es requerido" })
    .min(3, {
      message: "Debe tener mas de 3 caracteres",
    })
    .max(20, { message: "El nombre debe tener menos de 20 caracteres" })
    .regex(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/, {
      message: "No debe contener numeros",
    }),
  lastName: z
    .string({ required_error: "Apellido es requerido" })
    .min(3, {
      message: "Debe tener mas de 3 caracteres",
    })
    .max(20, { message: "El nombre debe tener menos de 20 caracteres" })
    .regex(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/, {
      message: "No debe contener numeros",
    }),
  email: z.string().email({
    message: "Introduzca una dirección de correo electrónico válida",
  }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(12, { message: "La contraseña debe tener menos de 12 caracteres" }),
  photo: z
    .any()
    .nullable()
    .refine((file) => {
      if (file[0] === undefined || file[0] === null) return true; // Validación pasa si el campo es opcional
      return ACCEPTED_IMAGE_TYPES.includes(file[0].type);
    }, "La imagen debe ser .jpg, .jpeg, .png o .webp.")
    .refine((file) => {
      if (file[0] === undefined || file[0] === null) return true; // Validación pasa si el campo es opcional
      return file[0].size <= MAX_FILE_SIZE;
    }, "La imagen debe tener un tamaño máximo de 5MB."),

  codeP: z
    .string()
    .min(2, { message: "No valido" })
    .max(3, { message: "No valido" })
    .includes("+", { message: "Requerido +" })
    .regex(/^[0-9+]+$/, { message: "No valido" }),
  phoneClient: z
    .string({ required_error: "Celular es requerido" })
    .regex(/^[0-9]{10}$/, {
      message: "Ingrese un numero valido",
    }),
  agreements: z.boolean().refine((value) => value === true, {
    message: "Debe aceptar los términos y condiciones",
    path: [],
  }),
});

export const userSchema = z.object({
  email: z.string().email({
    message: "Introduzca una dirección de correo electrónico válida",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});
