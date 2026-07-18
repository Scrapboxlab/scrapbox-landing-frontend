import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { EASE, staggerContainer, staggerItem } from '../ui/FadeIn'

const offerings = [
  {
    title: 'Sistemas de gestión y stock',
    desc: 'Inventario, movimientos y operaciones con datos en tiempo real.',
    meta: 'stock · ERP',
  },
  {
    title: 'Backoffice y paneles internos',
    desc: 'El panel exacto que tu equipo necesita para operar, con roles y permisos.',
    meta: 'admin · equipos',
  },
  {
    title: 'Landing pages y sitios',
    desc: 'Rápidos, medibles y diseñados para convertir visitas en clientes.',
    meta: 'web · SEO',
  },
  {
    title: 'Automatizaciones e integraciones',
    desc: 'Procesos manuales convertidos en flujos automáticos: pagos, facturación, CRMs.',
    meta: 'APIs · flujos',
  },
  {
    title: 'Dashboards y analytics',
    desc: 'Tus métricas claras y accionables, para decidir con datos y no con intuición.',
    meta: 'BI · datos',
  },
]

const proofPoints = [
  { value: '72 hs', label: 'hasta el primer entregable' },
  { value: '100%', label: 'código propio, sin plantillas' },
  { value: '1:1', label: 'hablás con quien programa' },
]

export default function WhatWeBuild() {
  return (
    <section id="servicios" className="bg-white py-28 text-[#0F1426]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Izquierda: intro fija */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#EB6700] mb-6">
              Qué construimos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-5">
              Software a medida.
              <br />
              <span className="text-[#9CA3AF]">Sin plantillas, sin relleno.</span>
            </h2>
            <p className="text-[#485563] text-base leading-relaxed max-w-md mb-10">
              Cada proyecto arranca de cero sobre tu operación real. Lo que no
              suma para tu negocio, no se construye.
            </p>

            <dl className="border-t border-[#E5E7EB]">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-baseline gap-4 py-3.5 border-b border-[#E5E7EB]"
                >
                  <dt className="font-mono text-sm font-semibold text-[#2A3582] w-16 flex-shrink-0 tabular-nums">
                    {point.value}
                  </dt>
                  <dd className="text-[#485563] text-sm">{point.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Derecha: índice de soluciones */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 border-t border-[#E5E7EB]"
          >
            {offerings.map(({ title, desc, meta }) => (
              <motion.li
                key={title}
                variants={staggerItem}
                className="group border-b border-[#E5E7EB] py-7 grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-2 items-baseline cursor-default"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F1426] group-hover:text-[#2A3582] transition-colors duration-200 flex items-center gap-2">
                    {title}
                    <ArrowUpRight
                      size={18}
                      className="text-[#EB6700] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </h3>
                  <p className="text-[#485563] text-[15px] leading-relaxed mt-2 max-w-lg">
                    {desc}
                  </p>
                </div>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[#6B7280] sm:text-right">
                  {meta}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
