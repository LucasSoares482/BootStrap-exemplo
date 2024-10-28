import Navbar from './components/Navbar';
import Slides from './components/Slides';
import Features from './components/Features';

import Reserva from './pages/Reserva';
import React, { useState } from 'react';

function App() {
  const [pagina, setPagina] = useState('Home');
  return (
    <div>
      <Navbar pagina={pagina} selecionaPagina={setPagina} />
      {pagina == 'Home' && (
        <div>
          <Slides />
          <Features />
        </div>
      )}

      {pagina == 'Reserva' && <Reserva />}

      <p>{pagina}</p>
    </div>
  );
}

export default App;
