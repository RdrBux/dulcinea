export default function H2({ children, wrap = true }) {
  return (
    <h2
      className={`-mt-8 font-serif text-[16vw] font-semibold uppercase sm:text-6xl lg:text-5xl xl:text-7xl ${
        wrap ? '' : 'whitespace-nowrap'
      }`}
    >
      {children}
    </h2>
  );
}
