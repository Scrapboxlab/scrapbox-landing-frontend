import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { EASE } from '../ui/FadeIn'
import DashboardMockup from '../ui/DashboardMockup'
import { useModal } from '../../context/ModalContext'

const stats = [
  { number: '72 hs', label: 'primer prototipo' },
  { number: '$0', label: 'hasta que decidas avanzar' },
  { number: '+10', label: 'proyectos entregados' },
]

export default function Hero() {
  const { open } = useModal()
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-[#0F1426]">
      {/* Grilla técnica sutil */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow azul superior */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42,53,130,0.28) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Izquierda: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 mb-8"
            >
              Software factory · Buenos Aires
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tighter mb-6 text-balance"
            >
              Diseñamos tu idea{' '}
              <span className="text-[#EB6700]">antes</span> de que te
              comprometas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-[500px]"
            >
              Prototipo funcional en 72 horas y cotización cerrada, gratis.
              Recién ahí decidís si avanzamos: sistemas de stock, backoffice,
              automatizaciones y plataformas web a medida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" className="group" onClick={open}>
                Pedir prototipo gratis
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#proceso">
                Cómo trabajamos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-8 mt-10 pt-10 border-t border-white/[0.07]"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-white font-semibold text-xl leading-none tabular-nums">{stat.number}</div>
                  <div className="text-white/45 text-xs mt-1.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Derecha: boceto → producción */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.95, delay: 0.35, ease: EASE }}
            className="relative hidden sm:block"
          >
            {/* Marco punteado: el boceto que precede al producto */}
            <div
              aria-hidden="true"
              className="absolute -top-5 -left-5 right-5 bottom-5 rounded-2xl border border-dashed border-white/20 pointer-events-none"
            >
              <span className="absolute -top-2.5 left-5 bg-[#0F1426] px-2 font-mono text-[10px] tracking-widest text-white/40 uppercase">
                v0 · boceto gratis
              </span>
            </div>

            <DashboardMockup />
            <span className="absolute -bottom-2.5 right-5 bg-[#131929] border border-white/[0.08] rounded px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#EB6700]/90 uppercase">
              v1.0 · producción
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
