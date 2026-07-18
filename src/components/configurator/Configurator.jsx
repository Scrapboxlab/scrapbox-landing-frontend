import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import {
  Globe, Star, ShoppingCart, Calendar, Package, Users,
  MessageSquare, MessageCircle, FileText, LayoutDashboard,
  Lock, CreditCard, Receipt, Headphones, Search, Server,
  Palette, Pen, Zap, BarChart3, Check, Info,
} from 'lucide-react'
import { FadeIn, EASE as ease } from '../ui/FadeIn'
import { BASE_PROJECTS, MODULES, EXTRAS, IVA_RATE, formatARS } from '../../data/pricing'
import Summary from './Summary'
import BudgetModal from './BudgetModal'
import DetailModal from './DetailModal'

const ICON_MAP = {
  Globe, Star, ShoppingCart, Calendar, Package, Users,
  MessageSquare, MessageCircle, FileText, LayoutDashboard,
  Lock, CreditCard, Receipt, Headphones, Search, Server,
  Palette, Pen, Zap, BarChart3,
}

// Activa un elemento con rol de botón vía Enter o Espacio
const pressableProps = (onActivate) => ({
  role: 'button',
  tabIndex: 0,
  onKeyDown: (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onActivate()
    }
  },
})

// ─── Sub-components ──────────────────────────────────────────────────────────

function StepSection({ step, title, subtitle, children, done }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div
          className={clsx(
            'w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300',
            done
              ? 'bg-[#EB6700]/20 border border-[#EB6700]/40'
              : 'bg-[#2A3582]/20 border border-[#2A3582]/30',
          )}
        >
          {done ? (
            <Check size={13} className="text-[#EB6700]" />
          ) : (
            <span className="text-[#6B7FD4] text-xs font-bold">{step}</span>
          )}
        </div>
        <div>
          <h3 className="text-white font-semibold text-base leading-none">{title}</h3>
          {subtitle && <p className="text-white/30 text-xs mt-1">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  )
}

function ProjectCard({ project, selected, onSelect, onDetail }) {
  const Icon = ICON_MAP[project.icon] ?? Globe

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.15, ease } }}
      className={clsx(
        'relative w-full text-left p-5 rounded-2xl border transition-colors duration-200 cursor-pointer group',
        selected
          ? 'border-[#EB6700]/55 bg-[#EB6700]/[0.05] shadow-[0_0_32px_rgba(235,103,0,0.09)]'
          : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]',
      )}
      onClick={() => onSelect(project.id)}
      aria-pressed={selected}
      {...pressableProps(() => onSelect(project.id))}
    >

      {/* Selected check */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease }}
            className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#EB6700] flex items-center justify-center"
          >
            <Check size={10} className="text-white" />
          </motion.div>
        )}
      </AnimatePresence>

            {/* Content */}
      <div className="flex flex-col h-full">
        <div
          className={clsx(
            'w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200',
            selected ? 'bg-[#EB6700]/15' : 'bg-white/[0.05] group-hover:bg-white/[0.07]',
          )}
        >
          <Icon size={18} className={selected ? 'text-[#EB6700]' : 'text-white/40'} />
        </div>

        <div className="font-semibold text-white text-sm leading-snug mb-1.5">
          {project.name}
        </div>

        <div className="text-white/50 text-xs leading-relaxed mb-1 line-clamp-2">
          {project.description}
        </div>


        {project.badge && (
          <div className="mt-1 mb-2 inline-flex w-fit px-2 py-1 rounded-md bg-[#EB6700]/15 text-[#EB6700] text-[10px] font-medium border border-[#EB6700]/20">
            {project.badge}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto mb-3">
          <div className={clsx('text-base font-bold', selected ? 'text-[#EB6700]' : 'text-white/55')}>
            {formatARS(project.price)}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onDetail(project)
            }}
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] text-white/35 hover:text-white/70 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-150"
          >
            <Info size={11} />
            Detalle
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function FeatureCard({ item, selected, onToggle, onDetail }) {
  const Icon = ICON_MAP[item.icon] ?? Check

  return (
    <motion.div
      whileHover={{ y: -1, transition: { duration: 0.12, ease } }}
      className={clsx(
        'relative w-full text-left p-4 rounded-xl border transition-colors duration-200 cursor-pointer group',
        selected
          ? 'border-[#EB6700]/50 bg-[#EB6700]/[0.05]'
          : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.13] hover:bg-white/[0.04]',
      )}
      onClick={() => onToggle(item.id)}
      aria-pressed={selected}
      {...pressableProps(() => onToggle(item.id))}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          className={clsx(
            'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200',
            selected ? 'bg-[#EB6700]/15' : 'bg-white/[0.05] group-hover:bg-white/[0.07]',
          )}
        >
          <Icon size={15} className={selected ? 'text-[#EB6700]' : 'text-white/35'} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-white leading-snug">{item.name}</div>
          <div className={clsx('text-xs font-semibold mt-0.5 tabular-nums', selected ? 'text-[#EB6700]' : 'text-white/30')}>
            +{formatARS(item.price)}
          </div>
        </div>

        {/* Detail button */}
        <button
          onClick={(e) => { e.stopPropagation(); onDetail(item) }}
          className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] text-white/30 hover:text-white/65 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-150 flex-shrink-0"
        >
          <Info size={11} />
          Detalle
        </button>

        {/* Checkbox */}
        <div
          className={clsx(
            'w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-200',
            selected ? 'bg-[#EB6700] border-[#EB6700]' : 'border-white/20 group-hover:border-white/35',
          )}
        >
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Check size={10} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Configurator() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedModules, setSelectedModules] = useState(new Set())
  const [selectedExtras, setSelectedExtras] = useState(new Set())
  const [budgetOpen, setBudgetOpen] = useState(false)
  const [detailItem, setDetailItem] = useState(null)

  const toggleModule = (id) =>
    setSelectedModules((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const toggleExtra = (id) =>
    setSelectedExtras((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const base = BASE_PROJECTS.find((p) => p.id === selectedProject) ?? null
  const activeModules = MODULES.filter((m) => selectedModules.has(m.id))
  const activeExtras = EXTRAS.filter((e) => selectedExtras.has(e.id))
  const subtotal =
    (base?.price ?? 0) +
    activeModules.reduce((s, m) => s + m.price, 0) +
    activeExtras.reduce((s, e) => s + e.price, 0)
  const iva = subtotal * IVA_RATE
  const total = subtotal + iva
  const monthly =
    (base?.monthly ?? 0) +
    activeModules.reduce((s, m) => s + (m.monthly ?? 0), 0) +
    activeExtras.reduce((s, e) => s + (e.monthly ?? 0), 0)

  const summaryProps = {
    base,
    activeModules,
    activeExtras,
    subtotal,
    iva,
    total,
    monthly,
    canRequest: !!selectedProject,
    onRequestQuote: () => setBudgetOpen(true),
  }

  return (
    <section id="cotizador" className="relative py-24 lg:py-32 bg-[#0F1426]">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(42,53,130,0.11) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#EB6700] mb-6">
              Cotizador interactivo
            </p>
            <h2 className="text-4xl sm:text-[2.75rem] font-bold text-white tracking-tighter leading-tight mb-4">
              Armá tu solución digital
            </h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
              Seleccioná los módulos que necesitás y mirá el precio en tiempo real. Sin compromiso.
            </p>
          </div>
        </FadeIn>

        {/* Grid: steps + sticky summary */}
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-8 lg:items-start">
          {/* ── Left: Steps ── */}
          <div className="space-y-10">
            {/* Step 1: Proyecto base */}
            <FadeIn delay={0.08}>
              <StepSection
                step="1"
                title="Elegí tu proyecto base"
                subtitle="Obligatorio — seleccioná uno para comenzar"
                done={!!selectedProject}
              >
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                  {BASE_PROJECTS.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      selected={selectedProject === project.id}
                      onSelect={setSelectedProject}
                      onDetail={setDetailItem}
                    />
                  ))}
                </div>
              </StepSection>
            </FadeIn>

            {/* Step 2: Módulos */}
            <FadeIn delay={0.13}>
              <StepSection
                step="2"
                title="Módulos adicionales"
                subtitle={`Opcional — podés elegir varios${selectedModules.size > 0 ? ` (${selectedModules.size} seleccionados)` : ''}`}
                done={selectedModules.size > 0}
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  {MODULES.map((module) => (
                    <FeatureCard
                      key={module.id}
                      item={module}
                      selected={selectedModules.has(module.id)}
                      onToggle={toggleModule}
                      onDetail={setDetailItem}
                    />
                  ))}
                </div>
              </StepSection>
            </FadeIn>

            {/* Step 3: Extras */}
            <FadeIn delay={0.18}>
              <StepSection
                step="3"
                title="Extras premium"
                subtitle={`Opcional — servicios de alto valor${selectedExtras.size > 0 ? ` (${selectedExtras.size} seleccionados)` : ''}`}
                done={selectedExtras.size > 0}
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  {EXTRAS.map((extra) => (
                    <FeatureCard
                      key={extra.id}
                      item={extra}
                      selected={selectedExtras.has(extra.id)}
                      onToggle={toggleExtra}
                      onDetail={setDetailItem}
                    />
                  ))}
                </div>
              </StepSection>
            </FadeIn>

            {/* Mobile summary (below steps) */}
            <div className="lg:hidden mt-2">
              <Summary {...summaryProps} />
            </div>
          </div>

          {/* ── Right: Sticky summary (desktop) ── */}
          <div className="hidden lg:block sticky top-24 self-start">
            <Summary {...summaryProps} />
          </div>
        </div>
      </div>

      <BudgetModal
        isOpen={budgetOpen}
        onClose={() => setBudgetOpen(false)}
        selectedProject={selectedProject}
        selectedModules={selectedModules}
        selectedExtras={selectedExtras}
        total={total}
      />

      <DetailModal
        item={detailItem}
        isOpen={!!detailItem}
        onClose={() => setDetailItem(null)}
      />
    </section>
  )
}
