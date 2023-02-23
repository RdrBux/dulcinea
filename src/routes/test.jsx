import img from '../assets/about-img.jpg';

export default function Test() {
  return (
    <div className="container grid gap-8 py-20">
      <div className="flex items-center gap-20">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-6xl font-semibold uppercase lg:text-5xl xl:text-7xl">
            Danza clásica
          </h1>
          <p className="text-zinc-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            aspernatur facilis illum quisquam dicta similique recusandae nisi
            ullam voluptates perferendis mollitia soluta, quo quae dolor
            possimus. Sunt quis ex eius!
          </p>

          <section>
            <h2 className="text-lg font-semibold uppercase text-zinc-900">
              Actividad profesional
            </h2>
            <ul className="mt-2 text-zinc-700">
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
            </ul>
          </section>
        </div>
        <img className="" src={img} alt="" />
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

      <div className="grid grid-cols-2 gap-10">
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
      </div>

      <p className="mx-20 my-10 bg-rose-200 p-20 font-semibold">
        Consultar disponibilidad y presupuesto para: Participaciones en Galas
        como bailarina. Clases y seminarios de ballet (técnica, yoga, barra à
        terre…) Reposiciones coreográficas.
      </p>
    </div>
  );
}
