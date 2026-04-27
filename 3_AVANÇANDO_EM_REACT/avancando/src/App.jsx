import { useState } from 'react';
import reactLogo from './assets/react.svg';
// 2 - imagem assets
import noite from './assets/reactimg2.png';

import './App.css'

function App() {
  return (
      <div className='App'>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="../public/reactimg22.avif" alt="Alguma imagem" />

        {/* 2 - imagem em assets */}

        <img src={noite} alt="Outra imagem" />

      </div>
  );
}

export default App
