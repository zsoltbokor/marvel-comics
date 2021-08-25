import styled, {css} from "styled-components";
import {MQ} from "../../style/styled-components/cssMediaQueries";

export const DetailImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  
  img {
    width: 100%;
  }

  ${MQ("655px")} {
    width: 30%;
  }
`

export const SectionTitle = styled.h3`
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const ListWrapper = styled.div`
  margin-top: 25px;
  margin-right: 40px;
`;

export const DataList = styled.ul`
  list-style: none;
  margin-top: 10px;
  
  li {
    font-size: 12px;
    cursor: pointer;
    line-height: 20px;
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
  width: 100%;
  margin-left: 40px;
  color: #eee;

  ${MQ("655px")} {
    width: 70%;
  }
`;

export const DetailsWrapper = styled.div<{imageError: boolean}>`
  display: block;
  
  ${props => props.imageError ? 
        css`
          ${DetailImageWrapper} {
            width: 0;
            display: none;
          }
          
          ${DetailsInfoWrapper} {
            width: 100%;
          }
          
        ` : css``
    }
  
  ${MQ("655px")} {
    display: flex;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  justify-content: flex-start;
`;
