import About from './components/About'
import Achievements from './components/Achievements'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import SocialMedia from './components/SocialMedia'
import Teaching from './components/Teaching'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Asosiy kontentga o‘tish
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Achievements />
        <Teaching />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
