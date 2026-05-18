import type { Dictionary } from '.'
import { WA, EMAIL, INSTAGRAM } from '@/lib/constants'

export const pt: Dictionary = {
  meta: {
    title: 'Ableway — Consultoria de Acessibilidade e Mobilidade',
    description:
      'Consultoria especializada em mobilidade e acessibilidade. Tecnologias assistivas e ambientes adaptados com precisão técnica e cuidado humano. Brasília, Brasil.',
  },
  nav: {
    links: [
      { label: 'Por que Ableway', href: '#problem' },
      { label: 'Serviços', href: '#services' },
      { label: 'Equipe', href: '#team' },
      { label: 'Contato', href: '#cta' },
    ],
    cta: 'Agendar avaliação',
  },
  hero: {
    pill: 'Brasília · Online e Presencial',
    titleBase: 'Mobilidade é',
    titleEm: 'liberdade.',
    titleSub: 'Autonomia é seu direito.',
    description:
      'Consultoria especializada em tecnologias assistivas e ambientes acessíveis. Precisão clínica com olhar humano — para que você ocupe o mundo com confiança.',
    btnPrimary: 'Agendar via WhatsApp',
    btnSecondary: 'Ver serviços',
    cardSubtitle: 'Consultoria de Acessibilidade e Mobilidade',
    cardTitle: 'Sua avaliação começa com uma conversa.',
    cardBody:
      'Online ou presencial em Brasília. Sem formulários longos — só atenção especializada para o que você realmente precisa.',
    cardBtn: 'Falar no WhatsApp',
    trustYears: '+40 anos',
    trustYearsDesc: 'de experiência clínica combinada',
    trustRef1: 'Rede Sarah',
    trustRef2: 'Seleção Brasileira',
  },
  trustBar: {
    label: 'Parceiros e formações',
  },
  problem: {
    eyebrow: 'Por que a consultoria importa',
    headingLine1: 'Milhares de opções no mercado.',
    headingLine2: 'Uma é a certa para você.',
    body: 'Comprar uma cadeira de rodas ou adaptar um banheiro sem orientação técnica muitas vezes resulta em desperdício de dinheiro e, pior, em riscos à saúde.',
    blockquote:
      '"A Ableway elimina a dúvida e garante que seu investimento se transforme em real qualidade de vida."',
    cards: [
      {
        title: 'Risco à saúde',
        desc: 'Equipamentos inadequados causam lesões e complicações. A indicação técnica precisa previne danos duradouros.',
      },
      {
        title: 'Investimento desperdiçado',
        desc: 'Tecnologias assistivas são caras. Comprar errado é perder dinheiro que poderia transformar uma vida.',
      },
      {
        title: 'Informação fragmentada',
        desc: 'Fornecedores, médicos e internet dão opiniões distintas. Falta quem olhe para você como um todo.',
      },
    ],
  },
  services: {
    eyebrow: 'Nossas consultorias',
    headingLine1: 'Online ou presencial.',
    headingLine2: 'Sempre personalizado.',
    body: 'Dois pilares de atuação, com planos Basic e Premium que se adaptam à sua necessidade.',
    labelBasic: 'Basic',
    labelPremium: 'Premium',
    pillars: [
      {
        title: 'Consultoria para a Pessoa',
        desc: 'Prescrição, seleção e ajuste fino de tecnologias assistivas — cadeiras de rodas, almofadas, órteses e acessórios.',
        cards: [
          {
            title: 'Avaliação Individual',
            desc: 'O essencial para uma decisão segura e tecnicamente fundamentada.',
            features: [
              'Avaliação individual presencial ou online',
              'Relatório técnico completo',
              'Seleção dos equipamentos assistivos ideais',
            ],
          },
          {
            title: 'Acompanhamento Completo',
            desc: 'Do diagnóstico à chegada do equipamento — com você em cada etapa.',
            features: [
              'Tudo do plano Basic',
              'Contato e negociação com fornecedores',
              '1 acompanhamento online após o recebimento',
            ],
          },
        ],
      },
      {
        title: 'Consultoria para o Ambiente',
        desc: 'Planejamento e adequação de espaços residenciais ou de trabalho — eliminando barreiras físicas com design e funcionalidade.',
        cards: [
          {
            title: 'Diagnóstico de Acessibilidade',
            desc: 'Visão clara das adaptações necessárias para seu espaço.',
            features: [
              'Avaliação completa do ambiente',
              'Relatório de acessibilidade domiciliar',
              'Lista com equipamentos necessários',
            ],
          },
          {
            title: 'Transformação Completa',
            desc: 'Diagnóstico detalhado, fornecedores e suporte até a adaptação final.',
            features: [
              'Tudo do plano Basic',
              'Lista com fornecedores dos equipamentos',
              'Auxílio no contato com fornecedores',
              '1 acompanhamento online após a chegada',
            ],
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Como funciona',
    heading: 'Simples, seguro e centrado em você.',
    body: 'Do primeiro contato à solução ideal — guiado por especialistas em cada etapa.',
    steps: [
      {
        num: '01 — Contato',
        title: 'Primeira conversa',
        desc: 'Nos fale sobre você, sua rotina e o que precisa. Por WhatsApp ou e-mail — sem formulários e sem compromisso.',
      },
      {
        num: '02 — Avaliação',
        title: 'Diagnóstico especializado',
        desc: 'Avaliação técnica completa, presencial em Brasília ou online. Olhamos para o físico, o emocional e o contexto.',
      },
      {
        num: '03 — Solução',
        title: 'Indicação precisa',
        desc: 'Relatório detalhado com as indicações certas para o seu caso. Sem achismo — com décadas de experiência clínica.',
      },
    ],
  },
  team: {
    eyebrow: 'Duas trajetórias, um propósito',
    heading: 'Quem está com você',
    body: 'Expertise clínica de excelência e inovação no cuidado com a mobilidade humana.',
    members: [
      {
        name: 'Yara Helena de Carvalho Paiva',
        role: 'Terapeuta Ocupacional · MSc',
        bio: 'Quase 40 anos de atuação em reabilitação. Iniciou na Rede Sarah de Brasília, onde dedicou mais de 25 anos à reabilitação de lesados medulares e adaptações personalizadas. Mestra em Psicologia, com especialização em saúde do idoso. Atuou no Hospital Universitário de Brasília e no ensino acadêmico.',
        tags: ['Rede Sarah', 'HUB', 'Lesão Medular', 'Saúde do Idoso', 'MSc Psicologia'],
      },
      {
        name: 'Joana de Paiva Ribeiro',
        role: 'Fisioterapeuta Esportiva',
        bio: 'Especialista em fisioterapia esportiva e reabilitação funcional. Atuou com a Seleção Brasileira de Basquete Feminino e o Sport Club Corinthians. Aprofundando a formação com especialização internacional pela Universidade do Real Madrid.',
        tags: ['Seleção Brasileira', 'Corinthians', 'Univ. Real Madrid', 'Fisio Esportiva'],
      },
    ],
  },
  manifesto: {
    eyebrow: 'Nosso manifesto',
    quoteBase: '"Acessibilidade não é um detalhe técnico — é um ato de respeito à',
    quoteEm: 'sua história."',
    body: 'Cada pessoa possui uma biografia única, e sua independência deve ser preservada com dignidade. Na Ableway, trabalhamos para que a tecnologia assistiva seja uma ponte, não uma barreira.',
    cta: 'Quero conhecer a Ableway',
  },
  values: {
    eyebrow: 'Nossos valores',
    heading: 'O que guia cada decisão',
    items: [
      {
        title: 'Individualidade',
        desc: 'Soluções exclusivas para corpos e rotinas únicas. Não existe resposta genérica para uma necessidade específica.',
      },
      {
        title: 'Assertividade Técnica',
        desc: 'Segurança e precisão baseadas em décadas de experiência clínica — não em opinião.',
      },
      {
        title: 'Empatia e Acolhimento',
        desc: 'Você no centro de tudo — suas dores compreendidas e suas conquistas celebradas com você.',
      },
      {
        title: 'Ética e Transparência',
        desc: 'Honestidade total na indicação — priorizando sua real necessidade, sempre.',
      },
      {
        title: 'Visão Biopsicossocial',
        desc: 'Olhamos para o físico, o emocional e o social. Mobilidade é muito mais que o corpo.',
      },
      {
        title: 'Inovação',
        desc: 'Atualização constante nas melhores práticas de design universal e tecnologia assistiva.',
      },
    ],
  },
  cta: {
    eyebrow: 'Comece agora',
    headingBase: 'Pronto para recuperar sua',
    headingEm: 'autonomia?',
    body: 'Agende sua avaliação — online ou presencial em Brasília. Sem burocracia, só cuidado técnico e humano.',
    btnPrimary: 'Agendar via WhatsApp',
    btnSecondary: 'Enviar e-mail',
    footnote: 'Ablewayc@gmail.com · @ablewayc · Brasília, Brasil',
  },
  footer: {
    tagline:
      'Consultoria especializada em mobilidade e acessibilidade. Precisão técnica com cuidado humano.',
    cols: [
      {
        title: 'Serviços',
        links: [
          { label: 'Consultoria para a Pessoa', href: '#services' },
          { label: 'Consultoria para o Ambiente', href: '#services' },
          { label: 'Plano Basic', href: '#services' },
          { label: 'Plano Premium', href: '#services' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Nossa equipe', href: '#team' },
          { label: 'Manifesto', href: '#manifesto' },
          { label: 'Valores', href: '#values' },
          { label: 'Como funciona', href: '#process' },
        ],
      },
      {
        title: 'Contato',
        links: [
          { label: '+55 61 9 ···· ····', href: WA, external: true },
          { label: 'Ablewayc@gmail.com', href: EMAIL },
          { label: '@ablewayc', href: INSTAGRAM, external: true },
          { label: 'Brasília, Brasil', href: '#' },
        ],
      },
    ],
    copyright: '© 2025 Ableway · Todos os direitos reservados',
  },
}
