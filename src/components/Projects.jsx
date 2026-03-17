import { useState } from 'react'
import styles from '../styles/Projects.module.css'
import ImageSlider from './ImageSlider'

const projects = [
    {
        id: 1,
        title: 'Sistema POS & KDS — Sabores de México',
        description: 'Sistema integral fast-casual con POS (mesa/llevar), pedidos online con seguimiento real, panel KDS para cocina y dashboard administrativo con gestión de roles y productos.',
        images: ['/projects/kds/kds-1.png', '/projects/kds/kds-2.png', '/projects/kds/kds-3.png', '/projects/kds/kds-4.png', '/projects/kds/kds-5.png', '/projects/kds/kds-6.png', '/projects/kds/kds-7.png', '/projects/kds/kds-8.png', '/projects/kds/kds-9.png', '/projects/kds/kds-10.png', '/projects/kds/kds-11.png', '/projects/kds/kds-12.png', '/projects/kds/kds-13.png'],
        demo: 'https://kds-bay-zeta.vercel.app/online',
        code: 'https://github.com/Victor-Armas/KDS',
        tags: ['React', 'Supabase', 'SQL', 'Tailwindcss'],
    },
    {
        id: 2,
        title: 'Sistema de Recibo',
        description: 'Sistema de boarding con gestión de recibos y CRUD completo.',
        images: ['/projects/crud/crud_1.png', '/projects/crud/crud_2.png', '/projects/crud/crud_3.png', '/projects/crud/crud_4.png', '/projects/crud/crud_5.png', '/projects/crud/crud_6.png'],
        demo: '#',
        code: 'https://github.com/Victor-Armas/Boarding-System-Next',
        tags: ['Next.js', 'Prisma', 'MongoDB', 'Tailwindcss'],
    },
    {
        id: 3,
        title: 'UpTask',
        description: 'Plataforma de gestión de tareas y proyectos con backend propio.',
        images: ['/projects/uptask/uptask_1.png', '/projects/uptask/uptask_2.png'],
        demo: '',
        code: 'https://github.com/Victor-Armas/UpTask_BackEnd',
        tags: ['Node.js', 'Express', 'MongoDB', 'Tailwindcss'],
    },
    {
        id: 4,
        title: 'Planificador de Gastos',
        description: 'App para controlar presupuesto y gastos personales con visualización.',
        images: ['/projects/gastos/gastos_1.png', '/projects/gastos/gastos_2.png', '/projects/gastos/gastos_3.png', '/projects/gastos/gastos_4.png', '/projects/gastos/gastos_5.png'],
        demo: 'https://relaxed-macaron-ef2f35.netlify.app/',
        code: '#',
        tags: ['React', 'TypeScript', 'Tailwindcss'],
    },
    {
        id: 5,
        title: 'Cocktail App',
        description: 'Buscador de cócteles con recetas detalladas via API externa.',
        images: ['/projects/cocktail/cocktail_1.png', '/projects/cocktail/cocktail_2.png', '/projects/cocktail/cocktail_3.png', '/projects/cocktail/cocktail_4.png'],
        demo: 'https://silly-madeleine-712a07.netlify.app/',
        code: '#',
        tags: ['React', 'API REST', 'Tailwindcss'],
    },
    {
        id: 6,
        title: 'Cotizador de Criptomonedas',
        description: 'Cotizador en tiempo real de precios de criptomonedas.',
        images: ['/projects/cripto/cripto_1.png', '/projects/cripto/cripto_2.png', '/projects/cripto/cripto_3.png'],
        demo: 'https://rainbow-puppy-76babe.netlify.app/',
        code: '#',
        tags: ['React', 'API', 'Tailwindcss'],
    },
    {
        id: 7,
        title: 'Buscador de Clima',
        description: 'Consulta el clima actual de cualquier ciudad del mundo.',
        images: ['/projects/clima/clima_1.png', '/projects/clima/clima_2.png', '/projects/clima/clima_3.png'],
        demo: 'https://serene-arithmetic-d840cd.netlify.app/',
        code: '#',
        tags: ['React', 'WeatherAPI', 'Tailwindcss'],
    },
    {
        id: 8,
        title: 'Calculadora de Calorías',
        description: 'Registra actividades y alimentos para controlar calorías.',
        images: ['/projects/calorias/calorias_1.png', '/projects/calorias/calorias_2.png', '/projects/calorias/calorias_3.png'],
        demo: 'https://gilded-haupia-11bc3e.netlify.app/',
        code: '#',
        tags: ['React', 'Context API', 'Tailwindcss'],
    },
    {
        id: 9,
        title: 'Propinas y Consumo',
        description: 'Calculadora de propinas para restaurantes con desglose por consumo.',
        images: ['/projects/propina/propina_1.png', '/projects/propina/propina_2.png', '/projects/propina/propina_3.png'],
        demo: 'https://melodious-heliotrope-6433b9.netlify.app/',
        code: '#',
        tags: ['React', 'Tailwindcss'],
    },
    {
        id: 10,
        title: 'Veterinaria & Pacientes',
        description: 'Seguimiento de citas y pacientes para clínica veterinaria.',
        images: ['/projects/paciente/paciente_1.png', '/projects/paciente/paciente_2.png', '/projects/paciente/paciente_3.png'],
        demo: 'https://deluxe-nougat-406836.netlify.app/',
        code: '#',
        tags: ['React', 'LocalStorage', 'Tailwindcss'],
    },
]

const PER_PAGE = 6

export default function Projects() {
    const [page, setPage] = useState(1)
    const total = Math.ceil(projects.length / PER_PAGE)
    const current = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE)

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.labelWrap}>
                    <div className={styles.labelLine} />
                    <span className={styles.label}>Mis Proyectos</span>
                    <div className={styles.labelLine} />
                </div>

                <h2 className={styles.heading}>
                    Lo que he <span className={styles.accent}>construido</span>
                </h2>

                <div className={styles.grid}>
                    {current.map((p, i) => (
                        <article key={p.id} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className={styles.imgWrap}>
                                <ImageSlider images={p.images} title={p.title} />
                                <div className={styles.imgOverlay}>
                                    <div className={styles.overlayBtns}>
                                        {p.demo && p.demo !== '#' && (
                                            <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                        {p.code && p.code !== '#' && (
                                            <a href={p.code} target="_blank" rel="noopener noreferrer" className={`${styles.overlayBtn} ${styles.overlayBtnGhost}`}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.body}>
                                <h3 className={styles.title}>{p.title}</h3>
                                <p className={styles.desc}>{p.description}</p>
                                <div className={styles.tags}>
                                    {p.tags.map(t => (
                                        <span key={t} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <button
                        onClick={() => setPage(prev => Math.max(1, prev - 1))}
                        disabled={page === 1}
                        className={styles.pageBtn}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Anterior
                    </button>

                    <div className={styles.pageDots}>
                        {Array.from({ length: total }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`${styles.pageDot} ${page === i + 1 ? styles.pageDotActive : ''}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setPage(prev => Math.min(total, prev + 1))}
                        disabled={page === total}
                        className={styles.pageBtn}
                    >
                        Siguiente
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}