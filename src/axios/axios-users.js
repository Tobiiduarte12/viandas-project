import { BASE_URL } from "../utils/consts";
import axios from "axios";

export const createUser = async (nombre, email, password) => {
	try {
		const response = await axios.post(`${BASE_URL}auth/register`, {
			nombre,
			email,
			password,
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		return alert(error.response.data.errors[0].message);
	}
};
