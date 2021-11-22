import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, Img, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './InfoElement'
const InfoSection = (props) => {
    return (
        <>
            <InfoContainer lightBg ={props.lightBg} id={props.id} >
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' primary={props.primary} color={props.dark} smooth={true} exact='true' duration={500}
                                        spy={true} offset={-80}
                                    >{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
