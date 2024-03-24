import {  BorderGap, Container, ListItem, CheckLabel } from './styles';
import { Colors } from '../../helpers/themes';
import CheckIcon from '../../assets/icons/CheckIcon';


function CheckList({checklistVisible, passwordChecker}){
    
    return (
        <Container style={{display: checklistVisible=== true ? 'flex' : 'none'}}>
            <BorderGap/>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.minchars} stroke={Colors.secondary}/>
            <CheckLabel>at least 12 caracteres</CheckLabel>
            </ListItem>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.number} stroke={Colors.secondary}/>
            <CheckLabel>at least one number</CheckLabel>
            </ListItem>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.letter} stroke={Colors.secondary}/>
            <CheckLabel>at least one letter</CheckLabel>
            </ListItem>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.specialchars} stroke={Colors.secondary}/>
            <CheckLabel>at least one special caractere</CheckLabel>
            </ListItem>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.uppercase} stroke={Colors.secondary}/>
            <CheckLabel>at least one uppercase</CheckLabel>
            </ListItem>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.lowercase} stroke={Colors.secondary}/>
            <CheckLabel>at least one lowercase</CheckLabel>
            </ListItem>
            <ListItem>
            <CheckIcon width='30px' height='30px' check={passwordChecker.match} stroke={Colors.secondary}/>
            <CheckLabel>both password as to match</CheckLabel>
            </ListItem>
        </Container>
    )
} 

export default CheckList;