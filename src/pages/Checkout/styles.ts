import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  padding-top: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.94rem;
    color: ${(props) => props.theme["gray-800"]};

    width: 20rem;

  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
  }
`;

export const DeliveryAddressContainer = styled.section`

  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  width: 40rem;

  border-radius: 0.38rem;

`;

export const DeliveryAddressTitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: initial;
  justify-content: center;

  width: 100%;
  height: 2.75rem;
  gap: 0.5rem;
  margin-bottom: 2rem;


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

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  align-items: flex-start;

  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    width: 35rem;
    gap: 0.75rem;
  }

`;

export const BaseInput = styled.input`
      display: flex;
      width: 12.5rem;
      padding: 0.75rem;
      align-items: center;
      gap: 0.25rem;

      border-radius: 0.25rem;
      border: 1px solid ${(props) => props.theme["gray-400"]};
      background: ${(props) => props.theme["gray-300"]};
      color: ${(props) => props.theme["gray-700"]};

      &::placeholder {
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

        color: ${(props) => props.theme["gray-600"]};
      }
`;

export const AddressInput = styled(BaseInput)`
  width: 35rem;

`;

export const ComplementInput = styled(BaseInput)`
  flex-grow: 1.845;
`;

export const CityInput = styled(BaseInput)`
  flex-grow: 1.436;
`;

export const StateInput = styled(BaseInput)`
  width: 3.75rem;
`;


export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  width: 40rem;

  border-radius: 0.38rem;

`;

export const PaymentMethodTitleContainer = styled.div`
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

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 2.5rem;

  width: 28rem;
  border-radius: 0.375rem 2.75rem;

  background: ${(props) => props.theme["gray-200"]};

  hr {
    margin: 1.5rem 0rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
  }

  input[type="submit"] {
    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 0.375rem;

    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow-500"]};

    &:not(:disabled):hover {
      background: ${(props) => props.theme["yellow-700"]};
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

  }

`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-bottom: 1.5rem;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  > :last-child {
    font-family: "Roboto";
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`;