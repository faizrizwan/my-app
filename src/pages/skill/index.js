import React from 'react';
import { PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo, PiMicrosoftWordLogo } from 'react-icons/pi';
import { SiAdobepremierepro, SiCanva, SiCoreldraw } from 'react-icons/si';



const Skills = () => {
  return (
    
    <div>
      <p style={{marginBottom:0 ,fontSize:'25px'}} >SKILLS</p >
      <div style={{ fontSize: 50, gap: '20px', margin: '25px', justifyContent: 'center', display: 'flex', padding: '20px', borderRadius: '10px',marginTop:'0' }}>
          <SiCoreldraw style={{  color: 'white' }} />
          <SiAdobepremierepro style={{ color:'white'}} />
          <SiCanva style={{color:'white' }} />
          <PiMicrosoftPowerpointLogo style={{ color:'white'}} />
          <PiMicrosoftWordLogo style={{ color:'white'}} />
          <PiMicrosoftExcelLogo style={{ color: 'white' }} />
          
        </div>
     </div>
      
   
   
  );
}

export default Skills;
