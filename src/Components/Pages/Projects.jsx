// import React from 'react'
import {ProjectLeft} from "./Projects/ProjectLeft"
import {ProjectRight} from "./Projects/ProjectRight"
const Projects = () => {
  return (
    <div className="container mx-auto lg:flex  justify-center gap-10">
      <div className="lg:order-1 order-2"><ProjectLeft /></div>
        <div className="projectleft lg:order-2 order-1">
          <div className="flex justify-center items-center gap-1">
            <img src={"https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"} alt="star svg"/>
            <h1 className="text-white xl:text-[5rem] sm:text-[3.5rem] text-[26px] tracking-wider"> ALL PROJECTS</h1>
            <img src={"https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"} alt="star svg"/>
          </div>
          <ProjectRight />
        </div>
    </div>
  )
}

export default Projects
