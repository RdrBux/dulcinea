import aboutImg from '../assets/about-img.jpg';
import H2 from './H2';

export default function AboutMe() {
  return (
    <section
      id="sobre-mí"
      className="container grid items-center gap-10 py-32 lg:grid-cols-3 lg:gap-20"
    >
      <div className="flex flex-col gap-6 self-start">
        <H2 wrap={false}>Sobre mí</H2>
        <p className="text-lg font-semibold uppercase text-zinc-900">
          Lorem ipsum dolor sit amet consectetur pretium.
        </p>
        <div className="flex flex-col gap-4 text-zinc-700">
          <p>
            Egresada de la Escuela de Música, Danza y Teatro de Paraná de
            Técnica en Danzas clásicas.
          </p>
          <p>
            Estudios universitarios en Troyes, Francia. Diploma de estudios
            coreógraficos en el Conservatorio Marcell Landowski.
          </p>
          <p>
            Ganadora del primer premio regional y tercer premio nacional en el
            Concurso Nacional ??DE QUÉ?? de Francia. Finalista concurso VKIBC
            2015, New York.
          </p>
          <div>
            Ingresó como bailarina a la compañía del Parque del Conocimiento en
            2014. Invitada como bailarina en Galas en Argentina y Paraguay.
          </div>
          <div>
            Profesora de Ashtanga Yoga Terapéutico y Medicina Oriental. Técnica
            en Medicina Ayurveda.
          </div>
        </div>
      </div>
      <img src={aboutImg} alt="" />
      <div className="">
        <h3 className="font-serif text-3xl font-semibold">
          FORMACIÓN PROFESIONAL
        </h3>
        <hr className="my-5 border-rose-300" />
        <ul className="flex flex-col gap-5 text-sm text-zinc-700">
          <li className="">
            <h4 className="text-base font-semibold uppercase text-black">
              Bailarina
            </h4>
            <p className="mt-2">
              Egresada de la Escuela de Música, Danza y Teatro de Paraná de
              Técnica en Danzas clásicas.
            </p>
            <p>
              Estudios universitarios en Troyes, Francia. Diploma de estudios
              coreógraficos en el Conservatorio Marcell Landowski.
            </p>
            <p>Integrante del Ballet del Parque del Conocimiento desde 2014.</p>
            <p>
              Primera bailarina en obras como Lago de los Cisnes, Don Quijote,
              Cascanueces, Bayadera, Chopiniana. Bailarina y artista invitada en
              Galas nacionales e internacionales.
            </p>
          </li>
          <hr className="border-rose-300" />
          <li className="">
            <h4 className="text-base font-semibold uppercase text-black">
              Profesora de francés
            </h4>
            <p className="mt-2">
              Estudios del Idioma en Alianza francesa de Paraná y Buenos Aires,
              Argentina.
            </p>
            <p>
              Diploma DELF B2 en Université de Reims, Francia en el año 2013.
            </p>
          </li>
          <hr className="border-rose-300" />
          <li className="">
            <h4 className="text-base font-semibold uppercase text-black">
              Yoga, Ayurveda y Medicina Oriental, Nutrición deportiva
            </h4>
            <p className="mt-2">
              Profesora de Ashtanga Yoga Terapéutico y Medicina Oriental, título
              otorgado por la Escuela Taitoku, Buenos Aires, Argentina. Avalado
              por la Asociación Médica Argentina CODESAMA.
            </p>
            <p>Técnica en Medicina Ayurveda, EISRA, Holanda.</p>
            <p>
              Título de Coach en Nutrición Deportiva, recibido en 2015 por CFD,
              Bélgica.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
