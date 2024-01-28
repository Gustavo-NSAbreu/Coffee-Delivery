import { Minus, Plus } from 'phosphor-react';
import { NumberInputContainer } from './styles';

interface NumberInputProps {
	size: 'small' | 'large';
	amount: number;
	setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const MINIMUM_AMOUNT = 1;
const MAXIMUM_AMOUNT = 10;

export default function NumberInput({
	size,
	amount,
	setAmount,
}: NumberInputProps) {
	function handleDecreaseAmount(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		setAmount((state) => (state > MINIMUM_AMOUNT ? state - 1 : state));
	}

	function handleIncreaseAmount(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		setAmount((state) => (state < MAXIMUM_AMOUNT ? state + 1 : state));
	}

	return (
		<NumberInputContainer size={size}>
			<button onClick={handleDecreaseAmount}>
				<Minus size={14} />
			</button>
			<input
				readOnly
				type='number'
				min={1}
				max={10}
				value={amount}
			/>
			<button onClick={handleIncreaseAmount}>
				<Plus size={14} />
			</button>
		</NumberInputContainer>
	);
}
