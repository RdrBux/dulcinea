export default function Footer() {
  return (
    <div className="bg-black text-white">
      <hr className="container border-rose-300" />
      <footer className="container flex flex-col items-center justify-center py-4 text-xs md:flex-row md:gap-2 lg:text-base">
        <p>Dulcinea Rodríguez © 2023.</p>

        <p>Todos los derechos reservados.</p>

        <p>
          Elaborado por{' '}
          <a
            className="font-semibold duration-300 hover:text-rose-300"
            href="https://rodriguezrodrigo.com"
          >
            RdrBux
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
