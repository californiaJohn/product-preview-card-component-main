import styled from "styled-components";
import { theme } from "./theme";

export const Container = styled.div`
	background-color: ${theme.colors.primary.Cream};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	border-radius: 8px;
	width: 35vw;
	height: 55vh;
	display: flex;
	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	width: 50%;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.neutral.White};
	width: calc(50% - 2 * 2em);
	padding: 2em 2em;
`;

export const Category = styled.p`
	padding: 0;
	margin: 0;
	font-weight: 500;
	font-family: ${theme.fonts.Montserrat};
	color: ${theme.colors.neutral['Dark grayish blue']};
	letter-spacing: 8px;
	font-size: ${theme['Font Size paragraph']};
`;

export const Title = styled.h1`
	font-family: ${theme.fonts.Fraunces};
	font-weight: 700;
	font-size: 2.5em;
	color: ${theme.colors.neutral["Very dark blue"]};
`;

export const Paragraph = styled.p`
	font-family: ${theme.fonts.Montserrat};
	font-size: ${theme['Font Size paragraph']};
	line-height: 1.8;
	color: ${theme.colors.neutral['Dark grayish blue']};
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
`;