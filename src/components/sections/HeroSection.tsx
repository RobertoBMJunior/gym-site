import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center gap-4 py-4 px-50 mb-4">
      <h1 className="text-5xl text-center font-bold max-w-200">
        Treino personalizado para o seu corpo, nível e objetivo
      </h1>
      <p className="text-[20px] text-center font-bold text-[#A79696] w-[590px]">
        Receba um protocolo de treino adaptado para a sua realidade (academia ou
        calistenia)
      </p>
      <div className="flex gap-10">
        <Image src="/imageTraining1.svg" alt="" width={140} height={200} />
        <Image src="/imageTraining2.svg" alt="" width={200} height={200} />
        <Image src="/imageTraining3.svg" alt="" width={130} height={200} />
      </div>
      <p className="text-center text-sm font-semibold max-w-[360px]">
        *Não é necessário cadastro, visualize e baixe a sua ficha de treino
        gratuitamente.
      </p>
      {/* <button className="bg-[#DC2626] px-10 py-5 rounded-full text-white font-semibold text-4xl flex items-center">
        Obter protocolo de treino
      </button> */}
      <button
        className="
          bg-[#DC2626]
          px-10 py-5
          rounded-full
          text-white
          font-semibold
          text-3xl
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
    </section>
  )
}
