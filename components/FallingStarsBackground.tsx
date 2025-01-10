"use client"
import { useEffect } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  opacitySpeed: number;
  isComet?: boolean; // Propiedad para identificar si es un cometa
  cometSpeedX?: number; // Velocidad en el eje X para cometas
  cometSpeedY?: number; // Velocidad en el eje Y para cometas
  cometTailLength?: number; // Longitud de la cola del cometa
}

export default function FallingStarsBackground() {
  useEffect(() => {
    const canvas = document.getElementById("falling-stars") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    if (!ctx) return; // Si no se encuentra el contexto, salimos.

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      return { width, height };
    };

    const { width, height } = updateCanvasSize();

    // Creamos un arreglo de estrellas con posición, tamaño y opacidad aleatoria
    const stars: Star[] = [];
    const numStars = 100; // Número de estrellas

    for (let i = 0; i < numStars; i++) {
      const isComet = Math.random() < 0.05; // 5% de las estrellas serán cometas
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1, // Tamaño aleatorio de las estrellas
        opacity: Math.random(), // Opacidad aleatoria
        opacitySpeed: Math.random() * 0.01 + 0.01, // Velocidad de cambio de opacidad
        isComet, // Marcamos algunas estrellas como cometas
        cometSpeedX: isComet ? Math.random() * 3 + 1 : 0, // Velocidad horizontal de los cometas
        cometSpeedY: isComet ? Math.random() * 2 + 1 : 0, // Velocidad vertical de los cometas
        cometTailLength: isComet ? Math.random() * 20 + 10 : 0, // Longitud de la cola del cometa
      });
    }

    // Función para animar el fondo
    const animate = () => {
      ctx.clearRect(0, 0, width, height); // Limpiar el canvas

      stars.forEach((star) => {
        // Si la estrella es un cometa
        if (star.isComet) {
          // Dibujamos la cola del cometa (si tiene)
          const tailLength = star.cometTailLength || 0;
          if (tailLength > 0) {
            ctx.beginPath();
            ctx.moveTo(star.x - (star.cometSpeedX ?? 0) * tailLength, star.y - (star.cometSpeedY ?? 0) * tailLength);
            ctx.lineTo(star.x, star.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }

          // Actualizamos la posición del cometa
          star.x += star.cometSpeedX ?? 0;
          star.y += star.cometSpeedY ?? 0;

          // Si el cometa sale de la pantalla, lo reiniciamos
          if (star.x > width || star.y > height || star.x < 0 || star.y < 0) {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
          }
        } else {
          // Dibujamos las estrellas normales
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();

          // Cambiar la opacidad para el efecto de brillo
          star.opacity += star.opacitySpeed;
          if (star.opacity <= 0 || star.opacity >= 1) {
            star.opacitySpeed = -star.opacitySpeed; // Revertir la dirección de cambio de opacidad
          }
        }
      });

      requestAnimationFrame(animate); // Llamar a la siguiente animación
    };

    animate();

    const handleResize = () => {
      const { width, height } = updateCanvasSize();
      // Actualizamos las posiciones de las estrellas al cambiar el tamaño
      stars.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="falling-stars" className="fixed inset-0 z-[-1] w-full h-full" />;
}
