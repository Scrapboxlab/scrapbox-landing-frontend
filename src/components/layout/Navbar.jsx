import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cotizador', href: '#cotizador' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const { open } = useModal()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#0F1426]/85 backdrop-blur-xl border-b border-white/[0.07]'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="select-none flex items-center">
            <img src="/scrapbox_logo.png" alt="Scrapbox" className="h-9 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" className="gap-1.5" onClick={open}>
              Solicitar prototipo gratis
              <ArrowRight size={14} />
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0F1426]/95 backdrop-blur-xl border-b border-white/[0.07] md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white text-base py-2.5 transition-colors border-b border-white/[0.05] last:border-b-0"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4 w-full" onClick={() => { handleLinkClick(); open() }}>
                Solicitar prototipo gratis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
