import styled from "styled-components";

export const DetailsTitle = styled.h1`
  color: #CCC;
  margin-bottom: 30px;
`;

export const DetailsWrapper = styled.div`
  padding: 20px;
  color: #eee;
`;


export const SectionTitle = styled.h2`
  color: #CCC;
`;

export const Section = styled.section`
  margin-top: 30px;
`;

export const ListWrapper = styled.div`
  margin-top: 25px;
  margin-right: 40px;
`;

export const DataList = styled.ul`
  list-style: none;
  margin-top: 10px;
  
  li {
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DetailDescription = styled.p`
  font-size: 13px;
`;
