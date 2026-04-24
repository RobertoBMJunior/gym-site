import { Book, Newspaper, NotepadText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="pt-4 mx-4">
      <div
        className="
          max-w-7xl
          mx-auto
          h-20
          flex
          items-center
          justify-between
          px-4 sm:px-6 md:px-10
          bg-white/80
          backdrop-blur
          text-slate-900
          rounded-2xl
          shadow-md
        "
      >
        <Link href="/" aria-label="Ir para página inicial">
          <Image
            src="/logoBarbell.svg"
            alt="Logo"
            width={48}
            height={48}
            priority
            className="w-8 md:w-12"
          />
        </Link>

        <nav className="flex gap-4 font-semibold">
          <Link
            href="/blog"
            className="
              
              flex gap-1 items-center
              px-0 py-0
              md:px-3 md:py-2
              rounded-lg
              transition
              hover:bg-slate-200
              text-base
              font-medium
            "
          >
            <NotepadText className="w-4" />
            <span>Blog</span>
          </Link>

          {/* <Link
            href="/#beneficios"
            className="
              md:flex
              px-0 py-0
              md:px-3 md:py-2
              rounded-lg
              transition
              hover:bg-slate-200
              text-sm md:text-base
              font-medium
            "
          >
            Benefícios
          </Link> */}
        </nav>
      </div>
    </header>
  )
}
