
import StarBackground from './components/Starbackground.jsx'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About.jsx'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}