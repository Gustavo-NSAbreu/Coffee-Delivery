import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  width: 40rem;

  border-radius: 0.38rem;

`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: initial;
  justify-content: center;

  width: 100%;
  height: 2.75rem;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["yellow-700"]};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
    flex: 1 0 0;
    
    h2 {
      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme["gray-800"]};
    }

    h3 {
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.75rem;

  > input[type="radio"] {
    display: none;
    visibility: hidden;
  }
  > input[type="radio"]:checked + label{
    background-color: ${(props) => props.theme["purple-300"]};
    border: 1px solid ${(props) => props.theme["purple-700"]};
  }
  > input[type="radio"]:hover + label:hover {
    cursor: pointer;
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    padding: 1rem;

    height: 3.187rem;

    border-radius: 0.375rem;

    background: ${(props) => props.theme["gray-400"]};
  
    > span {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 160%;
    }

    svg {
      color: ${(props) => props.theme["purple-700"]};
    }
  
  }

`;