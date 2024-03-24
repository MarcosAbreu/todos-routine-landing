import { ActionContainer, Container } from './styles';
import Navbar from '../../components/NavBar'
import Button from '../../components/Button';
import { Colors } from '../../helpers/themes';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

function Header(props,ref){
    return (
        <Container ref={props.goTo}>
            <Navbar toView={props.toView}/>
            <ActionContainer>
                <Link to='/login'>
                    <Button 
                        title='Login' 
                        width='150px'
                        height='50px'
                        fontSize='1.25em'
                        fontWeight='700'
                        backgroundColor='rgba(0,0,0,0)'
                        border='none'
                        boxShadow='none'
                        color={Colors.textPrimary}/>
                </Link>
                <Link to='/signup'>
                    <Button 
                        title='Sign In' 
                        width='150px'
                        height='50px'
                        fontSize='1.25em'
                        fontWeight='700'
                        backgroundColor='rgba(0,0,0,0)'
                        color={Colors.textPrimary}
                        boxShadow='none'
                        borderColor={Colors.textPrimary}/>
                </Link>
            </ActionContainer>
        </Container>
    )
};

export default forwardRef(Header);