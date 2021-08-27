import styled from "styled-components";

export const Wrapper = styled.div`
  color: #eee;
`;

export const TeaserWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: #000;
  text-align: center;
  position: relative;
  margin-top: -40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InnerWrapper = styled.div`
  padding: 15px 20px;
`;

export const DetailsTitle = styled.h1`
  color: #CCC;
  margin-bottom: 30px;
`;

export const DetailDescription = styled.p`
  font-size: 13px;
`;

export const Section = styled.section`
  margin-top: 30px;
`;
