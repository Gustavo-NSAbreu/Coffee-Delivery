import styled from 'styled-components';

export const EmptyCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 0.5rem;

	padding: 1.5rem;

	width: 23rem;
	border-radius: 0.375rem 2.75rem;

	background: ${(props) => props.theme['gray-200']};

	h3 {
		font-family: 'Roboto';
		font-size: 1.125rem;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 0.94rem;
		color: ${(props) => props.theme['gray-800']};
	}

	p {
		font-family: 'Roboto';
		font-size: 0.75;
		font-weight: 400;
		line-height: 130%;
		color: ${(props) => props.theme['gray-600']};
	}

	hr {
		margin: 1.5rem 0rem;
		border: 1px solid ${(props) => props.theme['gray-400']};
		height: 1px; // Add this line
		width: 100%;
	}
`;
