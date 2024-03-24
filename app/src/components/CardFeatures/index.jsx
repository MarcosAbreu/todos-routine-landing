import { Container, Title, Description, Image } from './styles';

function CardFeatures(props){
    return(
        <Container>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>   
        </Container>
);
}

export default CardFeatures;