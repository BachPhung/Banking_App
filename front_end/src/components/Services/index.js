import React from 'react'
import { ServiceContainer, ServiceH1, ServiceCard, ServiceH2, ServiceIcon, ServiceP, ServiceWrapper } from './ServiceElement'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'
const Service = () => {
    return (
        <ServiceContainer id="services">
            <ServiceH1>Our Services</ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1}/>
                    <ServiceH2>Reduce expenses</ServiceH2>
                    <ServiceP>We help reduce your fees and increase your overall revenue.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2}/>
                    <ServiceH2>Virtual Offices</ServiceH2>
                    <ServiceP>You can access our platform online anywhere in the world.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3}/>
                    <ServiceH2>Premium Benefirs</ServiceH2>
                    <ServiceP>Unlock our special membership card that return 5% cash back.</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Service
