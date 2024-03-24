import styled from 'styled-components';
import backgroundSVG from '../../assets/headerBackground.svg';

export const Container = styled.div`
    width: 100%;
    height: 977.5px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${backgroundSVG});
`;