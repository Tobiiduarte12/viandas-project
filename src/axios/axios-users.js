import { BASE_URL } from "../utils/consts";

export const createUser = async (nombre, email, password) => {
	try {
		const response = await axios.post(`${BASE_URL}/auth/register`, {
			nombre,
			email,
			password,
		});
		return response.data;
	} catch (error) {
		return alert(error.response.data.error[0].message);
	}
};
