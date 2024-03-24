import styled from 'styled-components';

export const Path = styled.path`
    
`;
export const SVG = styled.svg`
   width: 30px;
   height: 30px;
   cursor: pointer;
   transition: all 0.5s ease-in-out;

   &:hover{
    fill: ${(props)=> props.hover};
   }
`;



