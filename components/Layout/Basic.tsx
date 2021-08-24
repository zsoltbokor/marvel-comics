import styled, {createGlobalStyle} from "styled-components";
import {Header} from "../Header/Header";

export const GlobalStyle = createGlobalStyle`
  // this is the shared style
  html {
    box-sizing: border-box;
  }

  body {
      background: #202020;
  }

  *,
  *::before,
  *::after {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
  }

  // anything else you would like to include
`;

const Content = styled.div`
  margin: 40px auto;
  width: 90%;
`;

const BasicLayout = ({children}: { children: any }) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Content>
                {children}
            </Content>
        </>
    );
};

export default BasicLayout;
