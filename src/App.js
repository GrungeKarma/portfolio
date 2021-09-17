import NavBar from './components/UI/NavBar';
import Footer from './components/UI/Footer';
import './App.css';
import Hero from './components/UI/Hero';
import Bio from './components/UI/Bio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Bio />
      <Footer />
    </div>
  );
}

export default App;
