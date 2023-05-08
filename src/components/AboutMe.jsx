import aboutImg from '../assets/about-img.jpg';
import H2 from './H2';

export default function AboutMe() {
  return (
    <section
      id="sobre-mí"
      className="container grid items-center gap-10 py-32 xl:grid-cols-3 xl:gap-20"
    >
      <div className="flex flex-col gap-6 self-start lg:mt-10">
        <H2 wrap={false}>Sobre mí</H2>
        <p className="text-lg font-semibold text-zinc-900">
          Mi nombre es Dulcinea Rodriguez, nacida en Paraná, soy bailarina de
          ballet profesional y profesora de danzas clásicas y francés.
        </p>
        <div className="flex flex-col gap-2 text-zinc-700">
          <p>
            Comencé desde muy chica, a los 3 años, a tomar mis primeras clases
            de danza y desde ahí me enamoré de este arte. Luego de terminar mi
            tecnicatura de Danzas clásicas en la Escuela de Música, Danzas y
            Teatro de Paraná, viajé a Francia a perfeccionarme en el idioma
            francés y como bailarina, obteniendo al finalizar mis estudios, los
            diplomas correspondientes.
          </p>
          <p>
            Participé de varios concursos de danza, entre ellos los más
            importantes fueron el Concurso Nacional de Francia (donde obtuve el
            tercer puesto) y el VKIBC en Nueva York donde pasé a la final
            quedando en el puesto 17.
          </p>
          <p>
            En el año 2014 ingresé al Ballet del Parque del Conocimiento donde
            me desarrollé como bailarina profesional. Además soy artista
            invitada en Galas de Ballet tanto en Argentina como en Paraguay.
          </p>
          <p>
            De forma paralela, doy clases de danzas clásicas y francés.
            Apasionada por el estudio del cuerpo y otras disciplinas
            relacionadas al arte que realizo, también estudié y soy técnica y/o
            profesora de yoga, medicina oriental, medicina ayurveda y coach de
            nutrición deportiva.
          </p>
          <p>
            Actualmente soy colaboradora de varias marcas, entre ellas Gaynor
            Minden Argentina.
          </p>
        </div>
      </div>
      <img className="justify-self-center" src={aboutImg} alt="" />
      <div className="">
        <h3 className="font-serif text-3xl font-semibold">
          FORMACIÓN PROFESIONAL
        </h3>
        <hr className="my-5 border-rose-300" />
        <ul className="flex flex-col gap-5 text-sm text-zinc-700">
          <li className="">
            <h4 className="text-base font-semibold uppercase text-black">
              Bailarina profesional
            </h4>
            <p className="mt-2">
              Parque del Conocimiento desde 2014 donde realiza distintos roles
              de cuerpo de baile, solista y primera bailarina en obras como Lago
              de los Cisnes, Don Quijote, Cascanueces, Bayadera, Chopiniana.
              Bailarina y artista invitada en Galas nacionales e
              internacionales.
            </p>
          </li>
          <hr className="border-rose-300" />
          <li className="">
            <h4 className="text-base font-semibold uppercase text-black">
              Profesora de francés
            </h4>
            <p className="mt-2">
              Estudios del Idioma en Alianza francesa de Paraná y Buenos Aires,
              Argentina. Estudio de idiomas en Mots en Gerbe con la maestra
              Madame Micheline en Troyes, Francia. Recibe diploma DELF B2 en
              Université de Reims, Francia en el año 2013. Creadora del curso
              Francés aplicado a la Danza. Dicta clases en países como
              Argentina, Uruguay, Paraguay, Perú, México, entre otros.
            </p>
            <p>
              Diploma DELF B2 en Université de Reims, Francia en el año 2013.
            </p>
          </li>
          <hr className="border-rose-300" />
          <li className="">
            <h4 className="text-base font-semibold uppercase text-black">
              Yoga, Ayurveda y Medicina Oriental. Nutrición deportiva.
            </h4>
            <p className="mt-2">
              Profesora de Ashtanga Yoga Terapéutico y Medicina Oriental, título
              otorgado por la Escuela Taitoku, Buenos Aires, Argentina. Avalado
              por la Asociación Médica Argentina CODESAMA. Técnica en Medicina
              Ayurveda, EISRA, Holanda . Título de Coach en Nutrición Deportiva,
              recibido en 2015 por CFD, Bélgica.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
