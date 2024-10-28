import './App.css';
import Navbar from './Component/Navbar';
import FeaturesSection from './Component/Features';
import HeroSection from './Component/Hero';
import SecretSantaForm from './Component/SantaForm';
import Footer from './Component/Footer';
import bgImage from '../src/Asset/Bg-img.png'

function App() {
  return (
    <div className="App">
       <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover bg-center min-h-screen text-white"
      >
      <Navbar />
      <HeroSection />
    </div>
      <SecretSantaForm/>
      <FeaturesSection/>
      <Footer/>
    </div>
  );
}

export default App;
