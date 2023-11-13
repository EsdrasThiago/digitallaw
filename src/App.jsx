import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import Icms from './pages/Icms'
import DiferencialIcms from './Icms/DiferencialIcms'
import ImpactosSimples from './Icms/ImpactosSimples'
import ModulacaoProposta from './Icms/ModulacaoProposta'
import Improbidade from './pages/Improbidade'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/icsm" element={<Icms />} />
      <Route exact path="/icsmdiferencial" element={<DiferencialIcms />} />
      <Route exact path="/icsmimpactos" element={<ImpactosSimples />} />
      <Route exact path="/icsmmodulacao" element={<ModulacaoProposta />} />
      <Route exact path="/improbidade" element={<Improbidade />} />
    </Routes>
  )
}

export default App
