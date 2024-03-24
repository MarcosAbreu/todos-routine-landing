import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: ${Colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
`;
export const Title = styled.h3`
    font-size: 2.25em;
    color: ${Colors.secondary};
    text-align: center;
    font-weight: 600;
`;
export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
`;

export const Info = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const Direct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
`;
export const DirectSection = styled.div`
    width: 400px;
    height: 40px;
    display: flex;
    flex-direction: row;
    gap: 50px;
`;
export const DirectLabel = styled.p`
    margin: auto 0;
    font-size: 1.5em;
    line-height: normal;
    text-align: start;
`;
export const Social = styled.div`
    
`;
export const SocialLabel = styled.h6`
    font-size: 1.5em;
    color: ${Colors.secondary};
    text-align: start;
    font-weight: 500;
    margin-bottom: 30px;
`;
export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export const SocialMedia = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;