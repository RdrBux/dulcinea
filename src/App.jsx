import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Work from './components/Work';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    window.onscroll = () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          setCurrentSection(section.getAttribute('id'));
        }
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-white font-sans">
      {showMenu && (
        <Menu controlMenu={setShowMenu} currentSection={currentSection} />
      )}
      <NavBar controlMenu={setShowMenu} />
      <Hero />
      <AboutMe />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
