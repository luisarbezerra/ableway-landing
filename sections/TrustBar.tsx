const PARTNERS = [
  'Rede Sarah',
  'Hospital Universitário de Brasília',
  'Seleção Brasileira de Basquete',
  'Sport Club Corinthians',
  'Univ. Real Madrid',
]

export function TrustBar() {
  return (
    <section id="trust" className="bg-warm border-b border-[var(--border)] py-9">
      <div className="max-w-container mx-auto px-10 flex items-center justify-between gap-8 flex-wrap">
        <span className="text-[12px] font-semibold tracking-[.1em] uppercase text-[rgba(28,49,68,.35)] whitespace-nowrap">
          Parceiros e formações
        </span>
        <div className="flex gap-10 flex-wrap items-center">
          {PARTNERS.map((name) => (
            <span key={name} className="font-syne text-[14px] font-bold text-[rgba(28,49,68,.35)]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
