import LiMenu from './LiMenu';

export default function Menu({ controlMenu }) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-zinc-900">
      <button
        onClick={() => controlMenu(false)}
        className="absolute top-12 right-12 duration-300 hover:rotate-90"
      >
        <svg
          width="58"
          height="57"
          viewBox="0 0 58 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.3536 0.353546L1.35359 56.3535M0.646484 0.353546L56.6465 56.3535"
            stroke="#FDA4AF"
          />
        </svg>
      </button>
      <ul
        onClick={() => controlMenu(false)}
        className="grid grid-rows-[repeat(4,80px)] text-center font-serif text-4xl text-zinc-300"
      >
        <LiMenu name="Inicio" link="" />
        <LiMenu name="Sobre mí" link="sobre-mí" />
        <LiMenu name="Trabajo" link="trabajo" />
        <LiMenu name="Contacto" link="contacto" />
      </ul>
    </div>
  );
}
