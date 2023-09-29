import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .max(10, "Máximo 10 caracteres")
    .required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  age: Yup.number()
    .typeError("Debe ser un número")
    .moreThan(18, "Debe ser mayor de edad")
    .required("Campo requerido")
    .lessThan(100, "Debe ser menor a 100")
    .integer("Debe ser un número entero"),
  email: Yup.string().email("Email inválido").required("Campo requerido"),
  address: Yup.string().trim().required("Campo requerido"),
  password: Yup.string()
    .trim()
    .min(6, "Mínimo 6 caracteres")
    .max(10, "Máximo 10 caracteres")
    .required("Campo requerido"),
});
