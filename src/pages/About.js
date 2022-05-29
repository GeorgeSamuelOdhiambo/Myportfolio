import React from 'react'
import Aboutme from '../components/Aboutme/Aboutme'
import Resume from '../components/Aboutme/Resume'

const About = () => {
  return (
    <div className="container-xxl pt-5 text-center justify-content-center align-items-center bg-secondary bg-opacity-75">
    <div className='p-3'></div>
      <Aboutme/>
      <Resume/>
    </div>
  )
}

export default About