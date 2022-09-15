import styled from "styled-components";
import { theme } from "./theme";

export const Container = styled.div`
	background-color: ${theme.colors.primary.Cream};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const Card = styled.div`
	border-radius: 8px;
	width: 35vw;
	height: 55vh;
	display: flex;
	overflow: hidden;

	@media (max-width: 375px) {
		display: flex;
		flex-direction: column;
		width: 90vw;
		height: 92.5vh;
	}
`;

export const Image = styled.img`
	width: 50%;
	height: 100%;

	@media (max-width: 375px) {
		width: 100%;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.neutral.White};
	width: calc(50% - 2 * 2em);
	padding: 2em 2em;

	@media (max-width: 375px) {
		width: unset;
	}
`;

export const Category = styled.p`
	padding: 0;
	margin: 0;
	font-weight: 500;
	font-family: ${theme.fonts.Montserrat};
	color: ${theme.colors.neutral['Dark grayish blue']};
	letter-spacing: 8px;
	font-size: ${theme['Font Size paragraph']};

	@media (max-width: 375px) {
		font-size: 12px;
		margin: 10px 0;
	}
`;

export const Title = styled.h1`
	font-family: ${theme.fonts.Fraunces};
	font-weight: 700;
	font-size: 2.5em;
	color: ${theme.colors.neutral["Very dark blue"]};

	@media (max-width: 375px) {
		font-size: 1.85em;
		margin: 0;
	}
`;

export const Paragraph = styled.p`
	font-family: ${theme.fonts.Montserrat};
	font-size: ${theme['Font Size paragraph']};
	line-height: 1.8;
	color: ${theme.colors.neutral['Dark grayish blue']};

	@media (max-width: 375px) {
		line-height: 1.5;
		font-size: 13px;
		margin: 10px 0;
	}
`;

export const PriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`;

export const ReducedPrice = styled.h1`
	color: ${theme.colors.primary['Dark cyan']};
	font-family: ${theme.fonts.Fraunces};

	@media (max-width: 375px) {
		margin: 10px 0;
	}
`;

export const OriginalPrice = styled.p`
	font-family: ${theme.fonts.Montserrat};
	font-size: ${theme['Font Size paragraph']};
	color: ${theme.colors.neutral['Dark grayish blue']};
	text-decoration: line-through;


`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	color: ${theme.colors.neutral.White};
	border: none;
	border-radius: 8px;
	padding: 16px 32px;
	background-color: ${theme.colors.primary["Dark cyan"]};
	font-family: ${theme.fonts.Montserrat};
	font-size: ${theme["Font Size paragraph"]};
	cursor: pointer;

	&:hover {
		background-color: hsl(158, 36%, 30%);
	}

	@media (max-width: 375px) {
		margin: 10px 0;
	}
`;