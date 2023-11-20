import React from "react";
import { ButtonSubmitStyled } from "./SubmitStyles";

const Submit = ({ children, onClick, disable = false }) => {
	return (
		<ButtonSubmitStyled
			whileTap={{ scale: 1 }}
			disable={disable}
			onClick={onClick}
			type="submit">
			{children}
		</ButtonSubmitStyled>
	);
};

export default Submit;
