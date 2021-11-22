import React, {useState,useEffect} from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from './NavBarElement';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo2.png'
import { animateScroll as scroll } from 'react-scroll';
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=>{
        if(window.scrollY >=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{window.addEventListener('scroll',changeNav)},[])
    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'><img src={Logo} alt="logo_image" height='70px' onClick={toggleHome}></img></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon >
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
