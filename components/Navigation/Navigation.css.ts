import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: -40px;
  justify-content: space-between;
`;

const Button = styled.div`
  color: #eee;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  background: #111;
  
  &:hover {
    opacity: 0.5;
  }
`;


export const ButtonPrevious = styled(Button)`
  padding-left: 30px;
  &:before {
    content: '< '
  }
`

export const ButtonNext = styled(Button)`
  padding-right: 30px;
  &:after {
    content: ' >'
  }
`
