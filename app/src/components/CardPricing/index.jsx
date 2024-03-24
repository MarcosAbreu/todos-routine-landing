import {    Card, Title, Description, Section, Features,
            Value, Info, Unit, Period, ButtonContainer } from './styles'

import { Colors } from '../../helpers/themes';
import Button from '../Button';

function CardPricing(props){
    return (
        <Card>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Section>
                <Value>{props.value}</Value>
                <Info>
                    <Unit>{props.unit}</Unit>
                    <Period>{props.period}</Period>
                </Info>
            </Section>
            <Features>{props.features[0]}</Features>
            <Features>{props.features[1]}</Features>
            <Features>{props.features[2]}</Features>
            <ButtonContainer>
                <Button 
                    title='Order Now'
                    width='180px'
                    height='50px'
                    fontSize='1.25em'
                    fontWeight='700'
                    backgroundColor={Colors.secondary}
                    border='none'
                    color={Colors.textPrimary}/>
            </ButtonContainer>
        </Card>
    );
}

export default CardPricing;