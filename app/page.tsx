import Abouth from "@/components/Abouth";
import Contact from "@/components/Contact";
import FallingStarsBackground from "@/components/FallingStarsBackground";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
    {/* Fondo de estrellas cayendo */}
    <FallingStarsBackground />

     {/* social*/}
     <SocialSidebar />


      <header className="text-neutral-400 font-bold uppercase flex flex-row justify-center gap-16 py-7 text-lg bg-zinc-800">
        <a className="hover:text-neutral-100 transition-all" href="#about">Sobre Mí</a>
        <a className="hover:text-neutral-100 transition-all" href="#projects">Mis Proyectos</a>
        <a className="hover:text-neutral-100 transition-all" href="#contact">Contacto</a>
      </header>

      <main className=" mx-auto">

        {/* PARTE PRINCIPAL */}
        <section className="flex justify-center items-center h-screen">
          <img src="/images/Foto.png" alt="Foto Victor" />
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-white text-4xl font-semibold">
              Yo soy <span className="text-cyan-400 font-extrabold text-7xl">Victor Armas</span>
            </h1>
            <h2 className="text-2xl font-semibold text-white">Fullstack Developer</h2>
            <p className="text-white text-xl">Creando aplicaciones web modernas</p>
            <div className="flex justify-center md:justify-start">
              <a
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-cyan-300 focus:outline-none"
                href="#"
              >
                Hablemos 🚀
              </a>
            </div>
          </div>
        </section>
        
        {/* SECCION SOBRE MI */}
        <Abouth/>

        {/* SKILLS */}
        <Skills/>

        {/* PROYECTOS */}
        <Proyects/> 

        {/* Contacto */}
        <Contact/> 
      </main>
    </>
  );
}
