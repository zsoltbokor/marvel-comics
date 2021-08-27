import styled from "styled-components";

export const StyledNav = styled.nav`
  background: #191919;
  display: flex;
  justify-content: center;
  padding: 20px 0 3px 0;
  color: #eee;
  border-bottom: 1px solid #111;
  
  ul {
    list-style: none;
    margin: 0 auto;
    
    li {
      display: inline-block;
      padding: 8px 12px;
      
      &.selected {
        opacity: 0.6;
      }

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const Logo = styled.div`
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
`;
