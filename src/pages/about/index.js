import React from 'react';
import profilePic from '../../assets/profile.png'; // Adjust the path as necessary
import './style.css';
import Projects from '../project';
import Header from '../header';
import Contact from '../contact';

const About = ()=>{
  return (
    <div className='background'>
      <Header />
      <div className='grid-container'>
        <h1>hi,I'm Faiz
           <img
        src={profilePic}
        alt='Profile'
        className='profil-image' />
      </h1>
      <h2 className='text'>
         Hi, I’m John Doe, a passionate web developer who loves building modern and responsive web applications.
        I have experience with technologies like React, JavaScript, HTML, CSS, and Node.js. I'm always eager to learn new skills and improve my coding abilities.
      </h2>
      </div>
      <Projects />
      {/* <Contact/> */}
    </div>
  )
}
export default About;

