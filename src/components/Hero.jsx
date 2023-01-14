export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-900 text-white">
      <div className="relative">
        <div className="flex w-screen items-center justify-center gap-8">
          <div className="h-[1px] w-full bg-rose-300"></div>
          <h1 className="w-fit text-center font-serif text-[12vw] leading-tight md:text-7xl lg:whitespace-nowrap 2xl:text-8xl">
            DULCINEA RODRÍGUEZ
          </h1>
          <div className="h-[1px] w-full bg-rose-300"></div>
        </div>
        <div className="mt-4 flex w-full flex-col items-center lg:absolute">
          <p className="w-full px-4 text-center text-white/75">
            BAILARINA BLABLA ETC ETC PROFESORA BLABLA
          </p>
          <button className="mt-8 w-fit rounded-full border-2 border-rose-300 py-4 px-8 text-center font-semibold duration-300 hover:bg-rose-300">
            CALL TO ACTION
          </button>
        </div>
      </div>
    </div>
  );
}
