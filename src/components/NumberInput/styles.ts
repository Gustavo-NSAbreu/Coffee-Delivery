import { styled } from "styled-components";

export const NumberInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  height: 2.375rem;
  width: fit-content;
  padding: 0.5rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["gray-400"]};
  
  
  button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${(props) => props.theme["purple-500"]};
    background: ${(props) => props.theme["gray-400"]};

    &:hover {
      color: ${(props) => props.theme["purple-700"]};
    }
  }
  input {
    border: none;
    background: transparent;
    text-align: center; 

    -webkit-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;