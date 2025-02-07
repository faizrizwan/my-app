import React from "react";
import ProfilePic from "../../assets/profile.png"; // Adjust the path as necessary
import Experience from "../experience";
import Education from "../education";


function About() {
    return (
        <section id="about">
      <p style={{marginBottom:0 ,fontSize:'25px'}} >TENTANG SAYA</p >
            
            <div className="grid-container">
                <div className="grid-project">
                    <div>
                        <img
                            src={ProfilePic}
                            alt="Faiz"
                            className="profil-image"
                        />
                    </div>
                    <div>
                         <div style={{ display: 'flex', justifyContent: 'center'}}>
        
                            <p>
                                Saya seorang profesional yang berdedikasi dalam pengembangan Dunia IT.
                                selama perkuliahan mempelajari cukup banyak tentang basic perkenalan dengan IT,
                                <p>saya juga memiliki pengalaman dalam membuat website sederhana menggunakan HTML, CSS, dan Javascript dan masih terus di kembangkan .</p> 
                                selain itu Saya juga memiliki kemampuan dalam membuat video dokumentasi, video tutorial. dan juga membuat desain grafis, seperti logo, banner, dan poster.

                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 style={{marginBottom:'0px'}}>Pendidikan</h3>
                        <Education/>

                    </div>
                </div>

            </div>
      
        </section>
    );
}
    
export default About;