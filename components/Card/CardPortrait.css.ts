import styled from "styled-components";
import {MQ} from "../../style/styled-components/cssMediaQueries";

export const PortraitCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border: 1px solid #333;
  border-radius: 3px;
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
    
    ${PortraitCardImage} {
      border-color: #eee;
    }
  }
  
  ${MQ("556px")} {
    width: 190px;
    height: 253px;
  }
  
  ${MQ("1112px")} {
    width: 200px;
    height: 266px;
  }

  ${MQ("1154px")} {
    width: 220px;
    height: 293px;
  }

  ${MQ("1145px")} {
    width: 230px;
    height: 306px;
  }

  ${MQ("1288px")} {
    width: 240px;
    height: 320px;
  }

  ${MQ("1334px")} {
    width: 250px;
    height: 333px;
  }

  ${MQ("1378px")} {
    width: 255px;
    height: 340px;
  }

  ${MQ("1400px")} {
    padding: 28px;
    width: 260px;
    height: 346px;
  }

  ${MQ("1494px")} {
    width: 190px;
    padding: 7px;
    height: 253px;
  }

  ${MQ("1540px")} {
    padding: 10px;
  }

  ${MQ("1590px")} {
    padding: 14px;
  }
`;
