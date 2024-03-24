import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Card = styled.div`
    width: 350px;
    height: 520px;
    border: solid 10px ${Colors.textPrimary};
    background-color: ${Colors.textPrimary};
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 4px 4px rgba(0,0,0,0.1);

    &:hover{
        background-color: ${Colors.primary};
        color: ${Colors.textPrimary};
    }

    &:hover Button{
        background-color: ${Colors.textPrimary};
        color: ${Colors.primary};
    }
`;
export const Title = styled.h4`
    font-size: 1.75em;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
`;
export const Description = styled.p`
    font-size: 1em;
    font-weight: 600;
    text-align: center;
`;
export const Section = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

export const Value = styled.h5`
    font-size: 3em;
    font-weight: 600;
    margin-right: 14px;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
`;
export const Unit = styled.div`
    font-weight: 600;
`;
export const Period = styled.div`
    font-weight: 500;
`;
export const Features = styled.p`
    font-weight: 600;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
