import { inputClass } from '../../lib/forms'

export function Field({ id, label, as = 'input', className, ...props }) {
  const Tag = as
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide uppercase"
      >
        {label}
      </label>
      <Tag id={id} name={id} className={`${inputClass} ${className ?? ''}`} {...props} />
    </div>
  )
}
