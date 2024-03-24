import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const Image = styled.img`
    content: url(${(props) => props.src});
    width: 200px;
    height: 200px;
`;
export const Title = styled.h4`
    width: 135px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
`;
export const Description = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1.25em;
    font-weight: 400;
`;