import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav? '#14279B' : '#3D2C8D')};
    height: 70px;
    justify-content:center;
    font_size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transistion: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: yellow;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    font-weight: bold;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0px;
        right:0px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;      
        color:white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:active{
        border-bottom: 5px solid #FF865E;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    @media screen and (max-width: 768px){
        display:none
    }
`

export const NavBtnLink = styled(LinkR)`
    display:flex;
    float:right;
    border-radius: 50px;
    margin-right:10px;
    align-items: center;
    justify-content: center;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 20px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`