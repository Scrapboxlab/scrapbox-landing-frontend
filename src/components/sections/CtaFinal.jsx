import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { EASE } from '../ui/FadeIn'
import { useModal } from '../../context/ModalContext'

export default function CtaFinal() {
  const { open } = useModal()
  return (
    <section id="contacto" className="bg-[#2A3582] py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6 text-balance"
        >
          Contanos tu idea. El prototipo corre por nuestra cuenta.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
          className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Reunión de 30 minutos, prototipo funcional en 72 horas y cotización
          cerrada. Si no te convence, no pasa nada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button size="lg" className="group w-full sm:w-auto" onClick={open}>
            Pedir prototipo gratis
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
          <a
            href="mailto:scrapboxgo@gmail.com"
            className="text-white/60 hover:text-white text-sm transition-colors duration-200 underline-offset-4 hover:underline"
          >
            scrapboxgo@gmail.com
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="text-white/40 text-sm mt-8"
        >
          Respondemos en menos de 24 horas.
        </motion.p>
      </div>
    </section>
  )
}
