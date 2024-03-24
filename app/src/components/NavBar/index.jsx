import { List, Item } from './styles';

function Navbar(props){
    return (
        <List>
            <Item onClick={()=>props.toView('home')}>
                Home
            </Item>
            <Item onClick={()=>props.toView('product')}>
                Product
            </Item>
            <Item onClick={()=>props.toView('preview')}>
                Preview
            </Item>
            <Item onClick={()=>props.toView('pricing')}>
                Pricing
            </Item>
            <Item onClick={()=>props.toView('contact')}>
                Contact
            </Item>
        </List>
    )
};

export default Navbar;