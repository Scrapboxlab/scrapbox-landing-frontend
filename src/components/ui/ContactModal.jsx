import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { useModal } from '../../context/ModalContext'
import { submitWeb3Form } from '../../lib/forms'
import { EASE } from './FadeIn'
import { Button } from './Button'
import { Field } from './Field'
import Modal from './Modal'

export default function ContactModal() {
  const { isOpen, close } = useModal()
  const [form, setForm] = useState({ nombre: '', email: '', descripcion: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const data = await submitWeb3Form({
        subject: `Nueva consulta de ${form.nombre} — Scrapbox`,
        from_name: 'Scrapbox Landing',
        Nombre: form.nombre,
        Email: form.email,
        Consulta: form.descripcion,
      })
      if (data.success) {
        setStatus('success')
      } else {
        setErrorMsg(data?.message || 'Algo salió mal. Intentá de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('No se pudo enviar. Verificá tu conexión.')
      setStatus('error')
    }
  }

  const handleClose = () => {
    close()
    setTimeout(() => {
      setForm({ nombre: '', email: '', descripcion: '' })
      setStatus('idle')
      setErrorMsg('')
    }, 350)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} label="Pedir prototipo gratis">
      <div className="p-8">
        {status === 'success' ? (
          <SuccessState onClose={handleClose} />
        ) : (
          <>
            <div className="mb-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[11px] text-white/50 mb-4 tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700]" />
                Prototipo gratuito
              </div>
              <h2 className="text-white font-bold text-2xl leading-tight tracking-tight">
                Contanos tu idea.
              </h2>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">
                Te respondemos en menos de 24 horas y coordinamos una reunión sin costo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Field
                id="nombre"
                label="Nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                autoComplete="name"
                data-autofocus
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@empresa.com"
                required
                autoComplete="email"
              />
              <Field
                id="descripcion"
                label="¿En qué podemos ayudarte?"
                as="textarea"
                value={form.descripcion}
                onChange={handleChange}
                placeholder="Contanos brevemente tu empresa o proyecto. ¿Qué necesitás construir?"
                required
                rows={4}
                className="resize-none"
              />

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/[0.08] border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full mt-2" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar consulta'
                )}
              </Button>

              <p className="text-white/30 text-xs text-center">
                Sin compromiso. Primera reunión y prototipo completamente gratis.
              </p>
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}

function SuccessState({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="text-center py-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={24} className="text-emerald-400" />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">Mensaje enviado</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
        Te contactamos en menos de 24 horas para coordinar la reunión inicial.
      </p>
      <Button variant="secondary" onClick={onClose}>
        Cerrar
      </Button>
    </motion.div>
  )
}
