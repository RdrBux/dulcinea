import LiMenu from './LiMenu';
import BgMenu from '../assets/menu-bg.jpg';
import { useState, useEffect } from 'react';

export default function Menu({ showMenu, controlMenu, currentSection }) {
  const [hover, setHover] = useState(currentSection);

  useEffect(() => {
    setHover(currentSection);
  }, [currentSection]);

  return (
    <div
      className={`fixed inset-0 z-40  h-screen w-screen bg-black ${
        showMenu ? 'block' : 'hidden'
      }`}
    >
      <img src={BgMenu} alt="" className="h-full object-cover" />
      <div className="absolute inset-0 z-50 flex  flex-col items-center justify-center bg-transparent">
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
          className="grid grid-rows-[repeat(5,80px)] text-center font-serif text-4xl text-white/75"
        >
          <LiMenu
            name="Inicio"
            link="inicio"
            hover={hover}
            setHover={setHover}
            currentSection={currentSection}
          />
          <LiMenu
            name="Sobre mí"
            link="sobre-mí"
            hover={hover}
            setHover={setHover}
            currentSection={currentSection}
          />
          <LiMenu
            name="Trabajo"
            link="trabajo"
            hover={hover}
            setHover={setHover}
            currentSection={currentSection}
          />
          <LiMenu
            name="Tienda"
            link="tienda"
            hover={hover}
            setHover={setHover}
            currentSection={currentSection}
          />
          <LiMenu
            name="Contacto"
            link="contacto"
            hover={hover}
            setHover={setHover}
            currentSection={currentSection}
          />
        </ul>
      </div>
    </div>
  );
}
