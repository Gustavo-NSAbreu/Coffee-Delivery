import { Minus, Plus } from "phosphor-react";
import { NumberInputContainer } from "./styles";

export default function NumberInput() {

  

  return (
    <NumberInputContainer>
      <button>
        <Minus size={14} />
      </button>
      <input
        type="number"
        placeholder="0"
        min={0}
        max={10}
      />
      <button>
        <Plus size={14} />
      </button>
    </NumberInputContainer>
  );
}