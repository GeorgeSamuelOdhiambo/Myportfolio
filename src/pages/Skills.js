import React from 'react'
import Services from '../components/Skills/Services'
import Skillsandsevices from '../components/Skillsandsevices'

const Skills = () => {
  return (
    <div className="container-xxl pt-5 pb-3 text-center justify-content-center align-items-center bg-secondary bg-opacity-75"
    style={{
      "marginTop": "58PX"
    }}>
    <Skillsandsevices/>
    <Services/>
    </div>
    
  )
}

export default Skills