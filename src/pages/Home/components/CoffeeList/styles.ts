import { styled } from "styled-components";

export const CoffeeListContainer = styled.section`

  

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem 0;

  gap: 3.38rem;
  width: 100%;

  h1 {
    font-family: Baloo 2;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  @media (max-width: 1400px) {
    align-items: center;
  }
`;


export const CoffeeGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 1400px) {
    
    grid-template-columns: repeat(3, 1fr);
  
  }

  @media (max-width: 1130px) {
    
    grid-template-columns: repeat(2, 1fr);
  
  }
  @media (max-width: 930px) {
    
    grid-template-columns: 1fr;
  
  }
`;