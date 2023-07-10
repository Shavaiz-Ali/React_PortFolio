// import React from 'react'
import {AboutImg} from "./About/AboutImg";
import {SelfSummary} from "./About/SelfSummary";
import Experience_Edu  from "./About/Experience_Edu";
import SocialIcons from "../Home/Hero/Hero2/SocialIcons"
import {ContactCard }from "../Home/Hero/Hero2/ContactCard"
import {ServicesOfferCard} from "../Home/Hero/Hero2/ServicesOfferCard"
import Fade from "../Animation/Fade"
const About = () => {
  return (
    
    <Fade duration={500}>
    <div className="container  mx-auto">
      <div className="lg:flex gap-10 justify-center items-center">
        <AboutImg />
        <SelfSummary />
      </div>
      <Experience_Edu />
        <div className="sm:w-auto mx-auto grid sm:grid-cols-12 lg:py-10 py-5 gap-5 ">
            <div className="lg:col-span-5 sm:col-span-12 col-span-auto lg:order-1 order-3"><ServicesOfferCard /></div> 
            <div className="lg:col-span-4 sm:col-span-6 col-span-auto order-2"><ContactCard /></div> 
            <div className="lg:col-span-3 sm:col-span-6 col-span-auto lg:order-3 order-1"><SocialIcons /></div>        
        </div>
    </div>
    </Fade>
  )
}

export default About
