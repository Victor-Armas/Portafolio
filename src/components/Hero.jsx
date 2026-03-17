import styles from '../styles/Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Ambient glow blobs */}
            <div className={styles.blob1} />
            <div className={styles.blob2} />

            <div className={styles.content}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    Disponible para proyectos
                </div>

                <h1 className={styles.heading}>
                    <span className={styles.headingLine1}>Hola, soy</span>
                    <span className={styles.name}>Victor<br />Armas</span>
                </h1>

                <p className={styles.role}>
                    <span className={styles.roleText}>Fullstack Developer</span>
                    <span className={styles.roleSeparator}>·</span>
                    <span className={styles.roleSubtext}>Web Moderno</span>
                </p>

                <p className={styles.description}>
                    Transformo ideas en experiencias digitales. Especializado en construir
                    aplicaciones web rápidas, accesibles y visualmente impactantes.
                </p>

                <div className={styles.actions}>
                    <a href="#projects" className={styles.btnPrimary}>
                        Ver Proyectos
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>Contáctame</a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNum}>9+</span>
                        <span className={styles.statLabel}>Proyectos</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>10+</span>
                        <span className={styles.statLabel}>Tecnologías</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>100%</span>
                        <span className={styles.statLabel}>Pasión</span>
                    </div>
                </div>
            </div>

            <div className={styles.imageWrap}>
                <div className={styles.imageFrame}>
                    <img
                        src="/images/Foto.png"
                        alt="Victor Armas"
                        className={styles.photo}
                    />
                    <div className={styles.imageGlow} />
                </div>
                <div className={styles.floatingTag1}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                    </svg>
                    React & Next.js
                </div>
                <div className={styles.floatingTag2}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="12" rx="10" ry="4" /><path d="M22 12c0 2.21-4.48 4-10 4S2 14.21 2 12" />
                        <path d="M2 12c0-2.21 4.48-4 10-4s10 1.79 10 4" />
                    </svg>
                    Node.js & MongoDB
                </div>
            </div>

            <a href="#about" className={styles.scrollHint}>
                <span>Scroll</span>
                <div className={styles.scrollLine}>
                    <div className={styles.scrollDot} />
                </div>
            </a>
        </section>
    )
}