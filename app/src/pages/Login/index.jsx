
import {  Background, Main, Container, Image, Section,
          Header, Intro, Title, Form, SubSection, Label, InputContainer, Link, Text, ButtonSection } from './styles';

import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import imageSRC from '../../assets/vertical-banner.png'
import { Colors } from '../../helpers/themes';

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handlePassword = event =>{
    setPassword(event.target.value);
  }
  const handleEmail = event =>{
    setEmail(event.target.value);
  }

  const google = () => {
    console.log('teste')
    window.open('http://localhost:5000/auth/google','_self')
  }
  
  const localLogin = () =>{
    const user = { 
      email: email,
      password: password
    }
    console.log(JSON.stringify(user));
    alert(JSON.stringify(user));
    fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
      }).then((response)=> response.json())
        .then(resObj => {
          console.log('Usuario Encontrado')
      })
        .catch((err)=>console.log(err))
  }

    return (<>
      <Background/>
      <Main>
        <Container>
          <Image src={imageSRC}/>
          <Section>
            <Header>
              <Intro>Welcome to</Intro>
              <Title>ToDo Routine</Title>
            </Header>
            <Form>
              <SubSection>
                <Label>Email</Label>
                <InputContainer>
                  <Input name='email' type='email'value={email} onChange={handleEmail}/>
                </InputContainer>
              </SubSection>
              <SubSection>
                <Label>Password</Label>
                <InputContainer>
                  <Input type='password'value={password} onChange={handlePassword}/>
                </InputContainer>
              </SubSection>
              <SubSection>
                <Link href="/forgot">Forgot your password?</Link>
                <Button 
                  title='LOGIN'
                  width='180px'
                  height='52px'
                  backgroundColor={Colors.secondary}
                  fontSize='1em'
                  fontWeight='600'
                  border='none'
                  color={Colors.textPrimary}
                  boxShadow='none'
                  hover={Colors.textSecondary}
                  onClick={localLogin}/>
              </SubSection>
            </Form>
            <Text>or</Text>
            <ButtonSection>
              <Button
                title='Sign up with Google'
                width='180px'
                height='40px'
                onClick={google}/>
            </ButtonSection>
            
            <Text>Not a member? Please <Link style={{marginLeft:'4px'}} href="/signup"> click here</Link>.</Text>
          </Section>
        </Container>
      </Main>
      </>
    );
  }
  
  export default Login;