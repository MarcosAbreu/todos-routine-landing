import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    color: ${Colors.textPrimary};
    display: flex;
    justify-content: space-around;
    z-index: 1;
    font-weight: 600;
`;

export const ActionContainer = styled.div`
    color: ${Colors.textSecondary};
    display: flex;
    justify-items: center;
    padding-top: 40px;
    align-content: center;
    
`;

export const Button = styled.button`
    background-color: rgba(0,0,0,0);
    font-size: 1.25em;
    font-weight: 700;
    width: 150px;
    border-radius: 20px;
    border: 3px solid ${Colors.textPrimary};
    color: ${Colors.textPrimary};
    height: 50px;
    cursor: pointer;

    &:nth-child(1){
        border: none;
    }
`;