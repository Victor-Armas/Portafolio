import React from 'react'

const logos = [
    { src: "/logos/css.png", name: "CSS" },
    { src: "/logos/html.png", name: "HTML" },
    { src: "/logos/js.png", name: "JavaScript" },
    { src: "/logos/mongo.png", name: "MongoDB" },
    { src: "/logos/next-js.svg", name: "Next.js" },
    { src: "/logos/node.png", name: "Node.js" },
    { src: "/logos/prisma.png", name: "Prisma" },
    { src: "/logos/React.webp", name: "React" },
    { src: "/logos/tailwind.png", name: "Tailwind CSS" },
    { src: "/logos/typescript.webp", name: "TypeScript" },
];


export default function Skills() {
    return (
        <section className="mt-28">
            <h4 className="text-center font-bold text-cyan-400 text-5xl mb-12">Mis Habilidades</h4>
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Primera fila: 4 elementos */}
                <div className="grid grid-cols-4 gap-8 w-full">
                    {logos.slice(0, 4).map((logo, index) => (
                        <div
                            key={index}
                            className="bg-[#3c3d41] p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 hover:bg-cyan-500 transition-all duration-500"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <p className="text-white text-md font-semibold">{logo.name}</p>
                        </div>
                    ))}
                </div>

                {/* Segunda fila: 3 elementos */}
                <div className="grid grid-cols-3 gap-8 justify-center w-3/4">
                    {logos.slice(4, 7).map((logo, index) => (
                        <div
                            key={index}
                            className="bg-[#3c3d41] p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 hover:bg-cyan-500 transition-all duration-500"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <p className="text-white text-md font-semibold">{logo.name}</p>
                        </div>
                    ))}
                </div>

                {/* Tercera fila: 2 elementos */}
                <div className="grid grid-cols-2 gap-8 justify-center w-2/4">
                    {logos.slice(7, 9).map((logo, index) => (
                        <div
                            key={index}
                            className="bg-[#3c3d41] p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 hover:bg-cyan-500 transition-all duration-500"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <p className="text-white text-md font-semibold">{logo.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>





    )
}
