import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a better world</h1>
        <p>At EduNexus University, we believe in empowering minds and shaping futures. As a premier institution of higher education, we are committed to academic excellence, innovation, and holistic development. </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=''/></button>
      </div>
      
    </div>
  )
}

export default Hero
