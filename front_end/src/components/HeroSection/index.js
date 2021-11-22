import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElement'
import Video from '../../videos/shake_hand.mp4'
import { Button } from '../ButtonElement'
const HeroSection = () => {
     const [hover,setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Tampere Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credit toward your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to ='signup' onMouseOver={onHover} onMouseLeave={onHover} primary ='true' dark='true'>Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection