import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: flex;

  h1 {
    margin-bottom: 20px;
  }
`;

export const DetailImageWrapper = styled.div`
  width: 30%;
  
  img {
    width: 100%;
  }
`

export const CreatorsWrapper = styled.div`
  margin-top: 25px;
`;

export const CreatorsList = styled.ul`
  list-style: none;
  margin-top: 10px;
  
  li {
    font-size: 12px;
    cursor: pointer;
  }
`;


export const DetailsInfoWrapper = styled.div`
  width: 70%;
  margin-left: 20px;
  color: #eee;
`;
