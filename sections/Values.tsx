import { ElementType } from 'react'
import { Heart, Check, Smile, Lock, Globe, Zap } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'

const VALUES: { icon: ElementType; title: string; desc: string }[] = [
  {
    icon: Heart,
    title: 'Individualidade',
    desc: 'Soluções exclusivas para corpos e rotinas únicas. Não existe resposta genérica para uma necessidade específica.',
  },
  {
    icon: Check,
    title: 'Assertividade Técnica',
    desc: 'Segurança e precisão baseadas em décadas de experiência clínica — não em opinião.',
  },
  {
    icon: Smile,
    title: 'Empatia e Acolhimento',
    desc: 'Você no centro de tudo — suas dores compreendidas e suas conquistas celebradas com você.',
  },
  {
    icon: Lock,
    title: 'Ética e Transparência',
    desc: 'Honestidade total na indicação — priorizando sua real necessidade, sempre.',
  },
  {
    icon: Globe,
    title: 'Visão Biopsicossocial',
    desc: 'Olhamos para o físico, o emocional e o social. Mobilidade é muito mais que o corpo.',
  },
  {
    icon: Zap,
    title: 'Inovação',
    desc: 'Atualização constante nas melhores práticas de design universal e tecnologia assistiva.',
  },
]

export function Values() {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-10">
        <div className="text-center mb-[52px]">
          <Eyebrow>Nossos valores</Eyebrow>
          <h2 className="font-syne text-[clamp(28px,3vw,42px)] font-bold text-navy leading-[1.15]">
            O que guia cada decisão
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-7 rounded-[14px] border border-[var(--border)]">
              <div className="w-[38px] h-[38px] rounded-[9px] bg-mint-light flex items-center justify-center mb-[14px]">
                <Icon size={16} stroke="#44B893" strokeWidth={2} />
              </div>
              <div className="font-syne text-[15px] font-bold text-navy mb-[7px]">{title}</div>
              <p className="text-[13px] leading-[1.65] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
