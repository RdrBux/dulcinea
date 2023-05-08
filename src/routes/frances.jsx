import { useEffect } from 'react';
import paris from '../assets/paris.jpg';

export default function Frances() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container grid gap-8 py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-24">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-6xl font-semibold uppercase lg:text-5xl xl:text-7xl">
            Francés
          </h1>
          <section className="grid gap-2 text-zinc-700">
            <h2 className="text-lg font-semibold uppercase text-zinc-900">
              Profesora de francés y francés aplicado a la danza.
            </h2>
            <p>
              Tengo Diploma Delf B2 en Université de Reims, estudios
              universitarios en Francia y Bélgica y viví un año y medio en París
              y Troyes, Francia. Actualmente me encuentro dando clases a
              diversos grupos de forma online y presencial, siempre
              personalizadas.
            </p>
            <p>
              Como profesora, mi forma de trabajo se adapta a las necesidades
              del alumno: francés para viajar, para rendir examen internacional,
              apoyo escolar, estudiantes de cocina y danzas, y por el puro
              placer de aprender este hermoso idioma.
            </p>
            <p>
              Se trabaja con producción oral y escrita, comprensión de textos y
              audios, vocabulario general o específico, viajes.
            </p>
            <p>Como profesora de francés aplicado a la danza di clases en:</p>
            <ul className="list-inside list-disc">
              <li>Cursos de Perfeccionamiento Docente de Luis Miguel Zuñiga</li>
              <li>Cursos de francés en Artistas Onlive</li>
              <li>Academia de Ballet de Moscú</li>
              <li>
                Escuela de danzas de Monterrey, México. Danzaira, Perú. Adrogué,
                Buenos Aires. Passión Ballet, Corrientes.{' '}
              </li>
            </ul>
          </section>
        </div>

        <img className="lg:w-4/12" src={paris} alt="" />
      </div>

      <section className="grid gap-2 text-zinc-700">
        <h2 className="text-lg font-semibold uppercase text-zinc-900">
          Creadora de Francés aplicado a la Danza
        </h2>
        <p>
          El conocimiento de la terminología de la danza clásica y su correcta
          utilización es de suma importancia en esta disciplina. Al bailar,
          constantemente estamos recibiendo órdenes, ya sea en la clase o en el
          ensayo, para ejecutar movimientos. Estos enunciados se realizan en el
          idioma francés. Este idioma o "lenguaje de la danza" permite
          enriquecer la cultura del bailarín y su dominio es esencial para
          utilizarla en variadas situaciones que su entorno exige.
        </p>
        <p>
          La internacionalización del lenguaje de la danza permite que un
          profesor de cualquier parte del mundo pueda dictar una clase y ser
          comprendido por todos al utilizar la denominación francesa de los
          ejercicios, característica que anima a que el estudio de la fonética y
          gramática de esta lengua sea práctico y de vital importancia debido al
          gran movimiento de alumnos, bailarines y maestros, permitiendo una
          correcta comunicación.
        </p>
        <p>
          En el estudio del francés aplicado a la danza, se aprende el
          significado de los pasos y los movimientos, cómo escribirlos y
          pronunciarlos. Pero algunas veces nos sucede que el nombre de un paso
          y su ejecución varían según el maestro que dicte la clase. Entonces,
          debido a la existencia de diferentes escuelas de ballet me parece
          importante indagar en su real significado y su interpretación. Con
          esto me refiero a la búsqueda del significado y que quiero transmitir
          cuando realizo el movimiento.
        </p>
      </section>

      <p className="mx-2 my-8 w-fit bg-rose-200 p-8 text-xl font-semibold lg:my-10 lg:mx-20 lg:p-20">
        Consultar disponibilidad y presupuesto para clases individuales y
        grupales.
      </p>
    </div>
  );
}
