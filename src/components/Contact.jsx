import styles from '../styles/Contact.module.css'

const links = [
    {
        name: 'GitHub',
        url: 'https://github.com/Victor-Armas',
        icon: '/logos/gitHub.jpg',
        label: '@Victor-Armas',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/victorarmas961004',
        icon: '/logos/linkedin.webp',
        label: 'victorarmas961004',
    },
    {
        name: 'Email',
        url: 'mailto:victor.961004@outlook.com',
        icon: '/logos/email.svg',
        label: 'victor.961004@outlook.com',
    },
    {
        name: 'Whatsapp',
        url: 'https://wa.me/528135285338',
        icon: '/logos/whatsapp.webp',
        label: '81-3528-5338',
    },
]

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.labelWrap}>
                    <span className={styles.label}>Contacto</span>
                    <div className={styles.labelLine} />
                </div>

                <div className={styles.grid}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.heading}>
                            ¿Tienes un proyecto en mente?
                            <span className={styles.accent}> Hablemos.</span>
                        </h2>
                        <p className={styles.body}>
                            Estoy disponible para proyectos freelance, colaboraciones y oportunidades
                            de trabajo. No dudes en contactarme — siempre es bueno conectar con
                            personas apasionadas por lo digital.
                        </p>
                        <a href="mailto:victor.961004@outlook.com" className={styles.emailBtn}>
                            Enviar un mensaje
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className={styles.linksBlock}>
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <div className={styles.linkIcon}>
                                    <img src={link.icon} alt={link.name} />
                                </div>
                                <div className={styles.linkInfo}>
                                    <span className={styles.linkName}>{link.name}</span>
                                    <span className={styles.linkLabel}>{link.label}</span>
                                </div>
                                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerInner}>
                    <span className={styles.footerLogo}>VA<span>.</span></span>
                    <p className={styles.footerText}>
                        Diseñado y desarrollado por <strong>Victor Jesús Garzón Armas</strong>
                    </p>
                    <p className={styles.footerSub}>Thanks for scrolling ✦</p>
                </div>
            </footer>
        </section>
    )
}