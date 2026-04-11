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
    <div className="w-full px-6 py-8 bg-white flex flex-col items-center gap-4 border border-slate-200 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <Icon size={48} className="text-red-600 w-10 md:w-12" />
      <h3 className="font-bold text-center text-slate-600 text-lg md:text-xl">
        {titleCard}
      </h3>
      <p className="text-base text-slate-600 text-center">{descriptionCard}</p>
    </div>
  )
}

//2ª versão do CardBenefits:
// 'use client'

// import { LucideIcon } from 'lucide-react'
// import { useEffect, useRef, useState } from 'react'

// interface CardBenefitsProps {
//   icon: LucideIcon
//   titleCard: string
//   descriptionCard: string
// }

// export function CardBenefits({
//   icon: Icon,
//   titleCard,
//   descriptionCard,
// }: CardBenefitsProps) {
//   const ref = useRef<HTMLDivElement | null>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true)
//         }
//       },
//       {
//         threshold: 0.2, // ativa quando 20% do card aparece
//       }
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => {
//       observer.disconnect()
//     }
//   }, [])

//   return (
//     <div
//       ref={ref}
//       className={`
//         w-full
//         px-5 py-6 md:px-6 md:py-8
//         bg-white
//         flex flex-col items-center gap-4
//         border border-slate-200
//         rounded-3xl
//         shadow-sm
//         transition-all duration-700
//         hover:shadow-md hover:-translate-y-1 hover:duration-300

//         ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
//       `}
//     >
//       <Icon className="text-red-600 w-10 h-10 md:w-12 md:h-12" />

//       <h3 className="font-bold text-center text-slate-700 text-lg md:text-xl">
//         {titleCard}
//       </h3>

//       <p className="text-base text-slate-600 text-center">{descriptionCard}</p>
//     </div>
//   )
// }
