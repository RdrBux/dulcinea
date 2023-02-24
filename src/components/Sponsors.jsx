import H2 from './H2';
import ballet from '../assets/ballet.jpg';

export default function Sponsors() {
  return (
    <section id="sponsors" className="container py-32">
      <H2>SPONSORS</H2>
      <p className="my-6 max-w-3xl text-zinc-700">
        Patrocinadores que me acompañan blabla blabla consectetur adipisicing
        elit. Velit, perferendis omnis. Quae ex aspernatur, optio quaerat
        impedit beatae laboriosam.
      </p>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-10">
        <div className="">
          <h3 className="text-lg font-semibold uppercase text-zinc-900">
            Gaynor Minden Argentina
          </h3>
          <div className="relative mt-2">
            <div className="h-80 w-full bg-red-400"></div>
            <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black/75 to-transparent p-4 align-text-bottom text-white">
              <a
                className="absolute bottom-0 flex items-center gap-2 py-4"
                href="https://instagram.com/gaynorminden_argentina?igshid=ZDdkNTZiNTM="
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar tienda
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

        <div className="">
          <h3 className="text-lg font-semibold uppercase text-zinc-900">
            Tatiana Dancewear
          </h3>
          <div className="relative mt-2">
            <div className="h-80 w-full bg-red-400"></div>
            <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black/75 to-transparent p-4 align-text-bottom text-white">
              <a
                className="absolute bottom-0 flex items-center gap-2 py-4"
                href="https://tatianadancewear.com/tienda/custom-made/mallas/dulcinea/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver malla Dulcinea
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

        <div className="">
          <h3 className="text-lg font-semibold uppercase text-zinc-900">
            Relevé Dessin
          </h3>
          <div className="relative mt-2">
            <div className="h-80 w-full bg-red-400"></div>
            <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black/75 to-transparent p-4 align-text-bottom text-white">
              <a
                className="absolute bottom-0 flex items-center gap-2 py-4"
                href="https://www.instagram.com/p/Cj7ytxurWzj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver malla Dulcinea
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
      </div>
    </section>
  );
}
