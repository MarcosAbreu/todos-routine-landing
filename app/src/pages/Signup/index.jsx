import {  Background, Main, Container, Image, Section, Header } from '../Login/styles';

import {  Title, Form, SubSection, Label, InputContainer,
          Text, ButtonContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckList from '../../components/CheckList';

import imageSRC from '../../assets/vertical-banner.png'
import { Colors } from '../../helpers/themes';
import { useEffect, useState } from 'react';
import { hasLetter, hasLowerCase, hasNumber, hasSpecialCharactere, hasUpperCase } from '../../helpers/rules';

function Signup() {

    const [firstName,setFirstName] = useState('');
    const [surname,setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    
    const [checklistVisible,setChecklistVisible] = useState(false);
    
    const [checkRules,setCheckRules] = useState(false);

    const [passwordChecker,setPasswordChecker] = useState({
      uppercase: false,
      lowercase: false,
      letter: false,
      number: false,
      specialchars: false,
      minchars: false,
      match: false
    });

    const handlePasswordValue = event =>{
      setPassword(event.target.value);
    }
    
    const handleConfirmPasswordValue = event =>{
      setConfirmPassword(event.target.value);
    }

    const handleFirstName = event =>{
      setFirstName(event.target.value);
    }

    const handleSurName = event =>{
      setSurname(event.target.value);
    }

    const handleEmail = event =>{
      setEmail(event.target.value);
    }

    useEffect(()=>{
      let cleanUp = false;

      if(!cleanUp){  
          setPasswordChecker( {
            uppercase: hasUpperCase(password),
            lowercase: hasLowerCase(password),
            letter: hasLetter(password),
            number: hasNumber(password),
            specialchars: hasSpecialCharactere(password),
            minchars: (password.length >= 12),
            match: password === confirmPassword
          })
          if( hasUpperCase(password) && hasLowerCase(password) && hasLetter(password) 
            && hasNumber(password) && hasSpecialCharactere(password) && (password.length >= 12) && (password === confirmPassword)){
          setCheckRules(true);
          }
          else{
          setCheckRules(false);
          }
      }
      return ()=> {
        cleanUp = true;
      }
    },[password,confirmPassword]);

    const handleSubmit = () => {

      const user = { 
        firstName: firstName,
        surname: surname,
        email: email,
        password: password
      }

      fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then((response)=> response.json())
          .then(resObj => {
            console.log('Usuario Criado')
        })
          .catch((err)=>console.log(err))
    }

    return (
      <>
      <Background/>
      <Main>
        <Container>
          <Image src={imageSRC}/>
          <Section>
            <Header>
              <Title>Registration</Title>
            </Header>
            <Form>
              <SubSection>
                <Label>Name</Label>
                <InputContainer>
                  <Input type='text' placeholder='First Name' value={firstName} onChange={handleFirstName}/>
                  <Input type='text' placeholder='Surname' value={surname} onChange={handleSurName}/>
                </InputContainer>
              </SubSection>
              <SubSection>
                <Label>Email</Label>
                <InputContainer>
                  <Input type='mail' placeholder='example@domain.com' value={email} onChange={handleEmail}/>
                </InputContainer>
              </SubSection>
              <SubSection>
                <Label>Password</Label>
                <InputContainer>
                  <Input type='password' onSelect={()=>setChecklistVisible(true)} onBlur={()=>setChecklistVisible(false)} borderColor={ checkRules ? Colors.primary : Colors.errorPrimary } value={password} onChange={handlePasswordValue}/>
                </InputContainer>
                <CheckList checklistVisible={checklistVisible} passwordChecker={passwordChecker}/>
              </SubSection>
              <SubSection>
                <Label>Confirm Password</Label>
                <InputContainer>
                  <Input type='password' onSelect={()=>setChecklistVisible(true)} onBlur={()=>setChecklistVisible(false)} borderColor={ checkRules ? Colors.primary : Colors.errorPrimary } value={confirmPassword} onChange={handleConfirmPasswordValue}/>
                </InputContainer>
              </SubSection>
              
            </Form>
            <ButtonContainer>
                <Button 
                  title='SIGN UP'
                  width='180px'
                  height='52px'
                  backgroundColor={Colors.secondary}
                  fontSize='1em'
                  fontWeight='600'
                  border='none'
                  color={Colors.textPrimary}
                  boxShadow='none'
                  hover={Colors.textSecondary}
                  onClick={handleSubmit}/>
                <Text>or</Text>
                <Button
                  title='Sign up with Google'
                  width='180px'
                  height='40px'/>
              </ButtonContainer>
          </Section>
        </Container>
      </Main>
      </>
    );
  }
  
  export default Signup;