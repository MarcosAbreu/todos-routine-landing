import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    padding: 100px;
    background-color: ${Colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;
export const Header = styled.div`
    position: relative;
    width: 1000px;
    height: 100px;
    color: ${Colors.textPrimary};
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Logout = styled.div`
    position: absolute;
    top: 25px;
    right: 100px;
    width: 100px;
    height: 50px;
`;
export const Text = styled.p`
    font-size: 1.25em;
`;
export const UserName = styled.h2`
    font-size: 1.25em;
`;
export const Image = styled.img`
    content: url(${(props)=>props.src});
`;
