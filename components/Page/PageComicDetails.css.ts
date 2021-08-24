import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: flex;
`;

export const DetailImageWrapper = styled.div`
  width: 30%;
  
  img {
    width: 100%;
  }
`

export const SectionTitle = styled.h3`
  margin-top: 15px;
  margin-bottom: 10px;
`;

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


export const CharactersWrapper = styled.div`
  margin-top: 10px;
`;

export const DetailTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
`;

export const DetailDescription = styled.p`
  font-size: 13px;
`;

export const DetailsInfoWrapper = styled.div`
  width: 70%;
  margin-left: 20px;
  color: #eee;
`;
