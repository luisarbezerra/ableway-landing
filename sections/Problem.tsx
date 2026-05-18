import { AlertTriangle, DollarSign, Search } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ElementType } from 'react'

const CARDS: { icon: ElementType; title: string; desc: string }[] = [
  {
    icon: AlertTriangle,
    title: 'Risco à saúde',
    desc: 'Equipamentos inadequados causam lesões e complicações. A indicação técnica precisa previne danos duradouros.',
  },
  {
    icon: DollarSign,
    title: 'Investimento desperdiçado',
    desc: 'Tecnologias assistivas são caras. Comprar errado é perder dinheiro que poderia transformar uma vida.',
  },
  {
    icon: Search,
    title: 'Informação fragmentada',
    desc: 'Fornecedores, médicos e internet dão opiniões distintas. Falta quem olhe para você como um todo.',
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <Eyebrow>Por que a consultoria importa</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy mb-[18px] leading-[1.15]">
            Milhares de opções no mercado.
            <br />
            Uma é a certa para você.
          </h2>
          <p className="text-[16px] leading-[1.75] mb-6">
            Comprar uma cadeira de rodas ou adaptar um banheiro sem orientação técnica muitas vezes
            resulta em desperdício de dinheiro e, pior, em riscos à saúde.
          </p>
          <blockquote className="py-5 px-6 border-l-[3px] border-mint bg-mint-lighter rounded-r-[8px]">
            <p className="text-[15px] text-navy font-medium italic leading-[1.6] m-0">
              "A Ableway elimina a dúvida e garante que seu investimento se transforme em real
              qualidade de vida."
            </p>
          </blockquote>
        </div>
        <div className="flex flex-col gap-[14px]">
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 items-start p-5 rounded-[12px] border border-[var(--border)] bg-white transition-shadow duration-[150ms] hover:shadow-[0_4px_20px_rgba(28,49,68,.06)]"
            >
              <div className="w-10 h-10 rounded-[10px] bg-mint-lighter flex items-center justify-center flex-shrink-0">
                <Icon size={18} stroke="#44B893" strokeWidth={2} />
              </div>
              <div>
                <div className="font-syne text-[15px] font-bold text-navy mb-1">{title}</div>
                <p className="text-[13px] leading-[1.6] m-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
