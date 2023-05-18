import { HashLink } from 'react-router-hash-link';
import video from '../assets/hero-video3.mp4';
import { useRef } from 'react';

export default function Hero() {
  const text = useRef();
  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    text.current.style.opacity = 1;
  }

  return (
    <section className="bg-black" id="inicio">
      <video
        className="absolute inset-0 h-screen w-full object-cover grayscale"
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
        onPlay={() => hidePreloader()}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="backdrop-blur-sm123 absolute inset-0 h-screen w-full bg-black/60"></div>
      <div
        ref={text}
        className="z-10 flex h-screen select-none flex-col items-center justify-center text-white opacity-0 duration-[3000ms]"
      >
        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 items-center justify-center lg:bottom-10">
          <HashLink
            to="/#sobre-mí"
            className="scroll flex h-12 w-12 items-center justify-center rounded-full border border-rose-300"
          >
            <div className="absolute top-3 h-4 w-4 rotate-45 border-r border-b border-rose-300"></div>
          </HashLink>
        </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
