import styled from "styled-components";

export const DeliveryAddressContainer = styled.section`

  display: flex;
  flex-direction: column;

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