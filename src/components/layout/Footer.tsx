import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 mt-4">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logoBarbell.svg"
            alt="Logo Treino Pronto"
            width={48}
            height={48}
          />
          <span className="font-bold text-slate-800">Treino Pronto</span>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/termos-de-uso" className="hover:underline">
            Termos de uso
          </Link>
          <Link href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
        </div>

        <div className="text-sm text-slate-600">
          <p>
            Contato:{' '}
            <a href="mailto:treinopronto@gmail.com" className="hover:underline">
              treinopronto@gmail.com
            </a>
          </p>
          <p className="mt-1">© {new Date().getFullYear()} – Treino Pronto</p>
        </div>
      </div>
    </footer>
  )
}
