import { useEffect } from 'react';
import img from '../assets/about-img.jpg';

export default function Danza() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container grid gap-8 py-20">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-6xl font-semibold uppercase lg:text-5xl xl:text-7xl">
            Danza clásica
          </h1>
          <div className="flex flex-col gap-4 text-zinc-700">
            <p>
              Contrataciones como bailarina profesional, para participar de
              Galas, festivales y muestras de danzas. Buena adaptación a los
              espacios, vestuarios y partenaire disponible.
            </p>
            <p>
              Profesora de danzas clásicas, con una visión de crecimiento de
              cada alumno desde un cuidadoso trabajo técnico, buscando potenciar
              las cualidades individuales y desde el disfrute de aprender,
              fomentando la curiosidad y la búsqueda personal entre lo técnico y
              artístico. Clases particulares y para grupos.
            </p>
            <p>
              Repositora coreográfica, adaptándome a las necesidades y deseos de
              cada institución, trabajando de forma conjunta en las decisiones
              con los maestros para lograr una gran puesta en escena.
            </p>
          </div>

          <section>
            <h2 className="text-lg font-semibold uppercase text-zinc-900">
              Actividad profesional
            </h2>
            <ul className="mt-2 list-inside list-disc text-zinc-700">
              <li>
                Integrante como bailarina del Parque del Conocimiento - Posadas,
                Misiones. Argentina.
              </li>
              <li>
                Suplencia como docente de danzas clásicas y francés en la
                Academia de Ballet de Moscú.
              </li>
              <li>
                Directora artística de academia Passion Ballet en Santo Tomé,
                Corrientes.
              </li>
              <li>
                Profesora danza clásica para adultos en el Parque del
                Conocimiento.
              </li>
            </ul>
          </section>
        </div>
        <img className="lg:w-5/12" src={img} alt="" />
      </div>

      <section>
        <h2 className="text-lg font-semibold uppercase text-zinc-900">
          Roles destacados:
        </h2>
        <ul className="mt-2 list-inside list-disc text-zinc-700">
          <li>
            Participación de diversos roles junto al Ballet del Parque del
            Conocimiento en obras como: Majísimo, Bayadera, Quijote, Lago de los
            Cisnes, Giselle, La Fille Mal Gardée, Príncipe Igor, Chopiniana,
            Paquita, Último tango, Cascanueces, entre otros.
          </li>
          <li>
            Principal en Pas de Deux Carnaval en Venecia - Noviembre 2014.
          </li>
          <li>
            Invitada especial en Gala Homenaje 40 años de la Escuela Nacional de
            Danzas "Aida V. Mastrazzi". Interpretando pas de deux Carnaval en
            Venecia - 2014.
          </li>
          <li>
            Invitada especial en Gala de Ballet en Formosa, dirigida por el
            Mtro. Alexander Ananiev. Interpretando rol de Hada de Azúcar en
            Cascanueces y solista principal de la obra Markitenka - 2015.
          </li>
          <li>
            Solista en pas de deux La Fille Mal Gardée - Abril y Mayo de 2015.
          </li>
          <li>
            Solista como Moyna en Giselle, Gala junto a Marianela Nuñez - Julio
            de 2015.
          </li>
          <li>
            Invitada Gala de Ballet Rosario junto a Franco Cadelago, rol de Hada
            de Azúcar - Diciembre de 2015.
          </li>
          <li>Solista Chopiniana - Abril de 2016.</li>
          <li>
            Invitada especial Gala de Ballet en Formosa para la obra Paquita,
            2016.
          </li>
          <li>Solista "Oblivion", obra Último Tango - 2017.</li>
          <li>
            Invitada especial Gala de Ballet en Formosa para la obra Don
            Quijote, actuando en el rol de Kitry de primera bailarina - 2017.
          </li>
          <li>
            Invitada especial Gala de Ballet en Santo Tomé, Corrientes,
            interpretando Hada de Azúcar en obra Cascanueces - 2018.
          </li>
          <li>
            Actuación como primera bailarina en el ballet del Parque del
            Conocimiento, en la obra Cascanueces - 2021.
          </li>
          <li>
            Repositora coreográfica e invitada Gala de Ballet en Santo Tomé en
            el rol de Odette del Ballet Lago de los Cisnes, 2022.
          </li>
        </ul>
      </section>

      <div className="grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold uppercase text-zinc-900">
            Actividades, cursos y premios obtenidos:
          </h2>
          <ul className="mt-2 list-inside list-disc text-zinc-700">
            <li>Integrante del Ballet Infanto Juvenil de Paraná.</li>
            <li>
              Certamen "Danzamerica" realizado en la cuidad de Villa Carlos Paz
              - Córdoba. Premios: 1º Premio: por el solista "Al Ritmo del 2x4" -
              danza libre. 2º Premio: por el solista "Variación de Nikia" -
              clásico de repertorio.
            </li>
            <li>
              Ganadora del 1° Premio Nacional con variación clásica en Troyes,
              Francia. Ganadora del 3° Premio Nacional en Concours National de
              Danse en Francia.
            </li>
            <li>
              Ganadora del 2° Premio categoría Profesional en Preselección
              Internacional concurso VKIBC e invitación para la final en New
              York del concurso VKIBC.
            </li>
            <li>
              Semifinalista en Concurso VKIBC Final New York, obteniendo el 16vo
              puesto general.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold uppercase text-zinc-900">
            Cursos, seminarios y profesores
          </h2>
          <ul className="mt-2 list-inside list-disc text-zinc-700">
            <li>
              Curso de verano en la Fundación Julio Bocca (2008-2011-2012).
            </li>
            <li>
              Curso de verano en la Asociación Arte y Cultura, Buenos Aires
              (2009-2010).
            </li>
            <li>
              Cursos y clases con los profesores: Susana Gómez, Katty Gallo,
              Cecilia Kerche, Raúl Candal, Lidia Segni, Claudio Longo, Stella
              Saladino, Sylvia Bazilis, Ricardo Rivas, Daniel Negroni, Miguel
              Bonin, José Luis Lozano, María Elizabeth Sture, Raquel Rosetti,
              Atilio Labis, Catherine Goffinon, Anissa Serai, Vivien Visentin,
              Floriane Blitz, Adolfo Burgos, Laura Fiorucci, David Sturmer,
              Andrea Carolina Escobar, Rodolfo Romero, Mario Silva, Julieta
              Saravia.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold uppercase text-zinc-900">
            Ballet
          </h2>
          <iframe
            className="w-full md:w-[560px]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PL88f1UkiBz9b68_yz3BHRUJv8732TVH3E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      <div className="mx-2 my-8 bg-rose-200 p-8 lg:my-10 lg:mx-20 lg:p-20">
        <p className="text-xl font-semibold">
          Consultar disponibilidad y presupuesto para:
        </p>
        <ul className="mt-4">
          <li>Participaciones en Galas como bailarina.</li>
          <li>
            Clases y seminarios de ballet (técnica, yoga, barra à terre…).
          </li>
          <li>Reposiciones coreográficas.</li>
        </ul>
      </div>
    </div>
  );
}
