import { Container, Section, Title, Description } from './styles';
import CardFeatures from '../../components/CardFeatures';

function Features(props){
    return(
        <Container ref={props.goTo}>
            <Section>
                <Title>Features</Title>
                <Description>Designed for multiple projects ToDo's.</Description>
            </Section>
            <Section>
                <CardFeatures 
                    src={require('../../assets/feature-easy.png')} 
                    title='Simple and Easy' 
                    description="Easy to understand and Simple to handle with intuitive layout."/>
                <CardFeatures 
                    src={require('../../assets/feature-overview.png')} 
                    title='Individual Overview' 
                    description="You can see all Today's ToDos for multiple projects in same page."/>
                <CardFeatures 
                    src={require('../../assets/feature-views.png')} 
                    title='Custom Views' 
                    description="Calendar fits your needs with custom views."/>     
            </Section>        
        </Container>
);
}

export default Features;