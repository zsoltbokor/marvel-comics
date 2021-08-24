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
`;

export const PortraitCardWrapper = styled.div`
  width: 150px;
  height: 200px;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  background: #000000;
  
  &:hover {
    ${CardTitle} {
      color: #eee;
    }
    
    ${PortraitCardImage} {
      border-color: #eee;
    }
  }
`;
