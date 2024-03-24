import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Item = styled.a`
    color: ${Colors.textPrimary};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: ${Colors.textSecondary};
        font-weight: 600;
    }
`;
