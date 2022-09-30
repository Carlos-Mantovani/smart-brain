import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageUrlForm from './components/ImageUrlForm/ImageUrlForm';
import Rank from './components/Rank/Rank';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <Logo />
      <Rank />
      <ImageUrlForm />

      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
