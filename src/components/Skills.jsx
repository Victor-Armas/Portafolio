import styles from '../styles/Skills.module.css'

const skills = [
    { src: '/logos/html.png', name: 'HTML5', cat: 'Frontend' },
    { src: '/logos/css.png', name: 'CSS3', cat: 'Frontend' },
    { src: '/logos/js.png', name: 'JavaScript', cat: 'Frontend' },
    { src: '/logos/typescript.webp', name: 'TypeScript', cat: 'Frontend' },
    { src: '/logos/React.webp', name: 'React', cat: 'Frontend' },
    { src: '/logos/next-js.svg', name: 'Next.js', cat: 'Frontend' },
    { src: '/logos/tailwind.png', name: 'Tailwind CSS', cat: 'Frontend' },
    { src: '/logos/node.png', name: 'Node.js', cat: 'Backend' },
    { src: '/logos/mongo.png', name: 'MongoDB', cat: 'Backend' },
    { src: '/logos/prisma.png', name: 'Prisma', cat: 'Backend' },
    { src: '/logos/supabase.webp', name: 'Supabase', cat: 'Backend' },
]

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.labelWrap}>
                    <span className={styles.label}>Mis Habilidades</span>
                    <div className={styles.labelLine} />
                </div>

                <h2 className={styles.heading}>
                    Stack <span className={styles.accent}>Tecnológico</span>
                </h2>

                <div className={styles.grid}>
                    {skills.map((skill, i) => (
                        <div key={skill.name} className={styles.card} style={{ animationDelay: `${i * 0.06}s` }}>
                            <div className={styles.iconWrap}>
                                <img src={skill.src} alt={skill.name} className={styles.icon} />
                            </div>
                            <span className={styles.name}>{skill.name}</span>
                            <span className={styles.cat}>{skill.cat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}