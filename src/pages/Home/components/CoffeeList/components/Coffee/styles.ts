import { styled } from "styled-components";

export const CoffeeContainer = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;

  background: ${(props) => props.theme["gray-300"]};

  img {
    display: flex;
    width: 7.5rem;
    height: 7.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: calc(0px - 1.25rem)
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    
    div {
      display: flex;
      gap: 0.5rem;
    }

  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  
  span {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    
    font-family: Roboto;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  
    color: ${(props) => props.theme["yellow-700"]};
    background: ${(props) => props.theme["yellow-300"]};

  }

`;
