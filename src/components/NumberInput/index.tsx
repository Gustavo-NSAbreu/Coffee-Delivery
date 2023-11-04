import { Minus, Plus } from "phosphor-react";
import { NumberInputContainer } from "./styles";

interface NumberInputProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>
}

const MINIMUM_AMOUNT = 1;
const MAXIMUM_AMOUNT = 10;

export default function NumberInput({ amount, setAmount }: NumberInputProps) {

  function handleDecreaseAmount() {
    setAmount((state) => state > MINIMUM_AMOUNT ? state - 1 : state);
  }

  function handleIncreaseAmount() {
    setAmount((state) => state < MAXIMUM_AMOUNT ? state + 1 : state);
  }

  return (
    <NumberInputContainer>
      <button onClick={handleDecreaseAmount}>
        <Minus size={14} />
      </button>
      <input
        readOnly
        type="number"
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