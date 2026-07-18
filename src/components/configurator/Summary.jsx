import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, RefreshCw } from 'lucide-react'
import { Button } from '../ui/Button'
import { formatARS, CONSULTING_THRESHOLD } from '../../data/pricing'
import { EASE as ease } from '../ui/FadeIn'

export default function Summary({ base, activeModules, activeExtras, subtotal, iva, total, monthly, onRequestQuote, canRequest }) {
  const hasBonus = total >= CONSULTING_THRESHOLD
  const itemCount = (base ? 1 : 0) + activeModules.length + activeExtras.length

  return (
    <div className="bg-[#131929] border border-white/[0.08] rounded-2xl p-6 shadow-2xl shadow-black/40">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">Tu presupuesto</span>
        {itemCount > 0 && (
          <span className="text-[10px] text-white/25">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>

      {/* Empty state */}
      {!base ? (
        <div className="py-10 text-center">
          <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-3">
            <ArrowRight size={16} className="text-white/20" />
          </div>
          <p className="text-white/25 text-sm leading-relaxed">
            Seleccioná un proyecto<br />base para empezar
          </p>
        </div>
      ) : (
        <div>
          {/* Project base */}
          <div className="mb-4">
            <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Proyecto base</div>
            <div className="flex justify-between items-start gap-2">
              <span className="text-sm text-white font-medium leading-snug">{base.name}</span>
              <span className="text-sm text-white/55 flex-shrink-0 tabular-nums">{formatARS(base.price)}</span>
            </div>
          </div>

          {/* Modules */}
          <AnimatePresence>
            {activeModules.length > 0 && (
              <motion.div
                key="modules"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease }}
                className="border-t border-white/[0.06] pt-4 mb-4"
              >
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Módulos</div>
                <div className="space-y-2">
                  {activeModules.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.18, ease }}
                      className="flex justify-between items-center gap-2"
                    >
                      <span className="text-xs text-white/45 truncate leading-snug">{m.name}</span>
                      <span className="text-xs text-white/35 flex-shrink-0 tabular-nums">+{formatARS(m.price)}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Extras */}
          <AnimatePresence>
            {activeExtras.length > 0 && (
              <motion.div
                key="extras"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease }}
                className="border-t border-white/[0.06] pt-4 mb-4"
              >
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Extras premium</div>
                <div className="space-y-2">
                  {activeExtras.map((e) => (
                    <motion.div
                      key={e.id}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.18, ease }}
                      className="flex justify-between items-center gap-2"
                    >
                      <span className="text-xs text-white/45 truncate leading-snug">{e.name}</span>
                      <span className="text-xs text-white/35 flex-shrink-0 tabular-nums">+{formatARS(e.price)}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Totals */}
          <div className="border-t border-white/[0.08] pt-4 space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/40">Subtotal</span>
              <span className="text-xs text-white/55 tabular-nums">{formatARS(subtotal)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/40">IVA 21%</span>
              <span className="text-xs text-white/35 tabular-nums">{formatARS(iva)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/[0.08]">
              <span className="text-sm font-semibold text-white">Total</span>
              <motion.span
                key={total}
                initial={{ opacity: 0.6, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-[#EB6700] font-bold text-base tabular-nums"
              >
                {formatARS(total)}
              </motion.span>
            </div>
          </div>

          {/* Monthly */}
          <AnimatePresence>
            {monthly > 0 && (
              <motion.div
                key="monthly"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.22, ease }}
                className="mt-4 p-3 rounded-xl bg-[#2A3582]/10 border border-[#2A3582]/25 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <RefreshCw size={12} className="text-[#6B7FD4] flex-shrink-0" />
                  <span className="text-xs text-white/40">Mantenimiento mensual</span>
                </div>
                <motion.span
                  key={monthly}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.18 }}
                  className="text-sm font-bold text-[#7B8FE0] tabular-nums"
                >
                  {formatARS(monthly)}<span className="text-[10px] font-normal text-white/30">/mes</span>
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Consulting bonus */}
      <AnimatePresence>
        {hasBonus && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.28, ease }}
            className="mt-4 p-3 rounded-xl bg-[#2A3582]/12 border border-[#2A3582]/25 flex items-start gap-2"
          >
            <Sparkles size={13} className="text-[#6B7FD4] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#7B8FE0] leading-relaxed">
              Incluye consultoría inicial gratuita
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <Button
        size="lg"
        className="w-full mt-5"
        disabled={!canRequest}
        onClick={onRequestQuote}
      >
        Solicitar presupuesto
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Button>

      {!canRequest && (
        <p className="text-white/20 text-xs text-center mt-2.5">
          Seleccioná un proyecto para continuar
        </p>
      )}
    </div>
  )
}
