import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { href: '#about', label: 'Sobre Mí' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#contact', label: 'Contacto' },
    ]

    return (
        <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoAccent}>VA</span>
                    <span className={styles.logoDot}>.</span>
                </a>

                <nav className={styles.links}>
                    {links.map(l => (
                        <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
                    ))}
                    <a href="#contact" className={styles.cta}>Hablemos</a>
                </nav>

                <button
                    className={styles.burger}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.burgerLine} ${open ? styles.open1 : ''}`} />
                    <span className={`${styles.burgerLine} ${open ? styles.open2 : ''}`} />
                    <span className={`${styles.burgerLine} ${open ? styles.open3 : ''}`} />
                </button>
            </div>

            {open && (
                <nav className={styles.mobileMenu}>
                    {links.map(l => (
                        <a
                            key={l.href}
                            href={l.href}
                            className={styles.mobileLink}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    )
}