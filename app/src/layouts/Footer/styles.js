import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    background-color: ${Colors.secondary};
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${Colors.textPrimary};
    font-size: 1.25em;
`;
export const FooterBody = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 200px;
    gap: 200px;
`;
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Title = styled.h6`
    font-size: 1em;
    margin-bottom: 20px;
    text-transform: uppercase;
`;
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100px;
`;
export const Contacts = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
    font-size: 1em;
`;
export const Text = styled.p`
    
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
export const SocialImage = styled.img`

`;
export const CopyrightSection = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const Copyright = styled.p`
    color: ${Colors.textPrimary};
`;
