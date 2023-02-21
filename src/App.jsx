import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Home from './routes/home';
import Test from './routes/test';

export default function App() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');

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
    <div className="overflow-x-hidden bg-white font-sans">
      {showMenu && (
        <Menu controlMenu={setShowMenu} currentSection={currentSection} />
      )}
      <NavBar controlMenu={setShowMenu} />
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <Home
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              currentSection={currentSection}
            />
          }
        />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}
