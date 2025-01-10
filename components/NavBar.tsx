"use client"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-neutral-400 font-bold uppercase flex flex-row justify-between items-center py-7 text-lg bg-zinc-800 px-4">
      {/* Logo o título */}
      <div className="text-white font-extrabold">Mi Portafolio</div>

      {/* Menú en pantallas grandes */}
      <nav className="hidden md:flex flex-row justify-center gap-16">
        <a className="hover:text-neutral-100 transition-all px-4 py-2" href="#about">Sobre Mí</a>
        <a className="hover:text-neutral-100 transition-all px-4 py-2" href="#projects">Mis Proyectos</a>
        <a className="hover:text-neutral-100 transition-all px-4 py-2" href="#contact">Contacto</a>
      </nav>

      {/* Botón de hamburguesa */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-zinc-800 text-center">
          <a
            className="block hover:text-neutral-100 transition-all px-4 py-2"
            href="#about"
          >
            Sobre Mí
          </a>
          <a
            className="block hover:text-neutral-100 transition-all px-4 py-2"
            href="#projects"
          >
            Mis Proyectos
          </a>
          <a
            className="block hover:text-neutral-100 transition-all px-4 py-2"
            href="#contact"
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}
