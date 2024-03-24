import { Container, Section, Title, Description } from './styles'

import CardPricing from '../../components/CardPricing';
import { forwardRef } from 'react';

function Pricing(props,ref){

    return(
        <Container ref={props.goTo}>
            <Section>
                <Title>Pricing</Title>
                <Description>Do you like it? Now check our pricing options and all the features for each option.</Description>
            </Section>
            <Section>
                <CardPricing
                    title= 'Free'
                    description= 'Single User'
                    value='0'
                    unit='$'
                    period='Per Month'
                    features={['No Teams','3 Workspaces','3 Projects per Workspace']}
                />
                <CardPricing
                    title= 'Groups'
                    description= '30 Multiple Users'
                    value='100'
                    unit='$'
                    period='Per Month'
                    features={['Unlimited Teams','10 Workspaces','10 Projects per Workspace']}
                />
                <CardPricing
                    title= 'Enterprise'
                    description= 'Unlimited Users'
                    value='900'
                    unit='$'
                    period='Per Month'
                    features={['Unlimited Teams','Unlimited Workspaces','Unlimited Projects']}
                />
            </Section>
        </Container>
    )
}

export default forwardRef(Pricing);