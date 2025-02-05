import React from 'react';





const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2>MY PROJECT</h2>

        
        <div className='grid-project'>
          <div className='grid-container'>
            <video style={{display: 'flex' , borderRadius: 10, alignContent:'center'}} width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           <div className='grid-container'>
            <video style={{borderRadius: 10}} width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           <div className='grid-container'>
            <video style={{borderRadius: 10}} width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           <div className='grid-container'>
            <video style={{borderRadius: 10}} width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>


         
          <h2>Vide2</h2>
          <h2>Video</h2>
          <h2>Video</h2>
          <h2>Video</h2>
          <h2>Video</h2>
          <h2>Video</h2>

        </div>
        

      </div>
    </section>
  );
}

export default Projects;
