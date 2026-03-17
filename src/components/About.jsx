import styles from '../styles/About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.labelWrap}>
                    <span className={styles.label}>Sobre Mí</span>
                    <div className={styles.labelLine} />
                </div>

                <div className={styles.grid}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.heading}>
                            Desarrollador apasionado por crear
                            <span className={styles.headingAccent}> experiencias que importan</span>
                        </h2>
                        <p className={styles.body}>
                            ¡Hola! Soy Victor Armas, un desarrollador Fullstack con pasión por transformar
                            ideas en experiencias digitales de alta calidad. Trabajo en el stack completo:
                            desde interfaces de usuario fluidas hasta arquitecturas de backend robustas.
                        </p>
                        <p className={styles.body}>
                            Siempre estoy aprendiendo y explorando nuevas tecnologías. Me motiva resolver
                            problemas complejos y construir productos que marcan la diferencia.
                        </p>
                        <div className={styles.traits}>
                            {['Código Limpio', 'UI/UX First', 'Siempre Aprendiendo', 'Detallista'].map(t => (
                                <span key={t} className={styles.trait}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Frontend</h3>
                            <p className={styles.cardDesc}>
                                Interfaces modernas, responsivas y accesibles con React, Next.js y TypeScript.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Backend</h3>
                            <p className={styles.cardDesc}>
                                APIs RESTful, bases de datos y lógica de negocio con Node.js, Express y MongoDB.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>Fullstack</h3>
                            <p className={styles.cardDesc}>
                                Soluciones end-to-end: desde el diseño hasta el despliegue en producción.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}