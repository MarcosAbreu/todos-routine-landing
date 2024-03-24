import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
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
        gap: 200px;
    }
`;
export const Title = styled.h3`
    font-size: 2.25em;
    color: ${Colors.primary};
    text-align: center;
    font-weight: 600;
`;
export const Description = styled.p`
    font-size: 1.5em;
    color: ${Colors.primary};
    text-align: center;
    font-weight: 500;
    margin-top: 40px;
    width: 500px;
`;