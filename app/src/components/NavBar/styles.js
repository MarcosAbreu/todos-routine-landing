import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    color: ${Colors.textSecondary};
`;

export const List = styled.ul`
    width: 35%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-top: 40px;
    align-items: center;
`;

export const Item = styled.li`
    font-size: 1.25em;
    cursor: pointer;
`;
