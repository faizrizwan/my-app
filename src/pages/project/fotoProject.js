
import React from "react";

  const image = [
    { src: "/001.PNG", alt: "image1", description:"ini adalah deskripsi gambar nya" },
    { src: "/002.PNG", alt: "image2" },
    { src: "/003.PNG", alt: "image3" },
     { src: "/004.PNG", alt: "image4"},
    { src: "/005.PNG", alt: "image5" },

    
];
  

const FotoProject = () => {
   return (
    <section id="FotoProject">
       <h3>Deain Project</h3>
       <div className='grid-container'>
         <div className='grid-project'>
         
             {image.map((image, index) => (
            <img key={index} src={image.src}
                 alt={image.alt}
                 description={image.description}
                 className="image" />
             ))}
           
          
         
          
        </div>
        
        
          </div>

          
          

          
      

    </section>
  );
  
}
 

export default FotoProject;