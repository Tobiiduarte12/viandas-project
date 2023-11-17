import * as Yup from "yup";

export const ValidationSchema = Yup.object({
	name: Yup.string()
		.trim()
		.max(10, "Máximo 10 caracteres")
		.required("Completa este campo por favor"),
	surname: Yup.string().trim().required("Completa este campo por favor"),
	age: Yup.number()
		.typeError("Debe ser un número")
		.moreThan(18, "Debes ser mayor de 18 anios")
		.required("Campo requerido")
		.lessThan(100, "Debes ser menos de 100 anios")
		.integer("Debe ser un número entero"),
	email: Yup.string()
		.email(`el email debe ser de tipo "Example@gmail.com"`)
		.required("Completa este campo por favor"),
	address: Yup.string().trim().required("Completa este campo por favor"),
	password: Yup.string()
		.trim()
		.min(6, "Requiere un mínimo de 6 caracteres")
		.max(10, "Requiere un máximo 10 caracteres")
		.required("Completa este campo por favor"),
});

export const registerValidationSchema = Yup.object({
	name: Yup.string().trim().required("Completa este campo por favor"),
	email: Yup.string()
		.email("el email debe ser de tipo example@gmail.com")
		.required("Completa este campo por favor"),
	password: Yup.string()
		.trim()
		.min(6, "Requiere un mínimo de 6 caracteres")
		.max(10, "Requiere un máximo 10 caracteres")
		.required("Completa este campo por favor"),
});
