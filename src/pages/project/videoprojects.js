import React from 'react';
import Data from '../../data';






const VidProjects = () => {
  return (
    <section id="VidProjects">
       <h3>VIdeo Project</h3>
       <div className='grid-container'>
        <div className='grid-project'>
          <div>
             {Data.map((video) => (
              <div className='card' key={video.id}>
                 <div className='content'>
                   <iframe width="100%" height="200"
                     src={video.videoUrl} title={video.title}
                     frameBorder="3"

                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen>
                   </iframe>
                   <p>{video.title}</p>
                   <p style={{fontSize:'11px'}}>{video.description}</p>
                   <p>{video.Tools}</p>
                   <p>{video.category}</p>
                </div>
              </div>
              
            ))}
          
           </div>
        </div>
        
        
          </div>

          
          

          
      

    </section>
  );
}

export default VidProjects;


