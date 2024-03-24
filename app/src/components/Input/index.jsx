import { useEffect, useState } from 'react';
import HideShow from '../../assets/icons/HideShow';
import { Colors } from '../../helpers/themes';
import { Container, InputText, ShowPassword } from './styles';


function Input(props){

    const [showPassword,setShowPassword] = useState(null);
    const [showHide,setShowHide] = useState(null);

    useEffect(()=>{
        if( props.type === 'password'){
            setShowPassword('password');
            setShowHide('hide');
        }
    },[props.type]);

    const handleHideShow = () => {
        if( showPassword === 'password' ){
            setShowPassword('text');
            setShowHide('show');
        }
        else if( showPassword === 'text' ){
            setShowPassword('password');
            setShowHide('hide');
        }
    }

    return (
        <Container>
            <InputText name={props.name}
                placeholder={props.placeholder} onSelect={props.onSelect} onBlur={props.onBlur}
                type={showPassword}
                value={props.value}
                onChange={props.onChange}
                borderColor={props.borderColor}/>
                {//style={props.borderColor === null ? {} : {borderColor: props.borderColor}}/>
                }
            <ShowPassword style={{display: props.type === 'password' ? 'flex' : 'none' }}>
                <HideShow show={showHide} fill={Colors.secondary} hover={Colors.textSecondary} onClick={handleHideShow}/>
            </ShowPassword>
        </Container>
    );
}

export default Input;