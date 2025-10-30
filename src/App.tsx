import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Formations from './pages/Formations';
import Admission from './pages/Admission';
import Etudiants from './pages/Etudiants';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/etudiants" element={<Etudiants />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
