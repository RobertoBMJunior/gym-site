import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="w-full h-20 flex justify-between items-center py-4 px-54 bg-zinc-300 text-slate-900">
            <Link href="/" aria-label="Ir para página inicial">
                <Image src="/logoBarbell.svg" alt="Logo" width={48} height={48} priority/>
            </Link>

            <div className="flex gap-4 font-semibold">
                <Link href="/" className="hover:bg-slate-200 px-2 py-1 rounded transition-colors duration-200">
                    Como funciona
                </Link>
                <Link href="/" className="hover:bg-slate-200 px-2 py-1 rounded transition-colors duration-200">
                    Benefícios
                </Link>
            </div>

        </header>
    )
}