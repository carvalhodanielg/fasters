import React, { useEffect, useState } from 'react';
import About from './components/About';
import Alfaiataria from './components/Alfaiataria';
import Banner from './components/Banner';
import Camisaria from './components/Camisaria';
import Contato from './components/Contato';
import Depoimento from './components/Depoimento';
import Depoimentos from './components/Depoimentos';
import Diferencial from './components/Diferencial';
import Footer from './components/Footer';
import Header from './components/Header';
import Promo from './components/Promo';



function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Depoimento/>
    <Diferencial/>
    <Promo/>
    <Camisaria/>
    <Alfaiataria/>
    <Depoimentos/>
    <Contato/>
    <Footer/>
    </>
  );
}

export default App;
