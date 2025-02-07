import React from 'react';
import './exp.css'; // Untuk styling, jika diperlukan

// Data pengalaman kerja
const experiences = [
  {
    company: "PT.Inovasi Putra Nusantara",
    position: "Pengembangan Perangkat Lunak",
    duration: "2020",
    description: "Mengembangkan aplikasi web menggunakan React.js dan Node.js, serta berkolaborasi dengan tim untuk membuat solusi teknologi inovatif.",
    logo: "PT.Inovasi.jpg", // Ganti dengan path logo perusahaan
  },
  {
    company: "PT.INdonesia Bakery Pamily",
    position: "Staff Packing",
    duration: "2022-2023",
    description: "Bertanggung jawab menyiapkan dan melakukan pengemasan barang",
    logo: "PT.Aoka.jpg", // Ganti dengan path logo perusahaan
  },
  {
    company: "PT.Panen Nusantara",
    position: "Staff Gudang",
    duration: "2023-2024",
    description: "Bertanggung jawab terhadap stok barang melakukan manajemen gudang dari mulaipersiapan barang hingga melakukan packing",
    logo: "PT.Chicken.png", // Ganti dengan path logo perusahaan
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="company-logo">
              <img src={experience.logo} alt={experience.company} />
            </div>
            <div className="experience-details">
              <h3>{experience.position}</h3>
              <p><strong>{experience.company}</strong></p>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
