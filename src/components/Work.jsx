import H2 from './H2';
import balletImg from '../assets/ballet.jpg';
import parisImg from '../assets/paris.jpg';
import { useState } from 'react';

export default function Work() {
  const [bg, setBg] = useState(balletImg);

  return (
    <div
      id="trabajo"
      className="relative -m-10 overflow-hidden bg-zinc-600 p-10 py-32 text-white"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover blur brightness-[30%]"
        src={bg}
        alt=""
      />
      <div className="container relative z-10 items-center gap-20 lg:flex">
        <div className="lg:w-1/4">
          <H2>Título sección</H2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Risus et velit convallis
            facilisi auctor platea. Ullamcorper tempus urna fermentum vel sit
            habitasse. Mauris lectus malesuada pellentesque sit.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur. Risus et velit convallis
            facilisi auctor platea. Ullamcorper tempus urna fermentum vel sit
            habitasse. Mauris lectus malesuada pellentesque sit.
          </p>
        </div>
        <div className="grid-cols-2 gap-10 lg:grid">
          <div
            onMouseEnter={() => setBg(balletImg)}
            className="flex scale-90 flex-col shadow-lg duration-300 hover:scale-100"
          >
            <img src={balletImg} alt="" />
            <div className="flex items-center justify-between bg-white px-6 py-4">
              <div>
                <h4 className="font-serif text-2xl font-semibold uppercase text-black">
                  Danza Clásica
                </h4>
                <p className="text-sm text-zinc-700">
                  Ballet, clases de danza y blabla
                </p>
              </div>
              <button className="flex flex-col items-center text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <p className="text-xs font-semibold">VER MÁS</p>
              </button>
            </div>
          </div>

          <div
            onMouseEnter={() => setBg(parisImg)}
            className="flex scale-90 flex-col shadow-lg duration-300 hover:scale-100"
          >
            <img src={parisImg} alt="" />
            <div className="flex items-center justify-between bg-white px-6 py-4">
              <div>
                <h4 className="font-serif text-2xl font-semibold uppercase text-black">
                  Francés
                </h4>
                <p className="text-sm text-zinc-700">
                  Francés orientado a la danza y blabla
                </p>
              </div>
              <button className="flex flex-col items-center text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <p className="text-xs font-semibold">VER MÁS</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
