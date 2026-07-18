import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { EASE } from '../ui/FadeIn'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

const steps = [
  {
    day: 'Día 0',
    title: 'Reunión inicial',
    desc: '30 minutos para entender tu negocio, tu operación y qué necesitás resolver.',
    highlight: false,
  },
  {
    day: 'Día 3',
    title: 'Prototipo funcional',
    desc: 'Te mostramos tu idea funcionando, no un PDF con promesas. Es nuestra forma de cotizar en serio.',
    highlight: true,
  },
  {
    day: 'Día 4',
    title: 'Cotización cerrada',
    desc: 'Precio y alcance por escrito sobre lo que ya viste. Sin sorpresas después.',
    highlight: false,
  },
  {
    day: 'Sem. 1–3',
    title: 'Desarrollo iterativo',
    desc: 'Ciclos cortos con avances visibles cada semana. Vos marcás el rumbo.',
    highlight: false,
  },
  {
    day: 'Entrega',
    title: 'Deploy y soporte',
    desc: 'Lanzamos juntos y quedamos cerca después de la entrega.',
    highlight: false,
  },
]

export default function Process() {
  const { open } = useModal()
  return (
    <section id="proceso" className="bg-[#F7F8FA] py-28 text-[#0F1426]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#EB6700] mb-6">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Primero lo ves.
            <br />
            <span className="text-[#9CA3AF]">Después decidís.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <ol className="relative border-l border-[#E5E7EB] ml-[4.5rem] sm:ml-24">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
              className={clsx('relative pl-8 sm:pl-10', i < steps.length - 1 ? 'pb-12' : '')}
            >
              {/* Marcador temporal a la izquierda de la línea */}
              <span
                className={clsx(
                  'absolute -left-[4.5rem] sm:-left-24 top-0.5 w-14 sm:w-[4.75rem] text-right font-mono text-[11px] tracking-wide tabular-nums',
                  step.highlight ? 'text-[#EB6700] font-semibold' : 'text-[#6B7280]',
                )}
              >
                {step.day}
              </span>

              {/* Punto */}
              <span
                aria-hidden="true"
                className={clsx(
                  'absolute left-0 top-1.5 -translate-x-1/2 rounded-full',
                  step.highlight
                    ? 'w-3 h-3 bg-[#EB6700] ring-4 ring-[#EB6700]/15'
                    : 'w-2 h-2 bg-[#9CA3AF]',
                )}
              />

              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <h3
                  className={clsx(
                    'font-semibold tracking-tight',
                    step.highlight ? 'text-xl sm:text-2xl text-[#0F1426]' : 'text-lg text-[#0F1426]',
                  )}
                >
                  {step.title}
                </h3>
                {step.highlight && (
                  <span className="bg-[#EB6700] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                    Gratis
                  </span>
                )}
              </div>
              <p
                className={clsx(
                  'leading-relaxed max-w-md',
                  step.highlight ? 'text-[#485563] text-base' : 'text-[#6B7280] text-[15px]',
                )}
              >
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>

        {/* Cierre del nudo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="mt-16 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        >
          <p className="text-[#485563] text-base leading-relaxed max-w-sm">
            Si el prototipo no te convence, ahí termina. Sin contrato, sin
            tarjeta, sin compromiso.
          </p>
          <Button className="group flex-shrink-0 w-fit" onClick={open}>
            Empezar con el prototipo
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
