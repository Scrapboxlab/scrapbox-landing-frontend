import { Instagram, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Servicios',
    links: [
      { label: 'Sistemas de stock', href: '#servicios' },
      { label: 'Backoffice', href: '#servicios' },
      { label: 'Landing pages', href: '#servicios' },
      { label: 'Automatizaciones', href: '#servicios' },
      { label: 'Dashboards', href: '#servicios' },
      { label: 'APIs', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#080C18] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="select-none flex items-center gap-2.5">
              <span className="text-white font-semibold text-xl tracking-tight">
                scrap<span className="text-[#EB6700]">box</span>
              </span>
              <img src="/scrapbox_logo.png" alt="" className="h-9 w-auto object-contain" />
            </a>
            <p className="text-white/35 text-sm leading-relaxed mt-4 max-w-[200px]">
              Software a medida para empresas que quieren crecer sin limites.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/scrapboxlab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="mailto:scrapboxgo@gmail.com"
                className="w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-white/50 text-xs font-medium tracking-widest uppercase mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div className="text-white/50 text-xs font-medium tracking-widest uppercase mb-4">
              Contacto
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:scrapboxgo@gmail.com"
                  className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                >
                  scrapboxgo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/scrapboxlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                >
                  @scrapboxlab
                </a>
              </li>
              <li>
                <span className="text-white/30 text-sm">Buenos Aires, AR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} Scrapbox. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Desarrollado con precision en Buenos Aires.
          </p>
        </div>
      </div>
    </footer>
  )
}
