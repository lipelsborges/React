import { useState } from 'react';
import reactLogo from './assets/react.svg';
// 2 - imagem assets
import noite from './assets/reactimg2.png';

//3 - useState

import Data from '../components/Data';

import './App.css'

function App() {
  return (
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="../public/reactimg22.avif" alt="Alguma imagem" />
        
        {/* 2 - imagem em assets */}

        <img src={noite} alt="Outra imagem" />

        {/* 3 - useState */}
          <Data/>
      </div>
  );
}

export default App
