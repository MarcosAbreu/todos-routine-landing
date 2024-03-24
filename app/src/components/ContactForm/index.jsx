import { Form } from './styles';
import Input from '../Input';
import TextArea from '../TextArea';
import { useState } from 'react';
import Button from '../Button';
import { Colors } from '../../helpers/themes';

function ContactForm(){

    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();

        //Email implementation
    }

    const nameEntered = (event) => {
        setName(event.target.value);
    }

    const mailEntered = (event) => {
        setMail(event.target.value);
    }

    const messageEntered = (event) => {
        setMessage(event.target.value);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Your name" type="text" value={name} onChange={e => nameEntered(e)}/>
            <Input placeholder="Your mail" type="mail" value={mail} onChange={e => mailEntered(e)}/>
            <TextArea placeholder="Your message" value={message} onChange={e => messageEntered(e)}/>
            <Button 
                    title='Send'
                    width='180px'
                    height='50px'
                    fontSize='1.25em'
                    fontWeight='700'
                    backgroundColor={Colors.secondary}
                    border='none'
                    color={Colors.textPrimary}
                    hover={Colors.textSecondary}/>
        </Form>
);
}

export default ContactForm;