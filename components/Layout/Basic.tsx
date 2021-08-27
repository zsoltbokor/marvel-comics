import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "style/global-styles";
import {Header} from "../Header/Header";
import {usePageScroller} from "../../hooks/usePageScroller";

const Content = styled.div`
  margin: 40px auto;
`;

const BasicLayout = ({children}: { children: any }) => {

    usePageScroller();

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
