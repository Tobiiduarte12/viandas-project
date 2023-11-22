import React from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
	ModalUserContainer,
	ModalUserContent,
	StyledName,
} from "./ModalUserStyles";
import {
	setCurrentUser,
	toggleHiddenMenu,
} from "../../../redux/user/userSlice";

const ModalUser = () => {
	const { hiddenMenu, currentUser } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	return (
		<AnimatePresence>
			{!hiddenMenu && (
				<ModalUserContainer
					initial={{ translateX: 600 }}
					animate={{ translateX: 0 }}
					exit={{ translateX: 600 }}
					transition={{ duration: 0.5 }}>
					<StyledName>{currentUser.nombre}</StyledName>
					<ModalUserContent
						onClick={() => {
							dispatch(setCurrentUser(null));
							dispatch(toggleHiddenMenu());
						}}>
						<p>Cerrar Sesión</p>
					</ModalUserContent>
				</ModalUserContainer>
			)}
		</AnimatePresence>
	);
};

export default ModalUser;
