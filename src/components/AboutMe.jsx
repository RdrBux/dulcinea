import aboutImg from '../assets/about-img.jpg';
import H2 from './H2';

export default function AboutMe() {
  return (
    <div
      id="sobre-mí"
      className="container grid items-center gap-10 py-32 lg:grid-cols-3 lg:gap-0"
    >
      <div className="flex flex-col gap-5 lg:pr-20">
        <H2>Sobre mí</H2>
        <p className="text-lg font-medium uppercase text-zinc-900">
          Lorem ipsum dolor sit amet consectetur pretium.
        </p>
        <div className="text-zinc-700">
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu pretium commodo dignissim
            cursus. Volutpat et interdum pretium neque mauris condimentum odio.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur. Eu pretium commodo dignissim
            cursus. Volutpat et interdum pretium neque mauris condimentum odio.
          </p>
        </div>
      </div>
      <img src={aboutImg} alt="" />
      <div className="w-fit lg:pl-20">
        <h3 className="font-serif text-3xl font-semibold">ACÁ VA UN TÍTULO</h3>
        <hr className="my-5 border-rose-300" />
        <ul className="flex flex-col gap-5 text-zinc-700">
          <li className="">
            <h4 className="font-semibold text-black">SUBTÍTULO PRIMERO</h4>
            <p>Acá va contentido</p>
            <p>Acá va más contenido</p>
          </li>
          <hr className="border-rose-300" />
          <li className="">
            <h4 className="font-semibold text-black">SUBTÍTULO SEGUNDO</h4>
            <p>Acá va contentido</p>
            <p>Acá va más contenido</p>
          </li>
          <hr className="border-rose-300" />
          <li className="">
            <h4 className="font-semibold text-black">SUBTÍTULO TERCERO</h4>
            <p>Acá va contentido</p>
            <p>Acá va más contenido</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
