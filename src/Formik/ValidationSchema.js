import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  name: Yup.string().trim().required("Completa este campo por favor"),
  email: Yup.string()
    .trim()
    .email("el email debe ser de tipo example@gmail.com")
    .required("Completa este campo por favor"),
  password: Yup.string()
    .trim()
    .min(6, "Requiere un mínimo de 6 caracteres")
    .required("Completa este campo por favor"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("el email debe ser de tipo example@gmail.com")
    .required("Completa este campo por favor"),
  password: Yup.string()
    .trim()
    .min(6, "Requiere un mínimo de 6 caracteres")
    .required("Completa este campo por favor"),
});

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().trim().required("Completa este campo por favor"),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(10, "Requiere un mínimo de 10 números")
    .max(10, "Requiere un máximo de 10 números")
    .required("Completa este campo por favor"),
  localidad: Yup.string().trim().required("Completa este campo por favor"),
  direccion: Yup.string().trim().required("Completa este campo por favor"),
});
