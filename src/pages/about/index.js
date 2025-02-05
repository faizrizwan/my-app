import React from 'react';
import profilePic from '../../assets/profile.png'; // Adjust the path as necessary
import './style.css';
import Header from '../header';



const About = () => {
  const handleDownload = () => {
    const pdfPath = "/logo512.png"; // Path inside the public folder
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "logo512.png"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // console.log(link)
  };
  return (
    <div >
      <Header />
      <div className='grid-container'>
        <h1>hi,I'm Faiz</h1>
        <div className='profile-section'>
          <div style={{justifyContent:'center'}}>
            <img
            src={profilePic}
            alt='Profile'
              className='profil-image' />
          </div>
          <h2 className='text'>
              Saya seorang profesional yang berdedikasi dalam pengembangan perangkat lunak, desain grafis dan pemasaran digital. selama perkuliahan
              mempelajari cukup banyak tentang basic perkenalan dengan IT, Saya memiliki pengetahuan atau kemampuan salah satunya di bidang multimedia.
          </h2>
        </div>
         <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleDownload} style={{ padding: '10px', }}>Download CV</button>
        </div>
      </div>
      

  
  </div>
  )
}
export default About;

