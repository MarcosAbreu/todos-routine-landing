import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const ButtonComp = styled.button`
    background-color: ${props => props.$backgroundcolor === '' ? '' : props.$backgroundcolor};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    width: ${props => props.width};
    border-radius: 20px;
    border: ${ props => props.$border === 'none' ? 'none' : '3px solid '+ props.$bordercolor};
    color: ${props => props.color};
    height: ${props => props.height};
    cursor: pointer;
    box-shadow: ${ props => props.$boxshadow === 'none' ? 'none' : '2px 2px rgba(0,0,0,0.1)'};
    transition: 0.5s;

    &:hover{
        background-color: ${props => props.$hover };

        color: ${props => 
            (   props.$hover ===  Colors.primary || 
                props.$hover ===  Colors.secondary || 
                props.$hover ===  Colors.textSecondary ) ? Colors.textPrimary : Colors.textSecondary };
        font-weight: ${props => parseInt(props.fontWeight) + 100};
        border-color: ${props => props.$backgroundcolor === 'rgba(0,0,0,0)' ? Colors.textSecondary : Colors.primary };
    }
`;