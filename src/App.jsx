import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="overflow-x-hidden bg-white font-sans">
      <NavBar />
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
