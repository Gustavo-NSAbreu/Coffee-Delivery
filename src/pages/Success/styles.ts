import styled from "styled-components";

export const SuccessContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin: 5rem 10rem 30rem;

  h1 {
    color: ${(props) => props.theme["yellow-700"]};
  }

  h2 {
    color: var(--Base-Subtitle, #403937);

    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;

  margin-bottom: 2rem;
  
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 2rem;

    width: 32.875rem;
    padding:2.5rem;
    border-radius: 0.375rem 2.25rem;
    background: ${(props) => props.theme["gray-100"]};
    position: relative;

    &:before {
      padding: 1px;
      content: "";
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: linear-gradient(to right, ${(props) => props.theme["yellow-500"]}, ${(props) => props.theme["purple-500"]});
      z-index: -1;
      border-radius: 0.375rem 2.25rem;
    }
  }
`;

const BaseTopic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 62.5rem;
  }
  svg {
    color: ${(props) => props.theme['white']};
  }
`;

export const AddressTopic = styled(BaseTopic)`
  > div:first-child {
    background-color: ${(props) => props.theme["purple-500"]}
  }
`;

export const TimeTopic = styled(BaseTopic)`
  > div:first-child {
    background-color: ${(props) => props.theme["yellow-500"]}
  }

`;

export const PaymentTopic = styled(BaseTopic)`
> div:first-child {
  background-color: ${(props) => props.theme["yellow-700"]}
}

`;

export const DeliveryImage = styled.div`
  width: 30.75rem;
  height: 18.3125rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

