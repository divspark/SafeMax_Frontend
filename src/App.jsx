import React from 'react';
import Features from './Components/Features';
import Header from './Components/Header';
import Contact from './components/Contact';
import Presentation from './components/Presentation';
import About from './components/about';
import AboutImage from './images/Frame 19.png';
import AboutImage1 from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About image={AboutImage} title='Comes With All You Need For Daily Life' button='Get The App' />
      <Presentation />
      <About image={AboutImage1} title='Comes With All You Need For Daily Life' button='Download' />
      <Contact />
    </div> 
  );
}

export default App;
