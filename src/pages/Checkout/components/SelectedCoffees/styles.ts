import styled from "styled-components";

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