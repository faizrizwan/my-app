import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div>

        <h2>My Projects</h2>
        <div className='grid-project'>
          <div className='card' >
            <h2>Video Wedding</h2>
            <h3>"Video ini mengabadikan momen indah pada hari pernikahan Merita dan Alfian. Dari prosesi akad nikah yang khidmat, hingga pesta yang meriah, setiap detik penuh dengan kebahagiaan dan cinta. Saksikan perjalanan cinta mereka yang begitu menyentuh hati dalam video pernikahan yang penuh dengan kenangan manis ini."</h3>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>
              <iframe style={{ borderRadius: '10px' }} width="350" height="250" src="https://www.youtube.com/embed/Cebb1HuG3Rg?si=8U6r21O4gHwEARqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </div>
          
         
        </div>

      </div>
    </section>
  );
}

export default Projects;
