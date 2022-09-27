import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageUrlForm from './components/ImageUrlForm/ImageUrlForm';
import Rank from './components/Rank/Rank';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageUrlForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
