import { useEffect, useRef } from 'react'

export default function StarBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let animationId
        let stars = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()

        const createStars = () => {
            stars = []
            for (let i = 0; i < 120; i++) {
                const isComet = Math.random() < 0.03
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.3,
                    opacity: Math.random(),
                    opacityDir: Math.random() > 0.5 ? 1 : -1,
                    opacitySpeed: Math.random() * 0.008 + 0.003,
                    isComet,
                    speedX: isComet ? Math.random() * 4 + 2 : 0,
                    speedY: isComet ? Math.random() * 2 + 0.5 : 0,
                    tailLength: isComet ? Math.random() * 60 + 30 : 0,
                    hue: Math.random() > 0.7 ? 188 : 0, // some cyan tinted
                })
            }
        }

        createStars()

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            stars.forEach(star => {
                if (star.isComet) {
                    const grad = ctx.createLinearGradient(
                        star.x - star.speedX * star.tailLength * 0.5,
                        star.y - star.speedY * star.tailLength * 0.5,
                        star.x, star.y
                    )
                    grad.addColorStop(0, 'rgba(0,229,255,0)')
                    grad.addColorStop(1, `rgba(0,229,255,${star.opacity * 0.8})`)

                    ctx.beginPath()
                    ctx.moveTo(star.x - star.speedX * star.tailLength * 0.5, star.y - star.speedY * star.tailLength * 0.5)
                    ctx.lineTo(star.x, star.y)
                    ctx.strokeStyle = grad
                    ctx.lineWidth = 1.5
                    ctx.stroke()

                    // Head glow
                    ctx.beginPath()
                    ctx.arc(star.x, star.y, 2, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(0, 229, 255, ${star.opacity})`
                    ctx.fill()

                    star.x += star.speedX
                    star.y += star.speedY

                    if (star.x > canvas.width + 100 || star.y > canvas.height + 100) {
                        star.x = Math.random() * canvas.width * 0.5
                        star.y = Math.random() * canvas.height * 0.5
                        star.opacity = 0
                    }
                } else {
                    const isCyan = star.hue === 188
                    ctx.beginPath()
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                    ctx.fillStyle = isCyan
                        ? `rgba(0, 229, 255, ${star.opacity * 0.8})`
                        : `rgba(200, 200, 255, ${star.opacity * 0.7})`
                    ctx.fill()

                    star.opacity += star.opacityDir * star.opacitySpeed
                    if (star.opacity >= 1) { star.opacity = 1; star.opacityDir = -1 }
                    if (star.opacity <= 0) { star.opacity = 0; star.opacityDir = 1 }
                }
            })

            animationId = requestAnimationFrame(draw)
        }

        draw()

        window.addEventListener('resize', () => { resize(); createStars() })

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
            }}
        />
    )
}