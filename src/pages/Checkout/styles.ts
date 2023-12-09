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