import styled from "styled-components";

export const InputWrapper = styled.div`
  display: inline-flex;
  width: 400px;
  border-bottom: 1px solid #aaa;
  padding: 3px 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: #eee;
  
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  display: inline-block;
  height: 100%;
  width: 40px;
  
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;


export const Wrapper = styled.div`
  text-align: center;
`;


export const ResultWrapper = styled.div`
  margin-top: 30px;
`;

export const NoResult = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #eee;
  margin-top: 100px;
`;
