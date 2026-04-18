import { CircleCheck, FileText, Rocket } from 'lucide-react'
import Image from 'next/image'

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-t border-slate-200 bg-slate-100 py-10 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Como funciona o protocolo de treino
          </h2>

          <h3 className="text-lg text-slate-600 mt-2 mb-10 text-center md:text-left">
            Em 3 passos você recebe seu treino ideal
          </h3>

          <div className="space-y-8 text-slate-700">
            <div className="flex gap-4">
              <Rocket className="text-red-600 mt-1 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-red-600">
                  Passo 1
                </span>
                <p>
                  Responda algumas perguntas simples. Leva menos de 1 minuto.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FileText className="text-red-600 mt-1 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-red-600">
                  Passo 2
                </span>
                <p>
                  Geramos um treino completo e direto ao ponto, baseado no seu
                  objetivo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CircleCheck className="text-red-600 mt-1 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-red-600">
                  Passo 3
                </span>
                <p>
                  Visualize online ou baixe em PDF. Sem cadastro e totalmente
                  gratuito.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/imageTraining4.svg"
            alt="Pessoa treinando"
            width={200}
            height={400}
            className="
              w-30 
              md:w-50 
              opacity-40
            "
          />
        </div>
      </div>
    </section>
  )
}
