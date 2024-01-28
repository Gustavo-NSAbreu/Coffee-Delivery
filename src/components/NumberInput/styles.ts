import { styled } from 'styled-components';

const NUMBER_INPUT_HEIGHT = {
	large: '2.375rem',
	small: '2rem',
} as const;

interface NumberInputContainerProps {
	size: keyof typeof NUMBER_INPUT_HEIGHT;
}

export const NumberInputContainer = styled.div<NumberInputContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	width: 4.5rem;
	height: ${(props) => NUMBER_INPUT_HEIGHT[props.size]};
	padding: 0.5rem;

	border-radius: 0.375rem;
	background: ${(props) => props.theme['gray-400']};

	button {
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;

		color: ${(props) => props.theme['purple-500']};
		background: ${(props) => props.theme['gray-400']};

		&:hover {
			color: ${(props) => props.theme['purple-700']};
		}
	}
	input {
		border: none;
		background: transparent;
		text-align: center;
		width: 1rem;

		color: ${(props) => props.theme['gray-900']};

		-webkit-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;
