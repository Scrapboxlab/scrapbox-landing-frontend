import { useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig } from 'framer-motion'
import { ModalProvider } from './context/ModalContext'
import ContactModal from './components/ui/ContactModal'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import WhatWeBuild from './components/sections/WhatWeBuild'
import Process from './components/sections/Process'
import Showcase from './components/sections/Showcase'
import TeamStrip from './components/sections/TeamStrip'
import CtaFinal from './components/sections/CtaFinal'
import Configurator from './components/configurator/Configurator'

function AppContent() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let id
    function raf(time) {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)

    // Lenis no intercepta anclas por defecto: sin esto el salto es brusco
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor || anchor.getAttribute('href').length < 2) return
      const target = document.querySelector(anchor.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -72 })
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('click', onAnchorClick)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[#0F1426] text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <Process />
        <Showcase />
        <TeamStrip />
        <Configurator />
        <CtaFinal />
      </main>
      <Footer />
      <ContactModal />
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </MotionConfig>
  )
}
