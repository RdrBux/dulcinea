import { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Work from '../components/Work';
import Store from '../components/Store';

export default function Home({ setCurrentSection }) {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    window.onscroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          setCurrentSection(section.getAttribute('id'));
        }
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <Work />
      <Store />
    </>
  );
}
