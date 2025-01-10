import Image from "next/image";

export default function SocialSidebar() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Victor-Armas",
      icon: "/logos/gitHub.jpg", // Reemplaza con la ruta de tus íconos
    },
    {
      name: "LinkedIn",
      url: "http://linkedin.com/in/victorarmas961004",
      icon: "/logos/linkedin.webp",
    },
    {
      name: "Email",
      url: "mailto:victor.961004@outlook.com",
      icon: "/logos/email.svg",
    },
    {
      name: "81-3528-5338",
      url: "#contact",
      icon: "/logos/telefono.webp",
    },
  ];

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center space-y-5">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={24} // Corresponde a la clase w-6 (6 * 4 = 24 px)
            height={24} // Corresponde a la clase h-6
            className="object-contain" // Añade estilos adicionales si es necesario
          />
        </a>
      ))}
    </div>
  );
}
