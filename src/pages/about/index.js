import React from 'react';
import profilePic from '../../assets/profile.png'; // Adjust the path as necessary
import './style.css';
import Projects from '../project';
import Header from '../header';
import Contact from '../contact';

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
        <h1>hi,I'm Faiz

        </h1>
        <div className='profile-section'>
          <div><img
            src={profilePic}
            alt='Profile'
            className='profil-image' />
          </div>

          <h2 className='text'>
            Saya adalah seorang profesional yang berdedikasi dalam pengembangan perangkat lunak / desain grafis / pemasaran digital]. Dengan pengalaman dalam [sebutkan pengalaman utama], saya memiliki keterampilan dalam [keahlian utama, misalnya: React.js, Node.js, UI/UX design].
            Saya memiliki semangat belajar tinggi, mampu bekerja secara tim maupun individu, serta selalu mencari solusi inovatif dalam setiap tantangan yang dihadapi. Saya percaya bahwa kerja keras, konsistensi, dan kreativitas adalah kunci keberhasilan dalam dunia profesional.
          </h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleDownload} style={{ padding: '10px', }}>Download CV</button>
        </div>
      </div>
      {/* <Projects /> */}
      s    </div>
  )
}
export default About;

