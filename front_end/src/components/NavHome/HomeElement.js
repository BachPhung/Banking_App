import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
background: #3D2C8D;
height: 80px;
display:flex;
justify-content:center;
font_size: 1rem;
position: sticky;
top: 0;
z-index: 10;
font-weight:700;
@media screen and (max-width: 960px) {
    transistion: 0.8s all ease;
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
    margin:15px;
    &:hover{
        border-bottom: 5px solid white;
    }
`

export const NavLinks = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.button`
    height: 40px;
    width:100px;
    display: flex;
    float: right;
    align-items: center;
    border-radius: 50px;
    justify-content:center;
    text-align:center;
    margin:15px;
    cursor:pointer;
`

