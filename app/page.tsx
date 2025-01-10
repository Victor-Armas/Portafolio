import Abouth from "@/components/Abouth";
import Contact from "@/components/Contact";
import FallingStarsBackground from "@/components/FallingStarsBackground";
import Navbar from "@/components/NavBar";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";
import SocialSidebar from "@/components/SocialSidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Fondo de estrellas cayendo */}
      <FallingStarsBackground />

      {/* social*/}
      <SocialSidebar />

      <Navbar />

      <main className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* PARTE PRINCIPAL */}
        <section className="flex flex-col md:flex-row justify-center items-center h-screen">
          {/* Imagen para pantallas grandes y medianas */}
          <div className="hidden md:block relative w-96 h-96">
            <Image
              src="/images/Foto.png"  // Imagen para pantallas medianas y grandes
              alt="Foto Victor"
              layout="responsive"
              width={384}
              height={384}
              className="object-contain mb-8 md:mb-0 md:mr-8 pr-10"
            />
          </div>

          {/* Imagen para pantallas pequeñas (móviles) */}
          <div className="md:hidden relative w-36">
            <Image
              src="/images/Foto2.png"  // Imagen para pantallas pequeñas
              alt="Foto Victor"
              layout="responsive"
              width={384}
              height={384}
              className="object-contain mb-8 md:mb-0 md:mr-8"
            />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-white text-4xl font-semibold">
              Yo soy <span className="text-cyan-400 font-extrabold text-7xl">Victor Armas</span>
            </h1>
            <h2 className="text-2xl font-semibold text-white">Fullstack Developer</h2>
            <p className="text-white text-xl">Creando aplicaciones web modernas</p>
            <div className="flex justify-center md:justify-start">
              <a
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-cyan-300 focus:outline-none"
                href="#contact"
              >
                Hablemos 🚀
              </a>
            </div>
          </div>
        </section>


        {/* SECCION SOBRE MI */}
        <Abouth />

        {/* SKILLS */}
        <Skills />

        {/* PROYECTOS */}
        <Proyects />

        {/* Contacto */}
        <Contact />
      </main>
    </>
  );
}
