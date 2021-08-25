import styled from "styled-components";

export const CardCharacterWrapper = styled.div<{context}>`
  border-radius: 50%;
  width: ${props => props.context == 'grid' ? '140px' : '100px'};
  height: ${props => props.context == 'grid' ? '140px' : '100px'};
  background: #000;
  margin: 0 auto 10px auto;
  border: 1px solid #333;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const CharacterName = styled.span`
  font-size: 11px;
`;


export const CardHolder = styled.div<{context}>`
  display: inline-block;
  width: ${props => props.context == 'grid' ? '155px' : '120px'};
  height: ${props => props.context == 'grid' ? '205px' : '160px'};
  vertical-align: top;
  text-align: center;
  overflow: hidden;
  color: #888;
  cursor: pointer;
  
  &:hover {
    color: #fff;
    
    ${CardCharacterWrapper} {
      border-color: #fff;
    }
  }
`;
