import styled from "styled-components";
import {MQ} from "../../style/styled-components/cssMediaQueries";

export const PortraitCardImage = styled.img<{objectFill: 'cover' | 'contain'}>`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFill != null ? props.objectFill : 'cover'};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #333;
  border-radius: 3px;
  background: #000;
`;

export const CardTitle = styled.span`
  display: block;
  color: #888;
  margin-top: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 13px;
`;

export const PortraitCardWrapper = styled.div`
  width: 300px;
  height: 400px;

  cursor: pointer;
  
  padding: 20px;
  margin: 10px;
  
  &:hover {
    ${CardTitle} {
      color: #eee;
    }
    
    ${ImageWrapper} {
      border-color: #eee;
    }
  }
  
  ${MQ("556px")} {
    width: 190px;
    height: 253px;
  }
  
  ${MQ("840px")} {
    width: 200px;
    height: 266px;
  }

  ${MQ("880px")} {
    width: 220px;
    height: 293px;
  }

  ${MQ("960px")} {
    width: 230px;
    height: 306px;
  }

  ${MQ("1000px")} {
    width: 240px;
    height: 320px;
  }

  ${MQ("1040px")} {
    width: 250px;
    height: 333px;
  }

  ${MQ("1080px")} {
    width: 255px;
    height: 340px;
  }

  ${MQ("1100px")} {
    padding: 28px;
    width: 260px;
    height: 346px;
  }

  ${MQ("1120px")} {
    padding: 28px;
    width: 275px;
    height: 360px;
  }

  ${MQ("1180px")} {
    width: 170px;
    padding: 7px;
    height: 245px;
  }

  ${MQ("1540px")} {
    width: 170px;
    height: 253px;
  }
`;
