export default function H2({ children, wrap = true }) {
  return (
    <h2
      className={`-mt-8 font-serif ${
        navigator.userAgent.includes('Instagram') ? 'text-5xl' : 'text-6xl'
      } font-semibold uppercase lg:text-5xl xl:text-7xl ${
        wrap ? '' : 'whitespace-nowrap'
      }`}
    >
      {children}
    </h2>
  );
}
