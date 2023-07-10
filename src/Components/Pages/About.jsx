// import React from 'react'
import {AboutImg} from "./About/AboutImg"
import {SelfSummary} from "./About/SelfSummary"
const About = () => {
  return (
    <div className="container lg:flex justify-center items-center mx-auto gap-10">
      <AboutImg />
      <SelfSummary />
    </div>
  )
}

export default About
