import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="pt-4">
      <div
        className="
          max-w-7xl
          mx-auto
          h-20
          flex
          items-center
          justify-between
          px-10
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
          />
        </Link>

        <nav className="flex gap-4 font-semibold">
          <Link
            href="/"
            className="
              px-3
              py-2
              rounded-lg
              transition
              hover:bg-slate-200
            "
          >
            Como funciona
          </Link>

          <Link
            href="/"
            className="
              px-3
              py-2
              rounded-lg
              transition
              hover:bg-slate-200
            "
          >
            Benefícios
          </Link>
        </nav>
      </div>
    </header>
  )
}
