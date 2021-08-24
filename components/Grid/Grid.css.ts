import styled from "styled-components";
import {Breakpoints, MQ} from "../../style/styled-components/cssMediaQueries";

export const GridTitle = styled.h1`
  color: #CCC;
  text-align: center;
  margin-bottom: 30px;
`;

export const GridWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  column-gap: 10px;
  row-gap: 60px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  ${MQ(Breakpoints.xxs)} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${MQ(Breakpoints.s)} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${MQ(Breakpoints.m)} {
    width: 80%;
    grid-template-columns: repeat(5, 1fr);
  }

  ${MQ(Breakpoints.l)} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
