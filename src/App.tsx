import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <div id="home" className="body mx-auto pt-6 md:pt-8">
        <Home />
        <Experience />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
