"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Image from "next/image";

export default function Proyects() {
  const projects = [
    {
      id: 1,
      title: "Sistema de Recibo",
      images: ["/projects/crud/crud_1.png", "/projects/crud/crud_2.png", "/projects/crud/crud_3.png", "/projects/crud/crud_4.png", "/projects/crud/crud_5.png", "/projects/crud/crud_6.png"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "UpTask",
      images: ["/projects/uptask/uptask_1.png", "/projects/uptask/uptask_2.png"],
      demoLink: "",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Planificador de Gastos",
      images: ["/projects/gastos/gastos_1.png", "/projects/gastos/gastos_2.png", "/projects/gastos/gastos_3.png", "/projects/gastos/gastos_4.png", "/projects/gastos/gastos_5.png"],
      demoLink: "https://relaxed-macaron-ef2f35.netlify.app/",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Cocktail",
      images: ["/projects/cocktail/cocktail_1.png", "/projects/cocktail/cocktail_2.png", "/projects/cocktail/cocktail_3.png", "/projects/cocktail/cocktail_4.png"],
      demoLink: "https://silly-madeleine-712a07.netlify.app/",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Cotizador de Criptomonedas",
      images: ["/projects/cripto/cripto_1.png", "/projects/cripto/cripto_2.png", "/projects/cripto/cripto_3.png"],
      demoLink: "https://rainbow-puppy-76babe.netlify.app/",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Buscador de Clima",
      images: ["/projects/clima/clima_1.png", "/projects/clima/clima_2.png", "/projects/clima/clima_3.png"],
      demoLink: "https://serene-arithmetic-d840cd.netlify.app/",
      codeLink: "#",
    },
    {
      id: 7,
      title: "Calculadora de Calorias",
      images: ["/projects/calorias/calorias_1.png", "/projects/calorias/calorias_2.png", "/projects/calorias/calorias_3.png"],
      demoLink: "https://gilded-haupia-11bc3e.netlify.app/",
      codeLink: "#",
    },
    {
      id: 8,
      title: "Propinas y Consumo",
      images: ["/projects/propina/propina_1.png", "/projects/propina/propina_2.png", "/projects/propina/propina_3.png"],
      demoLink: "https://melodious-heliotrope-6433b9.netlify.app/",
      codeLink: "#",
    },
    {
      id: 9,
      title: "Seguimiento de Pacientes y Veterinaria",
      images: ["/projects/paciente/paciente_1.png", "/projects/paciente/paciente_2.png", "/projects/paciente/paciente_3.png"],
      demoLink: "https://deluxe-nougat-406836.netlify.app/",
      codeLink: "#",
    },
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section id="projects" className="mt-32">
      <h4 className="text-center font-bold text-cyan-400 text-5xl mb-12">
        Mis proyectos
      </h4>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#3c3d41] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out px-6 pt-6"
            >
              <div className="w-full h-48">
                <Slider {...sliderSettings}>
                  {project.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      width={800} // Ancho base de la imagen original
                      height={400} // Altura base de la imagen original
                      className="w-full h-48 object-cover"
                    />
                  ))}
                </Slider>
              </div>
              <div className="p-6">
                <h5 className="text-2xl font-bold text-white text-center my-5">
                  {project.title}
                </h5>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-cyan-500 hover:bg-cyan-600 font-bold py-2 px-4 rounded-lg transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-900 font-bold py-2 px-4 rounded-lg transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`mx-2 px-4 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Anterior
          </button>
          <span className="text-white font-bold">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`mx-2 px-4 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}
