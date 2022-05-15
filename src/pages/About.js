import React from 'react'
import Aboutme from '../components/Aboutme/Aboutme'
import Skills from '../components/Skills'

const About = () => {
  return (
    <div className="container-xxl pt-5 pb-4 text-center justify-content-center align-items-center"
    style={{
      "background-color": "#9d789b",
    }}>
    <div className='p-4' style={{
      "background-color": "#9d789b",
    }} 
    ></div>
      <Aboutme></Aboutme>
      <Skills/>
    </div>
  )
}

export default About