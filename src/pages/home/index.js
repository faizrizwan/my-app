import React from 'react';
import './style.css';
import { Button} from 'react-bootstrap';



const Home = () => {
  const handleDownload = () => {
    const pdfPath = "/CV.pdf"; // Path inside the public folder
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Cv Rizwan Faiz.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // console.log(link)
  };
  return (
    <div className='grid-container'>
      <h1>Hey, I'M RIZWAN FAIZ</h1>
      <p>Saya Seorang Profesonal yang berdedikasi tentang perkembangan di Dunia IT</p>
      
      <div style={{ display: 'flex', justifyContent: 'center',marginTop:'20px' , marginBottom:'60px' }}> 
          <Button onClick={handleDownload} style={{ padding: '10px', }}>Download CV</Button>
         </div>
    </div>
   
     
  )
}
export default Home;


