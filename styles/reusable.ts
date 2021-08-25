import styled from "styled-components";

export const LoadingIcon = styled.span`
  display: inline-block;

  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #FFF;
  border-left-color: #FFF;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
  
  margin-top: 15px;
`;
