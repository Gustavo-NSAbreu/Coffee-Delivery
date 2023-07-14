import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    a:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
  
      padding: 0.5rem;
      border: none;
      border-radius: 6px;

      background: ${(props) => props.theme["purple-300"]};
      color: ${(props) => props.theme["purple-500"]}; 

      text-decoration: none;
      
      
      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme["purple-700"]}; 
      }
  
    }

    a:last-child {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;
      border-radius: 6px;

      background: ${(props) => props.theme["yellow-300"]};
      color: ${(props) => props.theme["yellow-700"]};
    }
  }

`;
