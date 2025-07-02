import { useState } from 'react'
import SecaoAutoridade from './SecaoAutoridade/SecaoAutoridade.jsx'
import Menu from './Menu/Menu.jsx'
import SobreNos from './SobreNos/SobreNos.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<SecaoAutoridade />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Routes>
      </BrowserRouter>
      <SobreNos />
    </>
  );
}

export default App;
