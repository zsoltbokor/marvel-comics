import styled from "styled-components";

export const StyledNav = styled.nav`
  background: #191919;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: #eee;
  border-bottom: 1px solid #111;
  
  ul {
    list-style: none;
    margin: 0 auto;
    
    li {
      display: inline-block;
      padding: 8px 12px;
      
      a {
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;
