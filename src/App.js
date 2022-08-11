import './App.css';
import Header from './components/Header/Header';
import DownloadSection from './components/Hero/DownloadSection';
import Experience from './components/Hero/Experience';
import Footer from './components/Hero/Footer';
import Hero from './components/Hero/Hero';
import Search from './components/Hero/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Hero/>
      <Experience/>
      <Search/>
      <DownloadSection/>
      <Footer/>
    </div>
  );
}

export default App;
