import styled from 'styled-components';
import { Colors } from '../../helpers/themes';
import bannerImage from '../../assets/banner-image.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Title = styled.h3`
    font-size: 2.25em;
    text-align: center;
    font-weight: 600;
    color: ${Colors.secondary};
`;
export const Description = styled.p`
    font-size: 1.5em;
    text-align: center;
    font-weight: 500;
    margin-top: 40px;
    width: 500px;
    color: ${Colors.secondary};
`;
export const Image = styled.img`
content: url(${bannerImage});
    width: 1015px;
    height: 571px;
`;