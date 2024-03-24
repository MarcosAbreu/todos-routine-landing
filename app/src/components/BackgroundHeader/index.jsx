import { Container } from './styles';

function BackgroundHeader(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    return(
        <Container width={width} height={height}/>
    );
}

export default BackgroundHeader;