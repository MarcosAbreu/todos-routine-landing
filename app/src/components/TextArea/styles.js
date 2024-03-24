import styled from 'styled-components';
import { Colors } from '../../helpers/themes';

export const TextAreaText = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 15px 20px;
    border-radius: 6px;
    border: 2px solid ${Colors.primary};
    line-height: 1.5em;
    resize: none;
    font-size: 1em;
`;