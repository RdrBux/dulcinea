import H2 from './H2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MallaOne from '../assets/tatianadancewear.jpg';
import MallaTwo from '../assets/relevedessin.jpeg';
import ShoesOne from '../assets/gaynorminden.jpg';

export default function Store() {
  return (
    <section id="tienda" className="container py-32">
      <div className="mb-10 flex justify-center">
        <H2>TIENDA</H2>
      </div>
      {/* <p className="my-6 max-w-3xl text-zinc-700">
        Acá vas a encontrar mis mallas signature de marcas reconocidas en el
        país e internacionalmente.
      </p> */}
      <div className="" /* className="grid gap-4 lg:grid-cols-3 lg:gap-10" */>
        <div className="grid items-center lg:grid-cols-2">
          <div className="min-h-[400px] sm:h-[812px] md:h-[934px] lg:h-[636px] xl:h-[806px] 2xl:h-[977px]">
            <LazyLoadImage
              className="lg:p-10"
              alt=""
              src={MallaOne}
              width="100%"
            />
          </div>
          {/* <img src={MallaOne} alt="" className="lg:w-1/2 lg:p-10" /> */}
          <div className="p-4 lg:p-10">
            <h3 className="text-2xl font-semibold  text-zinc-900">
              Malla Dulcinea por Tatiana Dancewear®
            </h3>
            <p className="my-4 leading-relaxed text-zinc-700">
              Es una malla con escote redondo y un corte arriba del busto que
              permite un montón de posibilidades a la hora de diseñar tu Tati.
              Con esta malla siempre vas a estar cómoda gracias a su calce
              estilizador. En la parte de la espalda tiene unos detalles con
              botones que quedan soñados.
            </p>
            <a
              className="boder-rose-300 mt-4 flex w-fit items-center gap-2 border-2 border-rose-300 bg-rose-300 px-12 py-3 font-semibold text-black duration-300 hover:bg-rose-200"
              href="https://tatianadancewear.com/tienda/custom-made/mallas/dulcinea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar la tienda
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
            </a>
          </div>
        </div>

        <div className="mt-20 grid items-center lg:mt-0 lg:grid-cols-2">
          <div className="min-h-[400px] sm:h-[913px] md:h-[1105px] lg:order-1 lg:h-[705px] xl:h-[897px] 2xl:h-[1089px]">
            <LazyLoadImage
              className="lg:p-10"
              alt=""
              src={MallaTwo}
              width="100%"
            />
          </div>
          {/* <img src={MallaTwo} alt="" className="lg:w-1/2 lg:p-10" /> */}
          <div className="p-4 lg:p-10">
            <h3 className="text-2xl font-semibold  text-zinc-900">
              Malla Dulcinea por Relevé Dessin®
            </h3>
            <p className="my-4 leading-relaxed text-zinc-700">
              Malla súper adherente, muy al cuerpo, con increíble escote en la
              espalda y cierre delantero
            </p>
            <a
              className="boder-rose-300 mt-4 flex w-fit items-center gap-2 border-2 border-rose-300 bg-rose-300 px-12 py-3 font-semibold text-black duration-300 hover:bg-rose-200"
              href="https://www.instagram.com/p/Cj7ytxurWzj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Instagram
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
            </a>
          </div>
        </div>

        <div className="mt-20 grid items-center lg:mt-0 lg:grid-cols-2">
          <div className="min-h-[400px] sm:h-[871px] md:h-[1054px] lg:h-[676px] xl:h-[859px] 2xl:h-[1042px]">
            <LazyLoadImage
              className="lg:p-10"
              alt=""
              width="100%"
              src={ShoesOne}
            />
          </div>
          {/* <img src={ShoesOne} alt="" className="lg:w-1/2 lg:p-10" /> */}
          <div className="p-4 lg:p-10">
            <h3 className="text-2xl font-semibold text-zinc-900">
              Gaynor Minden Argentina
            </h3>
            <p className="my-4 leading-relaxed text-zinc-700">
              Soy colaboradora de mi marca favorita de zapatillas de puntas:
              Gaynor Minden, destacadas por su calidad, duración, belleza y
              tecnología que me acompañan en cada paso. Contactate para realizar
              tu fitting personalizado y compras.
            </p>
            <a
              className="boder-rose-300 mt-4 flex w-fit items-center gap-2 border-2 border-rose-300 bg-rose-300 px-12 py-3 font-semibold text-black duration-300 hover:bg-rose-200"
              href="https://instagram.com/gaynorminden_argentina?igshid=ZDdkNTZiNTM="
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Instagram
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
