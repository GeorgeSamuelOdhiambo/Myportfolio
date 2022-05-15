import React from 'react'
import Services from '../components/Skills/Services'
import Skillsandsevices from '../components/Skillsandsevices'

const Skills = () => {
  return (
    <div className="container-xxl p-5 text-center justify-content-center align-items-center"
    style={{
      "background-color": "#9d789b",
      "marginTop": "58PX"
    }}>
    <Skillsandsevices/>
    <Services/>
    </div>
    
  )
}

export default Skills