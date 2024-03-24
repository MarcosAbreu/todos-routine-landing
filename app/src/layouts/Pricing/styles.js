import styled from 'styled-components';
import { Colors } from '../../helpers/themes';


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    background-color: ${Colors.secondary};
    color: ${Colors.secondary};
`;

export const Button = styled.button`
    margin: 0 auto;
    width: 180px;
    height: 52px;
    border-radius: 20px;
    border: none;
    background-color: ${Colors.secondary};
    color: ${Colors.textPrimary};
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;
`;

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &:nth-child(2){
        flex-direction: row;
        padding: 0 100px;
        justify-content: center;
        gap: 100px;
    }
`;
export const Title = styled.h3`
    font-size: 2.25em;
    text-align: center;
    font-weight: 600;
    color: ${Colors.textPrimary};
`;
export const Description = styled.p`
    font-size: 1.5em;
    text-align: center;
    font-weight: 500;
    margin-top: 40px;
    width: 500px;
    color: ${Colors.textPrimary};
`;


