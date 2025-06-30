import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>EduNexus University is more than just a place of learning — it is a hub of ideas, innovation, and inspiration. Established with the vision of making quality education accessible to all, we foster a nurturing and inclusive environment where students can grow intellectually and personally. Our programs are designed to equip learners with the knowledge, skills, and confidence needed to succeed in a rapidly changing world.</p>
        <p>Our vision is to create a transformative educational experience for students by integrating modern teaching methodologies, ethical leadership, and practical knowledge. We aim to produce responsible citizens who can lead with integrity and serve society with compassion and creativity.</p>
      </div>
      
    </div>
  )
}

export default About
