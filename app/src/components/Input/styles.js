import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const Container = styled.div`
    position: relative;
    width: 100%;
`;
export const InputText = styled.input`
    width: 100%;
    height: 50px;    
    padding: 15px 20px;
    border-radius: 6px;
    border: 2px solid ${(props)=> (props.borderColor === null) || (props.borderColor === undefined) ? Colors.primary : props.borderColor };
    font-size: 1em;
`;

export const ShowPassword = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;