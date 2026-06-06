import type { Dictionary } from '.'
import { EMAIL, INSTAGRAM } from '@/lib/constants'

const WA_EN = `https://wa.me/5561992798699?text=Hello!%20I%27d%20like%20to%20schedule%20an%20assessment%20with%20Ableway.`

export const en: Dictionary = {
  meta: {
    title: 'Ableway — Accessibility & Mobility Consulting',
    description:
      'We offer solutions in mobility and accessible environments with clinical precision and human care, promoting greater independence, autonomy and quality of life in your daily routine.',
  },
  waHref: WA_EN,
  nav: {
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Who We Are', href: '#team' },
      { label: 'Services', href: '#services' },
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Contact', href: '#cta' },
    ],
    cta: 'Schedule evaluation',
  },
  hero: {
    pill: 'Specialized consulting',
    titleBase: 'Mobility is',
    titleEm: 'freedom.',
    titleSub: 'Autonomy is your right.',
    description:
      'Specialized consulting in assistive technologies and accessible environments. Clinical precision with a human touch — so you can move through the world with confidence.',
    btnPrimary: 'Explore services',
    btnSecondary: 'Ableway Manifesto',
    cardSubtitle: 'Accessibility & Mobility Consulting',
    cardTitle: 'Your evaluation starts with a conversation.',
    cardBody: 'Online or in-person (Brasília)\nSpecialized assessment',
    cardBtn: 'Schedule assessment',
    trustYears: '+40 years',
    trustYearsDesc: 'of combined clinical experience',
    trustRef1: 'Rede Sarah',
    trustRef2: 'Brazilian National Team',
  },
  trustBar: {
    label: 'Partners & credentials',
  },
  problem: {
    eyebrow: 'Why consulting matters',
    headingLine1: 'Thousands of options on the market.',
    headingLine2: 'One is right for you.',
    body: 'Purchasing a wheelchair or adapting a bathroom without technical guidance often results in wasted money and, worse, health risks.',
    blockquote:
      '"Ableway eliminates the doubt and ensures your investment becomes real quality of life."',
    cards: [
      {
        title: 'Health risks',
        desc: 'Inadequate equipment causes injuries and complications. Precise technical guidance prevents lasting harm.',
      },
      {
        title: 'Wasted investment',
        desc: "Assistive technologies are expensive. Buying the wrong one means losing money that could transform a life.",
      },
      {
        title: 'Fragmented information',
        desc: 'Suppliers, doctors, and the internet give conflicting opinions. Someone needs to look at you as a whole.',
      },
    ],
  },
  services: {
    eyebrow: 'Our consulting services',
    headingLine1: 'Online or in-person.',
    headingLine2: 'Always personalized.',
    body: 'Two plans — Basic and Advanced — applied to consulting for the person or the environment.',
    labelBasic: 'Basic',
    labelPremium: 'Premium',
    pillars: [
      {
        title: 'Plan I — For the Person',
        desc: 'Individualized prescription and indication of assistive technology.',
        cards: [
          {
            title: 'Basic',
            desc: 'The essentials for a safe, technically grounded recommendation.',
            features: [
              'Physical-functional assessment of the individual',
              'Technical prescription of equipment',
              'Assistive Technology indication',
              'Final Report',
            ],
          },
          {
            title: 'Advanced',
            desc: 'Full accompaniment — from assessment to equipment acquisition.',
            features: [
              'Physical-functional assessment of the individual',
              'Technical prescription of equipment',
              'Assistive Technology indication',
              'Final Report',
              'Supplier research',
              'Support through online acquisition',
              '1 Training session with the equipment',
            ],
          },
        ],
      },
      {
        title: 'Plan II — For the Environment',
        desc: 'Accessibility and adaptation of residential or work spaces.',
        cards: [
          {
            title: 'Basic',
            desc: 'Clear diagnosis and guidance for space adaptation.',
            features: [
              'Environment assessment',
              'Guidance and suggestions for space adaptation',
              'Technical prescription of equipment',
              'Assistive Technology indication',
              'Final Report',
            ],
          },
          {
            title: 'Advanced',
            desc: 'From diagnosis to final adaptation — support at every step.',
            features: [
              'Environment assessment',
              'Guidance and suggestions for space adaptation',
              'Technical prescription of equipment',
              'Assistive Technology indication',
              'Supplier research',
              'Support through equipment acquisition',
              '1 Training session with the equipment',
              'Final Report',
            ],
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    heading: 'Simple, safe, and centered on you.',
    body: 'From first contact to the ideal solution — guided by specialists at every step.',
    steps: [
      {
        num: '01 — Contact',
        title: 'First conversation',
        desc: 'Tell us about yourself, your routine, and what you need. Via WhatsApp or email — no forms, no commitment.',
      },
      {
        num: '02 — Assessment',
        title: 'Specialized diagnosis',
        desc: 'Complete technical assessment, in-person in Brasília or online. We look at the physical, emotional, and contextual picture.',
      },
      {
        num: '03 — Solution',
        title: 'Precise recommendation',
        desc: 'A detailed report with the right recommendations for your case. No guesswork — decades of clinical experience.',
      },
    ],
  },
  team: {
    eyebrow: 'Two paths, one purpose',
    heading: 'Who is with you',
    body: 'Clinical excellence and innovation in the care of human mobility.',
    narrativeLabel: 'Our story',
    narrative:
      'Ableway was born from the meeting of clinical excellence and innovation. Together, they identified a gap in the market: the distress of families and individuals with different needs who struggle to choose the right assistive technology. Ableway transforms decades of technical knowledge into safe, personalized recommendations — we are not just consultants, we are partners walking side by side toward each person\'s autonomy, independence and quality of life.',
    members: [
      {
        name: 'Yara Helena de Carvalho Paiva',
        role: 'Occupational Therapist · MSc',
        bio: "Nearly 40 years in rehabilitation. Started at the Rede Sarah Hospital in Brasília, dedicating over 25 years to spinal cord injury rehabilitation and personalized adaptations. Master's in Psychology, with specialization in elderly health. Worked at the University Hospital of Brasília and in academic teaching.",
        tags: ['Rede Sarah', 'HUB', 'Spinal Cord Injury', 'Elderly Health', 'MSc Psychology'],
      },
      {
        name: 'Joana de Paiva Ribeiro',
        role: 'Sports Physiotherapist',
        bio: "Specialist in sports physiotherapy and functional rehabilitation. Worked with the Brazilian Women's Basketball National Team and Sport Club Corinthians. Deepening her training with an international specialization at the University of Real Madrid.",
        tags: ['Brazilian National Team', 'Corinthians', 'Univ. Real Madrid', 'Sports Physio'],
      },
    ],
  },
  manifesto: {
    eyebrow: 'Our manifesto',
    quoteBase: '"Accessibility is not a technical detail — it is an act of respect for',
    quoteEm: 'your story."',
    body: 'Every person has a unique biography, and their independence must be preserved with dignity. At Ableway, we work to make assistive technology a bridge, not a barrier.',
    cta: 'Get to know Ableway',
  },
  values: {
    eyebrow: 'Our values',
    heading: 'What guides every decision',
    items: [
      {
        title: 'Individuality',
        desc: 'Exclusive solutions for unique bodies and routines. There is no generic answer to a specific need.',
      },
      {
        title: 'Technical Precision',
        desc: 'Safety and accuracy grounded in decades of clinical experience — not opinion.',
      },
      {
        title: 'Empathy & Care',
        desc: 'You at the center of everything — your pain understood and your achievements celebrated alongside you.',
      },
      {
        title: 'Ethics & Transparency',
        desc: 'Total honesty in every recommendation — always prioritizing your real need.',
      },
      {
        title: 'Biopsychosocial Vision',
        desc: 'We look at the physical, emotional, and social dimensions. Mobility is much more than the body.',
      },
      {
        title: 'Innovation',
        desc: 'Constant updates on best practices in universal design and assistive technology.',
      },
    ],
  },
  cta: {
    eyebrow: 'Start now',
    headingBase: 'Ready to reclaim your',
    headingEm: 'autonomy?',
    body: 'Schedule your evaluation — online or in-person in Brasília. No bureaucracy, just technical and human care.',
    btnPrimary: 'Schedule via WhatsApp',
    btnSecondary: 'Send email',
    btnTertiary: 'Instagram',
    footnote: 'Ablewayc@gmail.com · @ablewayc · Brasília, Brazil',
  },
  footer: {
    tagline:
      'Specialized consulting in mobility and accessibility. Technical precision with human care.',
    cols: [
      {
        title: 'Services',
        links: [
          { label: 'Personal Consulting', href: '#services' },
          { label: 'Environmental Consulting', href: '#services' },
          { label: 'Basic Plan', href: '#services' },
          { label: 'Premium Plan', href: '#services' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Our team', href: '#team' },
          { label: 'Manifesto', href: '#manifesto' },
          { label: 'Values', href: '#values' },
          { label: 'How it works', href: '#process' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: '+55 61 9 ···· ····', href: WA_EN, external: true },
          { label: 'Ablewayc@gmail.com', href: EMAIL },
          { label: '@ablewayc', href: INSTAGRAM, external: true },
          { label: 'Brasília, Brazil', href: '#' },
        ],
      },
    ],
    copyright: '© 2025 Ableway · All rights reserved',
  },
}
