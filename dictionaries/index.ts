export type NavDict = {
  links: { label: string; href: string }[]
  cta: string
}

export type HeroDict = {
  pill: string
  titleBase: string
  titleEm: string
  titleSub: string
  description: string
  btnPrimary: string
  btnSecondary: string
  cardSubtitle: string
  cardTitle: string
  cardBody: string
  cardBtn: string
  trustYears: string
  trustYearsDesc: string
  trustRef1: string
  trustRef2: string
}

export type TrustBarDict = {
  label: string
}

export type ProblemDict = {
  eyebrow: string
  headingLine1: string
  headingLine2: string
  body: string
  blockquote: string
  cards: { title: string; desc: string }[]
}

export type ServicesDict = {
  eyebrow: string
  headingLine1: string
  headingLine2: string
  body: string
  labelBasic: string
  labelPremium: string
  pillars: {
    title: string
    desc: string
    cards: { title: string; desc: string; features: string[] }[]
  }[]
}

export type ProcessDict = {
  eyebrow: string
  heading: string
  body: string
  steps: { num: string; title: string; desc: string }[]
}

export type TeamDict = {
  eyebrow: string
  heading: string
  body: string
  narrativeLabel: string
  narrative: string
  members: { name: string; role: string; bio: string; tags: string[]; photo?: string }[]
}

export type ManifestoDict = {
  eyebrow: string
  quoteBase: string
  quoteEm: string
  body: string
  cta: string
}

export type ValuesDict = {
  eyebrow: string
  heading: string
  items: { title: string; desc: string }[]
}

export type CTADict = {
  eyebrow: string
  headingBase: string
  headingEm: string
  body: string
  btnPrimary: string
  btnSecondary: string
  btnTertiary: string
  footnote: string
}

export type FooterDict = {
  tagline: string
  cols: { title: string; links: { label: string; href: string; external?: boolean }[] }[]
  copyright: string
}

export type Dictionary = {
  meta: { title: string; description: string }
  nav: NavDict
  hero: HeroDict
  trustBar: TrustBarDict
  problem: ProblemDict
  services: ServicesDict
  process: ProcessDict
  team: TeamDict
  manifesto: ManifestoDict
  values: ValuesDict
  cta: CTADict
  footer: FooterDict
}

const loaders = {
  pt: () => import('./pt').then((m) => m.pt),
  en: () => import('./en').then((m) => m.en),
  es: () => import('./es').then((m) => m.es),
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  const loader = loaders[locale as keyof typeof loaders] ?? loaders.pt
  return loader()
}

export const LOCALES = ['pt', 'en', 'es'] as const
export type Locale = (typeof LOCALES)[number]
