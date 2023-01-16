import video from '../assets/hero-video3.mp4';

export default function Hero() {
  return (
    <section id="inicio">
      {/* <video
        className="absolute inset-0 h-screen w-full object-cover grayscale"
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 h-screen w-full bg-black/50 backdrop-blur-sm"></div>
      <div className="z-10 flex h-screen select-none flex-col items-center justify-center text-white">
        <div className="relative">
          <div className="flex w-screen items-center justify-center gap-8">
            <div className="h-[1px] w-full bg-rose-300"></div>
            <h1 className="w-fit text-center font-serif text-[12vw] font-medium leading-tight md:text-7xl lg:whitespace-nowrap 2xl:text-8xl">
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
    </section>
  );
}
