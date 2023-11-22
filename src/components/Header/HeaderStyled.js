import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
	background-color: #202020;
	background-image: url(https://i.imgur.com/Rg3MrDt.png);
	border-bottom: 1px solid #ebebeb;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	height: 100px;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 20px;
`;

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavLinkStyled = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	font-size: 1.2rem;
	text-decoration: none;
	color: white;
	transition: all 0.2s;
	border-radius: 5px;
	padding: 8px;

	&:hover {
		background-color: var(--color-ut-orange);
		opacity: 0.8;
	}

	&.active {
		background-color: var(--color-ut-orange);
	}
`;

export const SpanUser = styled(Link)`
	font-weight: 700;
	border-bottom: 3px solid var(--color-ut-orange);
	text-decoration: none;
	font-size: 1.2rem;
	text-transform: capitalize;
	padding: 2px 5px;
`;

export const LogoIcon = styled.div`
	cursor: pointer;
	& img {
		width: 140px;
		border-radius: 5px;
	}
`;
