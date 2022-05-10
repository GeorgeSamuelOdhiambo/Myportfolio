import React from 'react'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'

const About = () => {
  return (
    <div className="container-xxl p-5 text-center justify-content-center align-items-center"
    style={{
      "background-color": "#9d789b",
      "marginTop": "58PX"
    }}>
      <Aboutme></Aboutme>
      <Skills/>
    </div>
  )
}

export default About