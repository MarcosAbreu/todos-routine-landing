import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    z-index: -1;
    position: absolute;
`;

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(167.68% 71.77% at 51.87% 51.69%, #72B01D 50%, rgba(114, 176, 29, 0.00) 100%);
`;
export const Container = styled.div`
    width: 60%;
    height: 80%;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
`;

export const Image = styled.img`
    height: 100%;
`;
export const Section = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${Colors.secondary};
`;
export const Intro = styled.p`
    font-size: 1.5em;
    font-weight: 500;
`;
export const Title = styled.h2`
    font-size: 2em;
    font-weight: 700;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
export const SubSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    &:nth-child(3){
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    }
`;
export const Label = styled.h3`
    font-size: 1em;
    font-weight: 400;
`;
export const InputContainer = styled.div`
    
`;
export const Link = styled.a`
    display: flex;
    align-items: center;
    color: ${Colors.secondary};
    text-decoration: underline;
    cursor: pointer;
`;
export const Text = styled.p`
    display: flex;
    justify-content: center;
`;
export const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
`;
