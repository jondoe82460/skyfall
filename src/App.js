import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <Team />
        <Footer />
      </main>
    </div>
  );
}

export default App;