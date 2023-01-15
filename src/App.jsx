import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Work from './components/Work';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="overflow-x-hidden bg-white font-sans">
      {showMenu && <Menu controlMenu={setShowMenu} />}
      <NavBar controlMenu={setShowMenu} />
      <Hero />
      <AboutMe />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
