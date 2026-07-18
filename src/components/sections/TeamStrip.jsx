import { motion } from 'framer-motion'
import { EASE } from '../ui/FadeIn'

const team = [
  {
    initials: 'FM',
    name: 'Felipe Massun',
    role: 'Full stack · Backend & DevOps',
    line: 'Construye sistemas que aguantan presión, desde la API hasta el servidor.',
    accent: '#2A3582',
  },
  {
    initials: 'FR',
    name: 'Felipe Rosarno',
    role: 'Backend · Infraestructura & Soporte',
    line: 'Metódico y analítico: resuelve problemas complejos con tecnología simple.',
    accent: '#EB6700',
  },
]

export default function TeamStrip() {
  return (
    <section id="nosotros" className="bg-[#F7F8FA] border-y border-[#E5E7EB] py-16 text-[#0F1426]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center"
        >
          {/* Izquierda */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#EB6700] mb-4">
              El equipo
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-3">
              Quiénes están del otro lado.
            </h2>
            <p className="text-[#485563] text-[15px] leading-relaxed max-w-sm">
              Sin gerentes de cuenta ni intermediarios: el que te responde es el
              mismo que escribe el código. Ingenieros en sistemas, Buenos Aires.
            </p>
          </div>

          {/* Derecha: personas */}
          <div className="flex flex-col gap-5">
            {team.map(({ initials, name, role, line, accent }) => (
              <div key={name} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm tracking-tight select-none"
                  style={{ background: `${accent}14`, border: `1px solid ${accent}35`, color: accent }}
                >
                  {initials}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-semibold text-[15px]">{name}</span>
                    <span className="font-mono text-[11px] text-[#6B7280] tracking-wide">{role}</span>
                  </div>
                  <p className="text-[#485563] text-sm leading-relaxed mt-1 max-w-md">{line}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
