import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Service from '../components/Services'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)  
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection></HeroSection>
            <InfoSection {...homeObjOne}></InfoSection>
            <InfoSection {...homeObjTwo}></InfoSection>
            <Service></Service>
            <InfoSection {...homeObjThree}></InfoSection>
            <Footer></Footer>
        </>
    )
}

export default Home
