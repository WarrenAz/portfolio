import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "CareYou",
      description:
        "Aplikasi sosial yang menghubungkan kebaikan hati Anda dengan mereka yang membutuhkan di area terpencil dan terkucilkan. Melalui fitur donasi dan fundraise, CareYou mempermudah Anda untuk berbagi kebaikan kepada mereka yang memerlukan bantuan dalam bentuk dana, barang, atau dukungan lainnya.",
      imageUrl: "/images/Projects1.png",
      websiteUrl: "https://github.com/Physeck/CareYou",
    },
    {
      name: "NutriPlan",
      description:
        "NutriPlan adalah aplikasi kesehatan yang menyediakan Nutrisi Analysis untuk memantau gizi harian, Meal Planner untuk rencana makan sehat, dan Dokter Konsultation untuk saran ahli.",
      imageUrl: "/images/Projects2.png",
      websiteUrl: "https://github.com/Ethelind112/NutriPlan",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.name}</h3>
            </a>
            <p>{project.description}</p>
            <img
              src={project.imageUrl}
              alt={project.name}
              className="project-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
