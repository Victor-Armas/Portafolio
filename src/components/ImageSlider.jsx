import { useState, useEffect } from 'react'

export default function ImageSlider({ images, title }) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (images.length <= 1) return
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <img
            src={images[current]}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500"
        />
    )
}