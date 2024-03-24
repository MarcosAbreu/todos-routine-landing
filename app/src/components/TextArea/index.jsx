import {TextAreaText} from './styles';

function TextArea(props){
    return (
        <TextAreaText placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    );
}

export default TextArea;