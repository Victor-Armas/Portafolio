import Image from "next/image";

export default function Contact() {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Victor-Armas",
            icon: "/logos/gitHub.jpg", // Reemplaza con la ruta de tus íconos
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/tuusuario",
            icon: "/logos/linkedin.webp",
        },
        {
            name: "Email",
            url: "mailto:tuemail@example.com",
            icon: "/logos/email.svg",
        },
        {
            name: "81-3528-5338",
            url: "#contact",
            icon: "/logos/telefono.webp",
        },
    ];

    return (
        <>
            <section id="contact" className="bg-[#3c3d41] text-white py-10 mt-20">
                <div className="mx-auto px-6 max-w-4xl">
                    {/* Encabezado */}
                    <div className="relative mb-12">
                        <h4 className="text-cyan-400 text-4xl font-bold text-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3c3d41] px-4">
                            Contacto
                        </h4>
                        <div className="border-t-4 border-cyan-400 w-full"></div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center hover:text-cyan-400 transition-all"
                            >
                                <div className="w-14 h-14 flex items-center justify-center bg-[#2c2d31] rounded-full mb-2 hover:bg-cyan-400 transition-all">
                                    <Image
                                        src={link.icon}
                                        alt={link.name}
                                        width={32} // Corresponde a la clase w-8 (8 * 4 = 32 px)
                                        height={32} // Corresponde a la clase h-8
                                        className="object-contain" // Preserva el diseño ajustando el contenido
                                    />
                                </div>
                                <span className="text-sm">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mensaje final */}
            <div className="text-center py-10">

                <p className="text-cyan-400 text-2xl uppercase font-semibold px-6">
                    Thanks for scrolling
                </p>

            </div>
        </>
    );
}
