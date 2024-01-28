import { styled } from 'styled-components';

export const TitleContainer = styled.section`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding-bottom: 5.87rem;
	gap: 3.5rem;

	img {
		width: 29.75rem;
		height: 22.5rem;
	}

	@media (max-width: 1120px) {
		flex-direction: column;
		column-gap: 1.5rem;
		text-align: center;
	}
`;

export const TitleSection = styled.div`
	display: grid;
	align-items: center;
	gap: 1rem;

	width: 36.75rem;
	margin-bottom: 4.12rem;

	h1 {
		font-size: 3rem;
	}
	p {
		font-size: 1.25rem;
	}
`;

export const ServiceDescription = styled.div`
	display: grid;
	justify-content: space-between;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	column-gap: 2.25rem;

	&:first-child {
		margin-bottom: 1.5rem;
	}

	@media (max-width: 1120px) {
		width: 100%;
		justify-items: center;
	}
`;

const BaseServiceTopic = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.75rem;
	white-space: nowrap;

	margin-bottom: 1.5rem;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 999px;
		color: ${(props) => props.theme['gray-100']};
	}
`;

export const FirstServiceTopic = styled(BaseServiceTopic)`
	div {
		background: ${(props) => props.theme['yellow-700']};
	}
`;

export const SecondServiceTopic = styled(BaseServiceTopic)`
	div {
		background: ${(props) => props.theme['gray-700']};
	}
`;

export const ThirdServiceTopic = styled(BaseServiceTopic)`
	div {
		background: ${(props) => props.theme['yellow-500']};
	}
`;

export const FourthServiceTopic = styled(BaseServiceTopic)`
	div {
		background: ${(props) => props.theme['purple-500']};
	}
`;
