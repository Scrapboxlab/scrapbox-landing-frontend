import { motion } from 'framer-motion'
import clsx from 'clsx'
import { EASE } from '../ui/FadeIn'

function BrowserFrame({ url, tag, children, className }) {
  return (
    <div className={clsx('rounded-2xl overflow-hidden border border-white/[0.08] bg-[#131929] shadow-2xl shadow-[#0F1426]/25', className)}>
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0F1426]/70">
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <div className="ml-3 flex-1 bg-white/[0.05] rounded h-5 flex items-center px-3">
          <span className="text-[10px] text-white/25 truncate">{url}</span>
        </div>
        {tag && (
          <span className="ml-2 text-[9px] px-2 py-0.5 rounded-full bg-[#2A3582]/30 text-[#7b8fdb] font-medium flex-shrink-0">
            {tag}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}

/* Demo: backoffice administrativo */
function AdminMockup() {
  const bars = [45, 62, 51, 78, 66, 85, 71]
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm font-semibold">Dashboard</span>
        <span className="text-white/30 text-[11px]">Este mes</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Ingresos', v: '$2.4M' },
          { l: 'Pedidos', v: '843' },
          { l: 'Clientes', v: '1.2K' },
        ].map((s) => (
          <div key={s.l} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-2.5">
            <div className="text-white/35 text-[9px]">{s.l}</div>
            <div className="text-white font-semibold text-sm mt-0.5">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
        <span className="text-white/35 text-[10px]">Ventas por día</span>
        <div className="flex items-end gap-1.5 h-14 mt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 h-full flex flex-col items-center justify-end gap-1">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === bars.length - 1 ? '#EB6700' : 'rgba(42,53,130,0.55)',
                }}
              />
              <span className="text-white/20 text-[8px]">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { id: '#4821', co: 'Empresa SA', v: '$14.800', s: 'Enviado' },
          { id: '#4822', co: 'Grupo Norte', v: '$8.200', s: 'Proceso' },
        ].map((o) => (
          <div key={o.id} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-white/25 text-[10px] font-mono">{o.id}</span>
              <span className="text-white/60 text-[11px]">{o.co}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-[11px] font-medium">{o.v}</span>
              <span className={clsx('text-[9px] px-1.5 py-0.5 rounded-full',
                o.s === 'Enviado' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
              )}>
                {o.s}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Demo: panel de analytics */
function AnalyticsMockup() {
  const sources = [
    { name: 'Búsqueda orgánica', pct: 38, color: '#2A3582' },
    { name: 'Directo', pct: 27, color: '#EB6700' },
    { name: 'Redes sociales', pct: 21, color: '#6B7280' },
    { name: 'Referidos', pct: 14, color: '#9CA3AF' },
  ]

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm font-semibold">Analytics</span>
        <span className="text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.05] text-white/35 border border-white/[0.07]">
          Esta semana
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Visitas', v: '24,831', d: '+12%', up: true },
          { l: 'Conversión', v: '3.2%', d: '+0.4%', up: true },
          { l: 'Rebote', v: '42%', d: '-3%', up: false },
        ].map((m) => (
          <div key={m.l} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-2.5">
            <div className="text-white/35 text-[9px]">{m.l}</div>
            <div className="text-white font-semibold text-sm mt-0.5">{m.v}</div>
            <div className={clsx('text-[9px] mt-0.5', m.up ? 'text-emerald-400' : 'text-red-400')}>
              {m.d}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
        <span className="text-white/35 text-[10px] block mb-3">Fuentes de tráfico</span>
        <div className="space-y-2">
          {sources.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-white/50">{s.name}</span>
                <span className="text-white/40 font-medium">{s.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${s.pct}%`, backgroundColor: s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    tag: 'Backoffice',
    url: 'demo.scrapbox.io/panel',
    title: 'Backoffice de operaciones',
    desc: 'Pedidos, clientes y métricas del día en un solo panel, sin planillas paralelas ni datos desactualizados.',
    points: [
      'Pedidos con estados en tiempo real',
      'Métricas de ingresos y ventas del mes',
      'Usuarios con roles y permisos diferenciados',
    ],
    Component: AdminMockup,
  },
  {
    tag: 'Analytics',
    url: 'demo.scrapbox.io/analytics',
    title: 'Panel de analytics',
    desc: 'El tráfico y la conversión de tu producto en un solo lugar, sin saltar entre cinco herramientas.',
    points: [
      'Visitas, conversión y rebote en vivo',
      'Fuentes de tráfico comparadas',
      'Indicadores a medida de tu negocio',
    ],
    Component: AnalyticsMockup,
  },
]

export default function Showcase() {
  return (
    <section id="proyectos" className="bg-white py-28 text-[#0F1426]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-20 max-w-lg"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#EB6700] mb-6">
            Lo que entregamos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Así se ve un proyecto{' '}
            <span className="text-[#9CA3AF]">terminado.</span>
          </h2>
        </motion.div>

        {/* Piezas alternadas */}
        <div className="space-y-24 lg:space-y-28">
          {projects.map(({ tag, url, title, desc, points, Component }, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={title}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: EASE }}
                  className={clsx('lg:col-span-7', reversed && 'lg:order-2')}
                >
                  <BrowserFrame url={url} tag={tag}>
                    <Component />
                  </BrowserFrame>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
                  className={clsx('lg:col-span-5', reversed && 'lg:order-1')}
                >
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{title}</h3>
                  <p className="text-[#485563] text-base leading-relaxed mb-7 max-w-md">
                    {desc}
                  </p>
                  <ul className="space-y-3">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="text-[#485563] text-[15px] leading-snug pl-4 border-l-2 border-[#EB6700]/60"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
