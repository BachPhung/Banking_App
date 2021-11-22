import styled from "styled-components";

export const ServiceContainer = styled.div`
    height:800px;
    dislay:flex;
    align-items:center;
    justify-content:center;
    padding:17% 0 0 0;
    flex-direction:column;  
    background: #3D2C8D;
    @media screen (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 480px){
        height: 1300px;
    }
    
`

export const ServiceWrapper= styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    justify-content:center;
    grid-gap:16px;
    padding: 0 50px;
    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns:1fr;
        padding: 0 20px;
    }
    
`

export const ServiceCard=styled.div`
    background:#fff;
    display:flex;
    flex-direction: flex-start;
    align-items:center;
    justify-content:flex-start;
    border-radius:10px;
    max-height:320px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServiceIcon=styled.img`
    height: 160px;
    width: 160px;
    margin-bottom:10px;
`

export const ServiceH1=styled.h1`
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size: 2.5rem;
    color:#fff;
    margin-bottom:64px;
    #media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServiceH2=styled.h2`
    font-size: 1rem;
    margin-bottom:10px;
`

export const ServiceP=styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: 530;
`
