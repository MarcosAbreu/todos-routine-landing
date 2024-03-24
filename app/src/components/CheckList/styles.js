import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    width: 400px;
    height: 300px;
    padding: 20px 0;
    background-color: ${Colors.textPrimary};
    position: absolute;
    border: 2px solid ${Colors.primary};
    border-radius: 0 20px 20px;
    z-index: 10;
    right: -392px;
    top: calc(0.85em + 14px);
    display: ${(checklistVisible)=> (checklistVisible !== undefined) ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const BorderGap = styled.span`
    position: absolute;
    width: 4px;
    height: 46px;
    left: -2px;
    top: 0;
    background-color: ${Colors.textPrimary};
`;

export const ListItem = styled.div`
    width: 280px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const CheckLabel = styled.p`
    
`;