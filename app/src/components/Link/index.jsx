import {  Item } from './styles';

function Link(props){
    return (
        <Item href={props.href} onClick={props.onClick}> {props.title}</Item>
    )
};

export default Link;