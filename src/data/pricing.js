export const BASE_PROJECTS = [
  {
    id: 'landing-basic',
    name: 'Landing Page básica',
    description: 'Presencia online profesional y rápida para tu negocio.',
    longDescription: 'Una landing page de una sola página, optimizada para cargar rápido y transmitir confianza desde el primer segundo. Incluye secciones de hero, servicios, testimonios y contacto. Diseño responsivo, formulario funcional y entrega en menos de 10 días hábiles.',
    mediaUrl: null,
    price: 250000,
    monthly: 29900,
    badge: null,
    icon: 'Globe',
  },
  {
    id: 'landing-premium',
    name: 'Landing Premium',
    description: 'Diseño avanzado, animaciones y conversión optimizada.',
    longDescription: 'Todo lo de la landing básica más animaciones de entrada fluidas, micro-interacciones, sección de casos de éxito, integración con Google Analytics y optimización de conversión (CRO). Ideal para negocios que quieren destacarse de la competencia con una presencia memorable.',
    mediaUrl: null,
    price: 450000,
    monthly: 49900,
    badge: 'Más elegido',
    icon: 'Star',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Tienda online con catálogo, carrito y checkout integrado.',
    longDescription: 'Tienda online completa con catálogo de productos configurable, carrito de compras, checkout con múltiples medios de pago, gestión de pedidos y panel de administración. Incluye integración con Mercado Pago y cálculo automático de envíos.',
    mediaUrl: null,
    price: 950000,
    monthly: 119900,
    badge: null,
    icon: 'ShoppingCart',
  },
  {
    id: 'turnos',
    name: 'Sistema de Turnos',
    description: 'Reservas y gestión de citas online con recordatorios.',
    longDescription: 'Sistema completo para que tus clientes reserven turnos online 24/7. Configurás tu disponibilidad horaria, los clientes eligen su franja y reciben confirmación automática por email o WhatsApp. Panel de gestión para ver y administrar todos los turnos del día.',
    mediaUrl: null,
    price: 700000,
    monthly: 79900,
    badge: null,
    icon: 'Calendar',
  },
  {
    id: 'stock',
    name: 'Sistema de Stock',
    description: 'Control de inventario y movimientos en tiempo real.',
    longDescription: 'Control total de tu inventario: alta de productos, movimientos de entrada y salida, alertas de stock mínimo y reportes de rotación. Multiusuario con roles diferenciados. Exportación a Excel e historial completo de movimientos con trazabilidad.',
    mediaUrl: null,
    price: 850000,
    monthly: 89900,
    badge: null,
    icon: 'Package',
  },
  {
    id: 'crm',
    name: 'CRM Simple',
    description: 'Gestión de clientes, ventas y seguimiento comercial.',
    longDescription: 'Centraliza toda la información de tus clientes y prospectos en un solo lugar. Registrá interacciones, etapas del embudo de ventas, tareas pendientes y notas. Con reportes de conversión y vistas tipo Kanban para visualizar el pipeline comercial de tu equipo.',
    mediaUrl: null,
    price: 1000000,
    monthly: 99900,
    badge: null,
    icon: 'Users',
  },
]

export const MODULES = [
  { id: 'contact-form', name: 'Formulario de contacto ', price: 40000, monthly: 5000, icon: 'MessageSquare', longDescription: 'Formulario de contacto con validaciones, protección anti-spam (reCAPTCHA), notificaciones por email al instante y autorespuesta automática al cliente. Configurable con campos personalizados según tu negocio.', mediaUrl: '/Formulario.mp4' },
  { id: 'whatsapp', name: 'Integración WhatsApp', price: 25000, monthly: 7000, icon: 'MessageCircle', longDescription: 'Botón flotante de WhatsApp con mensaje pre-cargado personalizable según la sección de la página. Incluye múltiples números con horarios de atención y enrutamiento inteligente.', mediaUrl: '/wppchat.mp4' },
  { id: 'blog', name: 'Blog / noticias', price: 80000, monthly: 0, icon: 'FileText', longDescription: 'Sistema de blog completo con editor rico, categorías, etiquetas y buscador integrado. Panel para publicar, editar y programar artículos. Optimizado para SEO con meta tags configurables por artículo.', mediaUrl: '/noticias.mp4' },
  { id: 'admin-panel', name: 'Panel administrador', price: 150000, monthly: 5000, icon: 'LayoutDashboard', longDescription: 'Panel privado para gestionar el contenido de tu sitio sin tocar código: textos, imágenes, productos, precios y más. Acceso por usuario y contraseña con roles configurables.', mediaUrl: '/PanelAdmin.mp4' },
  { id: 'user-login', name: 'Login de usuarios', price: 120000, monthly: 7000, icon: 'Lock', longDescription: 'Sistema de registro e inicio de sesión para tus clientes. Incluye recuperación de contraseña por email, perfil editable, historial de actividad y zonas privadas de acceso restringido.', mediaUrl: '/login.mp4' },
  { id: 'mercadopago', name: 'Pagos Mercado Pago', price: 135000, monthly: 5000, icon: 'CreditCard', longDescription: 'Integración completa con Mercado Pago: pagos con tarjeta, transferencia y efectivo. Webhook para confirmar pagos automáticamente y panel para ver el historial de transacciones dentro de tu plataforma.', mediaUrl: '/tarjetamp.mp4' },
  { id: 'afip', name: 'Integración facturación', price: 325000, monthly: 15000, icon: 'Receipt', longDescription: 'Emisión automática de facturas electrónicas (A, B o C) directamente desde tu sistema, integrado con los servicios web de AFIP. Generación de PDF, envío por email al cliente y registro contable.', mediaUrl: null },
  { id: 'live-chat', name: 'Chat en vivo', price: 50000, monthly: 5000, icon: 'Headphones', longDescription: 'Chat en tiempo real para atender a tus visitantes mientras navegan. Incluye panel de operadores, historial de conversaciones, respuestas rápidas y notificaciones de nuevo mensaje.', mediaUrl: null },
  { id: 'seo', name: 'SEO inicial', price: 90000, monthly: 0, icon: 'Search', longDescription: 'Configuración inicial de SEO técnico: meta tags, Open Graph, sitemap XML, robots.txt, velocidad de carga optimizada y alta en Google Search Console. Base sólida para aparecer en los primeros resultados.', mediaUrl: null },
  { id: 'hosting', name: 'Hosting + deploy inicial', price: 60000, monthly: 0, icon: 'Server', longDescription: 'Configuración completa del entorno de producción: servidor, dominio, SSL gratuito, deploy del proyecto y pipeline de actualizaciones. Tu sitio online y seguro desde el día uno, sin que tengas que preocuparte por la infraestructura.', mediaUrl: null },
]

export const EXTRAS = [
  { id: 'ux-design', name: 'Diseño personalizado', price: 250000, monthly: 0, icon: 'Palette', longDescription: 'Diseño de interfaz desde cero con investigación de usuarios, wireframes y prototipo interactivo en Figma antes de escribir una línea de código. El resultado es una experiencia coherente, intuitiva y alineada con tu marca.', mediaUrl: null },
  { id: 'branding', name: 'Branding básico', price: 175000, monthly: 0, icon: 'Pen', longDescription: 'Identidad visual esencial para tu proyecto: logotipo en formatos vectoriales, paleta de colores, tipografías y guía de uso básica. Todo lo que necesitás para comunicar de forma coherente en digital y offline.', mediaUrl: null },
  { id: 'automations', name: 'Automatizaciones ', price: 150000, monthly: 10000, icon: 'Zap', longDescription: 'Flujos automáticos que trabajan por vos: emails de bienvenida, recordatorios de turno, seguimientos post-compra, alertas internas y más. Configurados con herramientas como Make, Zapier o integración directa según el caso.', mediaUrl: null },
  { id: 'analytics', name: 'Dashboard analytics', price: 135000, monthly: 5000, icon: 'BarChart3', longDescription: 'Panel de métricas a medida con los indicadores clave de tu negocio: visitas, conversiones, ventas, retención y más. Visualización clara en tiempo real para tomar decisiones basadas en datos reales.', mediaUrl: null },
]

export const IVA_RATE = 0.21
export const CONSULTING_THRESHOLD = 1500000

export const formatARS = (amount) =>
  `ARS ${new Intl.NumberFormat('es-AR').format(Math.round(amount))}`
