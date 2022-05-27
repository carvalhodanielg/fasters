import React, { useEffect, useState } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Camisaria from './components/Camisaria';
import Depoimento from './components/Depoimento';
import Diferencial from './components/Diferencial';
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

    <div style={{height: '700px'}}>

    </div>
    </>
  );
}

export default App;
