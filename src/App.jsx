import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './routes/home';
import Test from './routes/test';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}
