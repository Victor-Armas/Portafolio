"use client"
import { useEffect } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  opacitySpeed: number;
}

export default function FallingStarsBackground() {
  useEffect(() => {
    const canvas = document.getElementById("falling-stars") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    if (!ctx) return; // Si no se encuentra el contexto, salimos.

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Creamos un arreglo de estrellas con posición, tamaño y opacidad aleatoria
    const stars: Star[] = [];
    const numStars = 100; // Número de estrellas

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1, // Tamaño aleatorio de las estrellas
        opacity: Math.random(), // Opacidad aleatoria
        opacitySpeed: Math.random() * 0.01 + 0.01, // Velocidad de cambio de opacidad
      });
    }

    // Función para animar el fondo
    const animate = () => {
      ctx.clearRect(0, 0, width, height); // Limpiar el canvas

      stars.forEach((star) => {
        // Dibujamos las estrellas
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Cambiar la opacidad para el efecto de brillo
        star.opacity += star.opacitySpeed;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.opacitySpeed = -star.opacitySpeed; // Revertir la dirección de cambio de opacidad
        }
      });

      requestAnimationFrame(animate); // Llamar a la siguiente animación
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="falling-stars" className="fixed inset-0 z-[-1] w-full" />;
}
