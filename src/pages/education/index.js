import React from 'react';
import './edu.css'; // Untuk styling

// Data pendidikan
const education = [
  {
    institution: "Institut Teknologi Garut",
    degree: "Teknik Informatika",
    duration: "2017-2022",
    description: "Belajar tentang pengembangan perangkat lunak, algoritma, dan teknologi web. Fokus pada pengembangan aplikasi berbasis web dan aplikasi mobile.",
    logo: "ITG.png", // Ganti dengan path logo universitas
  },
  
];

const Education = () => {
  return (
    <section className="education">
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="institution-logo">
            <img src={edu.logo} alt={edu.institution} />
            <div className="education-details">     
              <p>{edu.institution}</p>
              <p style={{textAlign:'center'}}>{edu.degree}</p>
              <p>{edu.duration}</p>
              <p>{edu.description}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
