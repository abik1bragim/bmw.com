import './App.css';
import Banner2 from './components/Banner2';
import BannerWrappere from './components/BannerWrappere';
import National from './components/National';
import Navbar from './components/Navbar';
import Wrapper3 from './components/Wrapper3';
import Collection from './components/Collection';
import CollMedia from './components/CollMedia';
import Small from './components/Small';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner2 />
      <Wrapper3 />
      <BannerWrappere />
      <National />
      <Collection />
      <CollMedia />
      <Small />
      <Footer />
    </div>
  );
}

export default App;
