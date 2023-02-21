import { HashLink } from 'react-router-hash-link';

export default function LiMenu({
  name,
  link,
  currentSection,
  hover,
  setHover,
}) {
  const active = hover === link;

  return (
    <li
      onMouseEnter={() => setHover(link)}
      onMouseLeave={() => setHover(currentSection)}
      className="flex items-center justify-center"
    >
      <HashLink className="peer" to={'/#' + link}>
        <div className="flex w-screen items-center justify-center gap-8">
          <div
            className={`h-[1px] w-full bg-rose-300 opacity-0 duration-300 ${
              active ? 'opacity-100' : ''
            }`}
          ></div>
          <div
            className={`whitespace-nowrap uppercase duration-300 ${
              active ? 'text-5xl text-white' : ''
            }`}
          >
            {name}
          </div>
          <div
            className={`h-[1px] w-full bg-rose-300 opacity-0 duration-300 ${
              active ? 'opacity-100' : ''
            }`}
          ></div>
        </div>
      </HashLink>
    </li>
  );
}

/* export default function LiMenu({ name, link, active }) {
  return (
    <li className="group flex items-center justify-center">
      <a className="peer" href={'#' + link}>
        <div className="flex w-screen items-center justify-center gap-8">
          <div className="h-[1px] w-full bg-rose-300 opacity-0 duration-300 group-hover:opacity-100"></div>
          <div className="whitespace-nowrap uppercase duration-300 group-hover:text-5xl group-hover:text-white">
            {name}
          </div>
          <div className="h-[1px] w-full bg-rose-300 opacity-0 duration-300 group-hover:opacity-100"></div>
        </div>
      </a>
    </li>
  );
} */
