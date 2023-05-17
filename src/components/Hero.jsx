import { HashLink } from 'react-router-hash-link';
import video from '../assets/hero-video3.mp4';

export default function Hero() {
  return (
    <section id="inicio">
      <video
        className="absolute inset-0 h-screen w-full object-cover grayscale"
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="backdrop-blur-sm123 absolute inset-0 h-screen w-full bg-black/60">
        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 items-center justify-center lg:bottom-10">
          {/* <div className="flex h-12 w-8 justify-center rounded-full border border-rose-300 p-1">
            <div
              id="wheel"
              className="h-3 w-0.5 rounded-full bg-rose-300"
            ></div>
          </div> */}
          <HashLink
            to="/#sobre-mí"
            className="scroll flex h-12 w-12 items-center justify-center rounded-full border border-rose-300"
          >
            <div className="absolute top-3 h-4 w-4 rotate-45 border-r border-b border-rose-300"></div>
          </HashLink>
        </div>
      </div>
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
            <p className="w-full max-w-sm px-4 text-center text-white/75 md:max-w-none">
              BAILARINA PROFESIONAL - ARTISTA - PROFESORA DE DANZA Y FRANCÉS
            </p>
            {/* <button className="mt-8 w-fit rounded-full border-2 border-rose-300 py-4 px-8 text-center font-semibold duration-300 hover:bg-rose-300">
              CALL TO ACTION
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
