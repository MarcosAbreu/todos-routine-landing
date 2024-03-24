import styled from 'styled-components';
import {Colors} from '../../helpers/themes'

export const Form = styled.form`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const Button = styled.button`
    width: 180px;
    height: 52px;
    border-radius: 20px;
    border: none;
    background-color: ${Colors.secondary};
    color: ${Colors.textPrimary};
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
`;