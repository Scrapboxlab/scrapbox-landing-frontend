import clsx from 'clsx'

const variants = {
  primary:
    'bg-[#EB6700] hover:bg-[#d45e00] text-white shadow-sm shadow-[#EB6700]/20 hover:shadow-[#EB6700]/30',
  secondary:
    'border border-white/20 hover:border-white/40 text-white hover:bg-white/[0.05]',
  ghost: 'text-white/60 hover:text-white',
  blue: 'bg-[#2A3582] hover:bg-[#333f9a] text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

export function Button({ variant = 'primary', size = 'md', className, children, as: Tag = 'button', ...props }) {
  return (
    <Tag
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer select-none',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB6700]',
        'disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
