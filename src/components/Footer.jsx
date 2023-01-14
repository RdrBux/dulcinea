export default function Footer() {
  return (
    <div className="bg-zinc-900 text-white">
      <hr className="container border-rose-300" />
      <footer className="container flex flex-col items-center justify-center py-4 md:flex-row md:gap-2">
        <p>Dulcinea Rodríguez © 2023.</p>

        <p>Todos los derechos reservados.</p>

        <p>
          Diseño por{' '}
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
