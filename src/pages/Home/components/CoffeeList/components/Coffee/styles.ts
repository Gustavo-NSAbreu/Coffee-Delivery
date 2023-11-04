import { styled } from "styled-components";

export const CoffeeContainer = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;

  background: ${(props) => props.theme["gray-200"]};

  img {
    display: flex;
    width: 7.5rem;
    height: 7.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: calc(0px - 1.25rem);
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-align: center;

    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-bottom: 2.06rem;

    color: ${(props) => props.theme["gray-600"]};
  }
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.30rem;
    
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
  margin-bottom: 1rem;
  
  span {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    
    font-family: 'Roboto';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  
    color: ${(props) => props.theme["yellow-700"]};
    background: ${(props) => props.theme["yellow-300"]};

  }

`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5rem;

  border: none;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme['gray-200']};
`;

export const PriceTag = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;

  &::before {
    content: "R$ ";

    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }    
`;