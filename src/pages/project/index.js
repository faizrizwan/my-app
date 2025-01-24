import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2>My Projects</h2>
        <div className='grid-project'> 
            <div className='card' >
            <h2>Project 1</h2>
            <h3>Description of project 1.</h3>
            </div>
            <div className='card'>
            <h2>Project 2</h2>
            <h3>Description of project 2.</h3>
            </div>
            <div className='card'>
            <h2>Project 3</h2>
            <h3>Description of project 3.</h3>
            </div>
        </div>
       
      </div>
    </section>
  );
}

export default Projects;
