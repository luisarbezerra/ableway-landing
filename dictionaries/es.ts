import type { Dictionary } from '.'
import { WA, EMAIL, INSTAGRAM } from '@/lib/constants'

export const es: Dictionary = {
  meta: {
    title: 'Ableway — Consultoría de Accesibilidad y Movilidad',
    description:
      'Consultoría especializada en movilidad y accesibilidad. Tecnologías asistivas y entornos adaptados con precisión técnica y cuidado humano. Brasilia, Brasil.',
  },
  nav: {
    links: [
      { label: 'Por qué Ableway', href: '#problem' },
      { label: 'Servicios', href: '#services' },
      { label: 'Equipo', href: '#team' },
      { label: 'Contacto', href: '#cta' },
    ],
    cta: 'Agendar evaluación',
  },
  hero: {
    pill: 'Brasilia · Online y Presencial',
    titleBase: 'La movilidad es',
    titleEm: 'libertad.',
    titleSub: 'La autonomía es tu derecho.',
    description:
      'Consultoría especializada en tecnologías asistivas y entornos accesibles. Precisión clínica con mirada humana — para que usted ocupe el mundo con confianza.',
    btnPrimary: 'Agendar por WhatsApp',
    btnSecondary: 'Ver servicios',
    cardSubtitle: 'Consultoría de Accesibilidad y Movilidad',
    cardTitle: 'Su evaluación comienza con una conversación.',
    cardBody:
      'Online o presencial en Brasilia. Sin formularios largos — solo atención especializada para lo que realmente necesita.',
    cardBtn: 'Hablar por WhatsApp',
    trustYears: '+40 años',
    trustYearsDesc: 'de experiencia clínica combinada',
    trustRef1: 'Rede Sarah',
    trustRef2: 'Selección Brasileña',
  },
  trustBar: {
    label: 'Socios y credenciales',
  },
  problem: {
    eyebrow: 'Por qué importa la consultoría',
    headingLine1: 'Miles de opciones en el mercado.',
    headingLine2: 'Una es la correcta para usted.',
    body: 'Comprar una silla de ruedas o adaptar un baño sin orientación técnica muchas veces resulta en desperdicio de dinero y, peor aún, en riesgos para la salud.',
    blockquote:
      '"Ableway elimina la duda y garantiza que su inversión se convierta en real calidad de vida."',
    cards: [
      {
        title: 'Riesgo para la salud',
        desc: 'Los equipos inadecuados causan lesiones y complicaciones. La indicación técnica precisa previene daños duraderos.',
      },
      {
        title: 'Inversión desperdiciada',
        desc: 'Las tecnologías asistivas son costosas. Comprar el equipo incorrecto es perder dinero que podría transformar una vida.',
      },
      {
        title: 'Información fragmentada',
        desc: 'Proveedores, médicos e internet dan opiniones distintas. Falta alguien que lo mire como un todo.',
      },
    ],
  },
  services: {
    eyebrow: 'Nuestras consultorías',
    headingLine1: 'Online o presencial.',
    headingLine2: 'Siempre personalizado.',
    body: 'Dos pilares de actuación, con planes Basic y Premium que se adaptan a sus necesidades.',
    labelBasic: 'Basic',
    labelPremium: 'Premium',
    pillars: [
      {
        title: 'Consultoría para la Persona',
        desc: 'Prescripción, selección y ajuste fino de tecnologías asistivas — sillas de ruedas, cojines, órtesis y accesorios.',
        cards: [
          {
            title: 'Evaluación Individual',
            desc: 'Lo esencial para una decisión segura y técnicamente fundamentada.',
            features: [
              'Evaluación individual presencial u online',
              'Informe técnico completo',
              'Selección de los equipos asistivos ideales',
            ],
          },
          {
            title: 'Acompañamiento Completo',
            desc: 'Desde el diagnóstico hasta la llegada del equipo — con usted en cada etapa.',
            features: [
              'Todo del plan Basic',
              'Contacto y negociación con proveedores',
              '1 seguimiento online tras la recepción',
            ],
          },
        ],
      },
      {
        title: 'Consultoría para el Entorno',
        desc: 'Planificación y adecuación de espacios residenciales o de trabajo — eliminando barreras físicas con diseño y funcionalidad.',
        cards: [
          {
            title: 'Diagnóstico de Accesibilidad',
            desc: 'Una visión clara de las adaptaciones necesarias para su espacio.',
            features: [
              'Evaluación completa del entorno',
              'Informe de accesibilidad domiciliaria',
              'Lista de equipos necesarios',
            ],
          },
          {
            title: 'Transformación Completa',
            desc: 'Diagnóstico detallado, proveedores y soporte hasta la adaptación final.',
            features: [
              'Todo del plan Basic',
              'Lista de proveedores de equipos',
              'Asistencia en el contacto con proveedores',
              '1 seguimiento online tras la llegada',
            ],
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Cómo funciona',
    heading: 'Simple, seguro y centrado en usted.',
    body: 'Del primer contacto a la solución ideal — guiado por especialistas en cada etapa.',
    steps: [
      {
        num: '01 — Contacto',
        title: 'Primera conversación',
        desc: 'Cuéntenos sobre usted, su rutina y lo que necesita. Por WhatsApp o correo — sin formularios y sin compromiso.',
      },
      {
        num: '02 — Evaluación',
        title: 'Diagnóstico especializado',
        desc: 'Evaluación técnica completa, presencial en Brasilia u online. Miramos lo físico, lo emocional y el contexto.',
      },
      {
        num: '03 — Solución',
        title: 'Indicación precisa',
        desc: 'Informe detallado con las indicaciones correctas para su caso. Sin suposiciones — con décadas de experiencia clínica.',
      },
    ],
  },
  team: {
    eyebrow: 'Dos trayectorias, un propósito',
    heading: 'Quién está con usted',
    body: 'Excelencia clínica e innovación en el cuidado de la movilidad humana.',
    members: [
      {
        name: 'Yara Helena de Carvalho Paiva',
        role: 'Terapeuta Ocupacional · MSc',
        bio: 'Casi 40 años de actuación en rehabilitación. Inició en la Rede Sarah de Brasilia, donde dedicó más de 25 años a la rehabilitación de lesionados medulares y adaptaciones personalizadas. Máster en Psicología, con especialización en salud del anciano. Trabajó en el Hospital Universitario de Brasilia y en la docencia académica.',
        tags: ['Rede Sarah', 'HUB', 'Lesión Medular', 'Salud del Anciano', 'MSc Psicología'],
      },
      {
        name: 'Joana de Paiva Ribeiro',
        role: 'Fisioterapeuta Deportiva',
        bio: 'Especialista en fisioterapia deportiva y rehabilitación funcional. Trabajó con la Selección Brasileña de Baloncesto Femenino y el Sport Club Corinthians. Profundizando su formación con una especialización internacional en la Universidad del Real Madrid.',
        tags: ['Selección Brasileña', 'Corinthians', 'Univ. Real Madrid', 'Fisio Deportiva'],
      },
    ],
  },
  manifesto: {
    eyebrow: 'Nuestro manifiesto',
    quoteBase: '"La accesibilidad no es un detalle técnico — es un acto de respeto hacia',
    quoteEm: 'tu historia."',
    body: 'Cada persona tiene una biografía única, y su independencia debe preservarse con dignidad. En Ableway, trabajamos para que la tecnología asistiva sea un puente, no una barrera.',
    cta: 'Quiero conocer Ableway',
  },
  values: {
    eyebrow: 'Nuestros valores',
    heading: 'Lo que guía cada decisión',
    items: [
      {
        title: 'Individualidad',
        desc: 'Soluciones exclusivas para cuerpos y rutinas únicas. No existe respuesta genérica para una necesidad específica.',
      },
      {
        title: 'Asertividad Técnica',
        desc: 'Seguridad y precisión basadas en décadas de experiencia clínica — no en opinión.',
      },
      {
        title: 'Empatía y Acogimiento',
        desc: 'Usted en el centro de todo — sus dolores comprendidos y sus logros celebrados con usted.',
      },
      {
        title: 'Ética y Transparencia',
        desc: 'Honestidad total en la indicación — priorizando siempre su necesidad real.',
      },
      {
        title: 'Visión Biopsicosocial',
        desc: 'Miramos lo físico, lo emocional y lo social. La movilidad es mucho más que el cuerpo.',
      },
      {
        title: 'Innovación',
        desc: 'Actualización constante en las mejores prácticas de diseño universal y tecnología asistiva.',
      },
    ],
  },
  cta: {
    eyebrow: 'Comience ahora',
    headingBase: '¿Listo para recuperar su',
    headingEm: 'autonomía?',
    body: 'Agende su evaluación — online o presencial en Brasilia. Sin burocracia, solo cuidado técnico y humano.',
    btnPrimary: 'Agendar por WhatsApp',
    btnSecondary: 'Enviar correo',
    footnote: 'Ablewayc@gmail.com · @ablewayc · Brasilia, Brasil',
  },
  footer: {
    tagline:
      'Consultoría especializada en movilidad y accesibilidad. Precisión técnica con cuidado humano.',
    cols: [
      {
        title: 'Servicios',
        links: [
          { label: 'Consultoría para la Persona', href: '#services' },
          { label: 'Consultoría para el Entorno', href: '#services' },
          { label: 'Plan Basic', href: '#services' },
          { label: 'Plan Premium', href: '#services' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Nuestro equipo', href: '#team' },
          { label: 'Manifiesto', href: '#manifesto' },
          { label: 'Valores', href: '#values' },
          { label: 'Cómo funciona', href: '#process' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: '+55 61 9 ···· ····', href: WA, external: true },
          { label: 'Ablewayc@gmail.com', href: EMAIL },
          { label: '@ablewayc', href: INSTAGRAM, external: true },
          { label: 'Brasilia, Brasil', href: '#' },
        ],
      },
    ],
    copyright: '© 2025 Ableway · Todos los derechos reservados',
  },
}
