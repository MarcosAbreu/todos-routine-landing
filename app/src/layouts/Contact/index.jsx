import {    Container, Section, Title, Info, 
            Direct, DirectSection, DirectLabel, 
            Social, SocialLabel, SocialContainer, SocialMedia } from './styles';

import ContactForm from '../../components/ContactForm';
import { Colors } from '../../helpers/themes';

import MailLogo from '../../assets/icons/Mail';
import PhoneLogo from '../../assets/icons/Phone';
import GithubLogo from '../../assets/icons/Github';
import LinkedinLogo from '../../assets/icons/Linkedin';
import TwitterLogo from '../../assets/icons/Twitter';

function Contact(props){
    return(
        <Container ref={props.goTo}>
            <Title>Contact Us</Title>
            <Section>
                <ContactForm/>
                <Info>
                    <Direct>
                        <DirectSection>
                            <MailLogo height='38' width='38' fill={Colors.secondary}/>
                            <DirectLabel>contact@todoroutine.com</DirectLabel>
                        </DirectSection>
                        <DirectSection>
                            <PhoneLogo height='38' width='38' fill={Colors.secondary}/>
                            <DirectLabel>+XX (XX) XXXX.XXXX</DirectLabel>
                        </DirectSection>
                    </Direct>
                    <Social>
                        <SocialLabel>Social Media:</SocialLabel>
                        <SocialContainer>
                            <SocialMedia href='https://github.com'> 
                                <GithubLogo fill={Colors.secondary}/>
                            </SocialMedia>
                            <SocialMedia href='https://www.linkedin.com'> 
                                <LinkedinLogo fill={Colors.secondary} />
                            </SocialMedia>
                            <SocialMedia href='https://twitter.com/'> 
                                <TwitterLogo fill={Colors.secondary}/>
                            </SocialMedia>
                        </SocialContainer>
                    </Social>
                </Info>
            </Section>        
        </Container>
);
}

export default Contact;