import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Path = styled.path`
    
`;

export const SVG = styled.svg`
    &:hover ${Path}{
        fill: ${(props) => props.fill === Colors.textSecondary ? Colors.textPrimary : Colors.textSecondary};
    }
`;



