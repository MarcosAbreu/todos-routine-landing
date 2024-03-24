import { Container, Section, Text, Image, SubSection } from './styles';
import Button from '../../components/Button';

import { Colors } from '../../helpers/themes';

function Banner(){

    return (
        <Container>
            <Section>
                <Text>All your ToDo's in one place?</Text>
                <Text>This is ToDo Routine</Text>
                <SubSection>
                    <Button 
                        title='Try For Free' 
                        width='320px'
                        height='60px'
                        fontSize='1.25em'
                        fontWeight='700'
                        backgroundColor={Colors.textPrimary}
                        border='none'
                        color={Colors.secondary}
                        hover={Colors.textSecondary}/>
                </SubSection>
                
            </Section>
            <Section>
                <Image/>
            </Section>       
        </Container>
    );
}

export default Banner;