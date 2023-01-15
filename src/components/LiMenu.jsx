export default function LiMenu({ name, link }) {
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
}
