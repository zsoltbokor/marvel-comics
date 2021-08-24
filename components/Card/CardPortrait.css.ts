import styled from "styled-components";

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
  width: 190px;
  height: 300px;

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
`;
