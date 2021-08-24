import styled from "styled-components";
import {Breakpoints, MQ} from "../../style/styled-components/cssMediaQueries";

export const SliderContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 40px;
    position: relative;
    text-align: left;

    .slide-container {
        white-space: nowrap;
    }
`;

export const SliderTitle = styled.div`
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    max-width: 100%;
    overflow: hidden;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    white-space: nowrap;
    width: 100%;
  
    color: #eee;

    ${MQ(Breakpoints.s)} {
        padding-left: 32px;
        padding-right: 32px;
    }
    ${MQ(Breakpoints.m)} {
        padding-left: 40px;
        padding-right: 40px;
    }
`;

export const CardContainer = styled.div`
    position: relative;
`;
