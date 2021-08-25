import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "styles/global-styles";
import {Header} from "../Header/Header";


const Content = styled.div`
  margin: 40px auto;
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
