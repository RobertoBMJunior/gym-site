//CardBenefits.tsx
import { LucideIcon } from 'lucide-react'

interface CardBenefitsProps {
  icon: LucideIcon
  titleCard: string
  descriptionCard: string
}

export function CardBenefits({
  icon: Icon,
  titleCard,
  descriptionCard,
}: CardBenefitsProps) {
  return (
    <div className="w-full px-6 py-8 bg-white flex flex-col items-center gap-4 border border-slate-200 rounded-3xl shadow-sm">
      <Icon size={50} className="text-red-600" />
      <h3 className="font-bold text-center text-slate-600 text-[20px]">
        {titleCard}
      </h3>
      <p className="font-semibold text-center">{descriptionCard}</p>
    </div>
  )
}
