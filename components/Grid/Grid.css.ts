import styled from "styled-components";

export const GridTitle = styled.h2<{align: 'center' | 'left'}>`
  color: #CCC;
  text-align: ${props => props.align};
  margin-bottom: 30px;
`;

export const GridWrapper = styled.div<{justifyContent: 'flex-start' | 'center'}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent};
`;

export const ViewAllButton = styled.span`
  display: inline-block;
  padding: 7px 25px;
  background: #eee;
  border-radius: 4px;
  margin: 40px auto;
  color: #222;
  border: 1px solid #222;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #777;
  }
`;

export const GridHolder = styled.div`
  text-align: center;
  margin-top: 25px;
`;
