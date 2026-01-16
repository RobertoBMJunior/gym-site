import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col items-center py-4 border border-slate-200 bg-slate-100 font-semibold gap-2">
      <Image src="/logoBarbell.svg" alt="logo do site" width={48} height={48} />
      <Link href="/">Termos de uso</Link>
      <Link href="/">Política de Privacidade</Link>
      <p>Contato: treinopronto@gmail.com</p>
      <p>© 2026 – Treino Pronto </p>
    </footer>
  )
}
