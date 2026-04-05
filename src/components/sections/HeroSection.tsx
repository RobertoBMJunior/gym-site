import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center gap-4 py-6 px-4 sm:px-6 md:px-10 mb-6">
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold max-w-[700px]">
        Treino personalizado para o seu corpo, nível e objetivo
      </h1>

      <p className="text-sm sm:text-base md:text-[20px] text-center font-bold text-[#A79696]">
        Receba um protocolo de treino adaptado para a sua realidade (academia ou
        calistenia)
      </p>

      <div className="flex sm:flex-row items-center gap-4 sm:gap-6 md:gap-10">
        <Image
          src="/imageTraining1.svg"
          alt=""
          width={187}
          height={200}
          className="w-[80px] sm:w-[150px] md:w-[187px] h-auto"
        />
        <Image
          src="/imageTraining2.svg"
          alt=""
          width={267}
          height={200}
          className="w-[130px] sm:w-[200px] md:w-[267px] h-auto"
        />
        <Image
          src="/imageTraining3.svg"
          alt=""
          width={174}
          height={200}
          className="w-[80px] sm:w-[140px] md:w-[174px] h-auto"
        />
      </div>

      <p className="text-center text-xs sm:text-sm font-semibold mt-3">
        *Não é necessário cadastro, visualize e baixe a sua ficha de treino
        gratuitamente.
      </p>

      <Link href="/perguntas-protocolo">
        <button
          className="
          bg-[#DC2626]
          px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
          rounded-full
          text-white
          font-semibold
          text-lg sm:text-xl md:text-3xl
          flex items-center
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          hover:shadow-red-600/40
          cursor-pointer
          hover:brightness-105
          active:scale-95
        "
        >
          Obter protocolo de treino
        </button>
      </Link>
    </section>
  )
}
