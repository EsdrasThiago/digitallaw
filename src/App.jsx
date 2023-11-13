import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import Icms from './pages/Icms'
import DiferencialIcms from './Icms/DiferencialIcms'
import ImpactosSimples from './Icms/ImpactosSimples'
import ModulacaoProposta from './Icms/ModulacaoProposta'
import Improbidade from './pages/Improbidade'
import ImprobidadeAdministrativa from './Improbidade/ImprobidadeAdministrativa'
import ImprobidadeAdministrativaLei from './Improbidade/ImprobidadeAdministrativaLei'
import ImprobidadePenas from './Improbidade/ImprobidadePenas'

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
      <Route exact path="/improbidadeadministrativa" element={<ImprobidadeAdministrativa />} />
      <Route exact path="/improbidadeadministrativa2" element={<ImprobidadeAdministrativaLei />} />
      <Route exact path="/improbidadepenas" element={<ImprobidadePenas />} />
    </Routes>
  )
}

export default App
