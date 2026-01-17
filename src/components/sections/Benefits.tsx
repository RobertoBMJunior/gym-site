//Benefits.tsx

import { BadgeCheck, Dumbbell, Flag, Hourglass } from 'lucide-react'
import { CardBenefits } from '../cards/CardBenefits'

export function Benefits() {
  return (
    <section id="beneficios" className="border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Benefícios</h2>
        <div className="grid grid-cols-4 gap-6">
          <CardBenefits
            icon={Flag}
            titleCard="Treino adaptado ao seu nível"
            descriptionCard="Protocolos ajustados para iniciantes, intermediários e avançados."
          />
          <CardBenefits
            icon={BadgeCheck}
            titleCard="Evolução sem achismo"
            descriptionCard="Exercícios escolhidos com lógica de progressão e foco em resultados."
          />
          <CardBenefits
            icon={Hourglass}
            titleCard="Economia de tempo"
            descriptionCard="Chegue na academia sabendo exatamente o que treinar."
          />
          <CardBenefits
            icon={Dumbbell}
            titleCard="Treinos organizados"
            descriptionCard="Divisões claras para estimular todo o corpo sem sobrecarga."
          />
        </div>
      </div>
    </section>
  )
}
