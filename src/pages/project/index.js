import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2>MY PROJECT</h2>
        <h2>Video</h2>

        <div className='grid-project'>
          <div className='card' >
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'grey', padding: '10px', borderRadius: '10px' }}>
              <iframe style={{ borderRadius: '10px' }} width="350" height="250" src="https://www.youtube.com/embed/Cebb1HuG3Rg?si=8U6r21O4gHwEARqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
            
          </div>
          
         
        </div>
        

      </div>
    </section>
  );
}

export default Projects;
