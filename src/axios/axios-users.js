import { BASE_URL } from "../utils/consts";
import axios from "axios";

export const createUser = async (nombre, email, password) => {
	try {
		const response = await axios.post(`${BASE_URL}auth/register`, {
			nombre,
			email,
			password,
		});
		return response.data;
	} catch (error) {
		return alert(error.response.data.errors[0].message);
	}
};

export const loginUser = async (email, password) => {
	try {
		const response = await axios.post(`${BASE_URL}auth/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		return alert(error.response.data.errors[0].message);
	}
};
