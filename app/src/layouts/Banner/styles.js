import styled from 'styled-components';
import { Colors } from '../../helpers/themes';
import bannerImage from '../../assets/banner-image.png'

export const Container = styled.div`
    width: 100%;
    height: calc( 100vh - 90px);
    display: flex;
    justify-content: center;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SubSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;
`;

export const Image = styled.img`
    content: url(${bannerImage});
    width: 1015px;
    height: 571px;
    
`;
export const Text = styled.h2`
    color: ${Colors.textPrimary};
    margin: 10px 0;
    font-size: 2.3em;
    text-align: center;
    font-weight: 700;
    font-style: bold;
    letter-spacing: 4px;
`;
