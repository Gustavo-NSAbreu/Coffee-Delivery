import styled from 'styled-components';

export const CoffeeContainer = styled.div`
	display: flex;
	align-items: normal;
	justify-content: space-between;
	flex-direction: row;
	width: 23rem;
	padding: 0.5rem 0.25rem;
`;

export const MainCardSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-self: flex-start;
	gap: 1.25rem;

	img {
		width: 4rem;
		height: 4rem;
	}
`;

export const MiddleSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: flex-start;
	gap: 0.5rem;

	> div {
		display: flex;
		align-self: center;
		gap: 0.5rem;
	}
`;

export const PriceTag = styled.span`
	text-align: right;

	font-family: Roboto;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 130%;
`;

export const RemoveButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	height: 2rem;
	padding: 0 0.5rem;
	border: none;
	border-radius: 0.375rem;

	font-family: 'Roboto';
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 160%;

	color: ${(props) => props.theme['gray-700']};
	background: ${(props) => props.theme['gray-400']};

	> svg {
		height: 1rem;
		width: 1rem;

		color: ${(props) => props.theme['purple-500']};
	}

	:hover {
		cursor: pointer;
	}
`;
