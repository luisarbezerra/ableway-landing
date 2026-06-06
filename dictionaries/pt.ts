import type { Dictionary } from '.'
import { EMAIL, INSTAGRAM } from '@/lib/constants'

const WA_PT = `https://wa.me/5561992798699?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Ableway.`

export const pt: Dictionary = {
  meta: {
    title: 'Ableway — Consultoria de Acessibilidade e Mobilidade',
    description:
      'Consultoria especializada em mobilidade e acessibilidade. Tecnologias assistivas e ambientes adaptados com precisão técnica e cuidado humano. Brasília, Brasil.',
  },
  waHref: WA_PT,
  nav: {
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Quem Somos', href: '#team' },
      { label: 'Serviços', href: '#services' },
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Contato', href: '#cta' },
    ],
    cta: 'Agendar avaliação',
  },
  hero: {
    pill: 'Consultoria especializada',
    titleBase: 'Mobilidade é',
    titleEm: 'liberdade.',
    titleSub: 'Autonomia é seu direito.',
    description:
      'Oferecemos soluções em mobilidade e ambientes acessíveis com precisão clínica e cuidado humano, promovendo mais independência, autonomia e qualidade de vida no seu dia a dia.',
    btnPrimary: 'Conhecer serviços',
    btnSecondary: 'Manifesto Ableway',
    cardSubtitle: 'Consultoria de Acessibilidade e Mobilidade',
    cardTitle: 'Sua avaliação começa com uma conversa.',
    cardBody: 'Online ou presencial (Brasília)\nAvaliação especializada',
    cardBtn: 'Marcar avaliação',
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
        desc: 'Tecnologia assistiva, como recursos e equipamentos, podem ser caros. A aquisição deve ser individualizada e personalizada, para não ser inadequada.',
      },
      {
        title: 'Informação fragmentada',
        desc: 'Para a indicação e prescrição adequada deve considerar vários aspectos da vida do usuário. Somente um profissional especializado e com vasta experiência consegue fazer um raciocínio clínico adequado.',
      },
    ],
  },
  services: {
    eyebrow: 'Nossas consultorias',
    headingLine1: 'Online ou presencial.',
    headingLine2: 'Sempre personalizado.',
    body: 'Dois planos — Basic e Advanced — aplicados à consultoria para a pessoa ou para o ambiente.',
    labelBasic: 'Basic',
    labelPremium: 'Premium',
    pillars: [
      {
        title: 'Plano I — Para a Pessoa',
        desc: 'Prescrição e indicação individualizada de tecnologia assistiva.',
        cards: [
          {
            title: 'Basic',
            desc: 'O essencial para uma indicação segura e tecnicamente fundamentada.',
            features: [
              'Avaliação físico-funcional do indivíduo',
              'Prescrição técnica de equipamentos',
              'Indicação de Tecnologia Assistiva',
              'Relatório Final',
            ],
          },
          {
            title: 'Advanced',
            desc: 'Acompanhamento completo — da avaliação à aquisição do equipamento.',
            features: [
              'Avaliação físico-funcional do indivíduo',
              'Prescrição técnica de equipamentos',
              'Indicação de Tecnologia Assistiva',
              'Relatório Final',
              'Levantamento de fornecedores',
              'Acompanhamento até a aquisição online',
              '1 Treinamento com o equipamento',
            ],
          },
        ],
      },
      {
        title: 'Plano II — Para o Ambiente',
        desc: 'Adequação e acessibilidade de espaços residenciais ou de trabalho.',
        cards: [
          {
            title: 'Basic',
            desc: 'Diagnóstico e orientações claras para adequação do espaço.',
            features: [
              'Avaliação do ambiente',
              'Orientações e sugestões de adequação do ambiente',
              'Prescrição técnica de equipamentos',
              'Indicação de Tecnologia Assistiva',
              'Relatório Final',
            ],
          },
          {
            title: 'Advanced',
            desc: 'Do diagnóstico à adaptação final — com suporte em cada etapa.',
            features: [
              'Avaliação do ambiente',
              'Orientações e sugestões de adequação do ambiente',
              'Prescrição técnica de equipamentos',
              'Indicação de Tecnologia Assistiva',
              'Levantamento de fornecedores',
              'Acompanhamento até a aquisição do equipamento',
              '1 Treinamento com o equipamento',
              'Relatório Final',
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
    narrativeLabel: 'Nossa história',
    narrative:
      'A Ableway nasceu do encontro entre experiência clínica de excelência e inovação. Juntas, identificaram uma lacuna no mercado: a angústia de famílias e pessoas, com diferentes necessidades, sentem dificuldades na escolha e definição de tecnologia assistiva. A Ableway transforma décadas de conhecimento técnico em uma indicação e prescrição seguras. Não somos apenas consultoras — somos parceiras que caminham lado a lado, na definição e orientação, atendendo a necessidade de cada indivíduo e visando a autonomia, independência e qualidade de vida.',
    members: [
      {
        name: 'Yara Helena de Carvalho Paiva',
        role: 'Terapeuta Ocupacional · MSc',
        bio: 'Terapeuta ocupacional com quase 40 anos de atuação. Sua história em Brasília começou na Rede SARAH de Hospitais de Reabilitação, onde dedicou 24 anos à reabilitação de indivíduos com traumatismo raquimedular. Com mestrado em psicologia e especializações em saúde do idoso, atua no Hospital Universitário de Brasília na assistência e formação acadêmica de profissionais da área.',
        tags: ['Rede SARAH', 'HUB', 'Lesão Medular', 'Saúde do Idoso', 'MSc Psicologia'],
        photo: '/team/joana.jpeg',
      },
      {
        name: 'Joana de Paiva Ribeiro',
        role: 'Fisioterapeuta Esportiva',
        bio: 'Fisioterapeuta com expertise em fisioterapia esportiva, traz a bagagem de quem já atuou com a Seleção Brasileira de Basquete Feminino e o Sport Club Corinthians. Futuramente aprofundará sua formação com especialização internacional pela Universidade do Real Madrid.',
        tags: ['Seleção Brasileira', 'Corinthians', 'Univ. Real Madrid', 'Fisio Esportiva'],
        photo: '/team/joana.jpeg',
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
        desc: 'Soluções exclusivas para cada necessidade. Não existe uma solução generalizada para uma demanda específica.',
      },
      {
        title: 'Assertividade Técnica',
        desc: 'Segurança e precisão baseadas em décadas de experiência clínica.',
      },
      {
        title: 'Ética e Transparência',
        desc: 'Honestidade total na indicação, priorizando sua real necessidade, sempre.',
      },
      {
        title: 'Empatia e Acolhimento',
        desc: 'Você no centro de tudo, com sua história de vida, demanda e desejos.',
      },
      {
        title: 'Visão Biopsicossocial',
        desc: 'Mobilidade é muito mais que físico. Consideramos todos os aspectos que compõem o ser humano: físico, emocional, social, econômico; assim como seus papeis na sociedade.',
      },
      {
        title: 'Inovação',
        desc: 'Atualização constante e busca ao que mais atende às suas necessidades.',
      },
    ],
  },
  cta: {
    eyebrow: 'Comece agora',
    headingBase: 'Pronto para recuperar sua',
    headingEm: 'autonomia?',
    body: 'Agende sua avaliação — online ou presencial em Brasília. Sem burocracia, só cuidado técnico e humano.',
    btnPrimary: 'Agendar avaliação',
    btnSecondary: 'Enviar e-mail',
    btnTertiary: 'Instagram',
    footnote: 'Ablewayc@gmail.com · @ablewayc · Brasília, Brasil',
  },
  footer: {
    tagline:
      'Consultoria especializada em mobilidade e acessibilidade. Precisão técnica com cuidado humano.',
    cols: [
      {
        title: 'Serviços',
        links: [
          { label: 'Plano I — Para a Pessoa', href: '#services' },
          { label: 'Plano II — Para o Ambiente', href: '#services' },
          { label: 'Plano Basic', href: '#services' },
          { label: 'Plano Premium', href: '#services' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Quem Somos', href: '#team' },
          { label: 'Manifesto', href: '#manifesto' },
          { label: 'Por que Ableway', href: '#problem' },
        ],
      },
      {
        title: 'Contato',
        links: [
          { label: '+55 61 99279-8699', href: WA_PT, external: true },
          { label: 'ablewayc@gmail.com', href: EMAIL },
          { label: '@ablewayc', href: INSTAGRAM, external: true },
          { label: 'Brasília, Brasil', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 Ableway · Todos os direitos reservados',
  },
}
