import {    Container, FooterBody, Section, Title, List, Item, 
            Contacts, Text, SocialContainer, SocialMedia,
            CopyrightSection, Copyright } from './styles';

import { Colors } from '../../helpers/themes';

import GithubLogo from '../../assets/icons/Github';
import LinkedinLogo from '../../assets/icons/Linkedin';
import TwitterLogo from '../../assets/icons/Twitter';
import PhoneLogo from '../../assets/icons/Phone';
import MailLogo from '../../assets/icons/Mail';

import Link from '../../components/Link';

function Footer({toView}){
    return (
        <Container>
            <FooterBody>
                <Section>
                    <Title>Pages</Title>
                    <List>
                        <Item onClick={()=>toView('home')}>
                            <Link title='Home'/>
                        </Item>
                        <Item onClick={()=>toView('product')}>
                            <Link title='Product'/>
                        </Item>
                        <Item onClick={()=>toView('preview')}>
                            <Link title='Preview' />
                        </Item>
                        <Item onClick={()=>toView('pricing')}>
                            <Link title='Pricing'/>
                        </Item>
                        <Item onClick={()=>toView('contact')}>
                            <Link title='Contact'/>
                        </Item>
                    </List>
                </Section>
                <Section>
                    <Title>Contact</Title>
                    <Contacts>
                        <Item>
                            <PhoneLogo height='38' width='38' fill={Colors.textPrimary}/>
                            <Text>+XX (XX) XXXX.XXXX</Text>
                        </Item>
                        <Item>
                            <MailLogo height='38' width='38' fill={Colors.textPrimary}/>
                            <Text>contact@todoroutine.com</Text>
                        </Item>
                    </Contacts>
                </Section>
                <Section>
                    <Title>Social Media</Title>
                    <SocialContainer>
                        <SocialMedia href='https://github.com'> 
                            <GithubLogo fill={Colors.textPrimary}/>
                        </SocialMedia>
                        <SocialMedia href='https://www.linkedin.com'> 
                            <LinkedinLogo 
                                fill={Colors.textPrimary} 
                                backgroundColor={Colors.secondary}/>
                        </SocialMedia>
                        <SocialMedia href='https://twitter.com/'> 
                            <TwitterLogo fill={Colors.textPrimary}/>
                        </SocialMedia>
                    </SocialContainer>
                </Section>
            </FooterBody>
            <CopyrightSection>
                <Copyright>
                    Copyright ©2024 ToDo Routine. All rights reserved.
                </Copyright>
            </CopyrightSection>
        </Container>
    )
};

export default Footer;