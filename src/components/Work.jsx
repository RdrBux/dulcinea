import H2 from './H2';
import balletImg from '../assets/ballet.jpg';
import parisImg from '../assets/paris.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
  const [bg, setBg] = useState(balletImg);

  return (
    <section
      id="trabajo"
      className="relative -m-10 overflow-hidden bg-zinc-600 p-10 py-32 text-white"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover blur brightness-[30%]"
        src={bg}
        alt=""
      />
      <div className="container relative z-10 items-center gap-32 lg:flex">
        <div className="lg:w-1/4">
          <H2>Propuesta laboral</H2>
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
        <div className="grid-cols-2 gap-4 lg:grid">
          <div
            onMouseEnter={() => setBg(balletImg)}
            className="flex scale-90 flex-col shadow-lg duration-300 hover:scale-100"
          >
            <img src={balletImg} alt="" />
            <Link
              to="/danza"
              className="flex items-center justify-between gap-4 bg-white px-6 py-4"
            >
              <div>
                <h4 className="font-serif text-3xl font-semibold uppercase text-black">
                  Danza Clásica
                </h4>
                <p className="text-sm text-zinc-700">
                  Bailarina profesional, clases y seminarios de Ballet,
                  reposiciones coreográficas
                </p>
              </div>
              <div className="flex flex-col items-center text-zinc-700 duration-300 hover:text-black">
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs font-semibold">
                  VER MÁS
                </p>
              </div>
            </Link>
          </div>

          <div
            onMouseEnter={() => setBg(parisImg)}
            className="flex scale-90 flex-col shadow-lg duration-300 hover:scale-100"
          >
            <img src={parisImg} alt="" />
            <Link
              to="/frances"
              className="flex items-center justify-between gap-4 bg-white px-6 py-4"
            >
              <div>
                <h4 className="font-serif text-3xl font-semibold uppercase text-black">
                  Francés
                </h4>
                <p className="text-sm text-zinc-700">
                  Clases de francés y francés orientado a la danza
                </p>
              </div>
              <div className="flex flex-col items-center text-zinc-700 duration-300 hover:text-black">
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs font-semibold">
                  VER MÁS
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
