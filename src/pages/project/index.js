import React from "react";  
import ProjectsData from "../../data";
import './style.css';




function Projects() {
return (
    <div className="container">
        <div className="form">
        <h2>my project hehe</h2>
     
        {ProjectsData.map((project, index) => (
            <div key={index}>
              <h3>{project.id}</h3>
                <p>{project.description}</p>
                
            </div>
        ))}
     </div>
     </div>
);
}
export default Projects;