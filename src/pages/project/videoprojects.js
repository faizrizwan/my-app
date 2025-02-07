import React from 'react';
import Data from '../../data';
import "./project.css"





const VidProjects = () => {
  return (
    <section id="VidProjects">
       <h3>VIdeo Project</h3>
       <div className='grid-container'>
          <div className='grid-project'>
             {Data.map((video) => (
              <div  key={video.id}>
                 <div >
                   <iframe className='video'
                     src={video.videoUrl} title={video.title}
                     

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
        
        

          
          

          
      

    </section>
  );
}

export default VidProjects;


