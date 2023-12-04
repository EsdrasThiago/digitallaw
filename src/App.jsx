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
import ImprobidadeDiferenca from './Improbidade/ImprobidadeDiferenca'
import ImprobidadeNicolau from './Improbidade/ImprobidadeNicolau'
import ImprobidadeLula from './Improbidade/ImprobidadeLula'
import ImprobidadeDilma from './Improbidade/ImprobidadeDilma'
import ImprobidadeEspecialista from './Improbidade/ImprobidadeEspecialista'
import AlunosIcms from './Icms/AlunosIcms'
import EspecialistaIcms from './Icms/EspecialistaIcms'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/icsm" element={<Icms />} />
      <Route exact path="/icsmdiferencial" element={<DiferencialIcms />} />
      <Route exact path="/icsmimpactos" element={<ImpactosSimples />} />
      <Route exact path="/icsmmodulacao" element={<ModulacaoProposta />} />
      <Route exact path="/icsmalunos" element={<AlunosIcms />} />
      <Route exact path="/icsmespecialista" element={<EspecialistaIcms />} />
      <Route exact path="/improbidade" element={<Improbidade />} />
      <Route exact path="/improbidadeadministrativa" element={<ImprobidadeAdministrativa />} />
      <Route exact path="/improbidadeadministrativa2" element={<ImprobidadeAdministrativaLei />} />
      <Route exact path="/improbidadepenas" element={<ImprobidadePenas />} />
      <Route exact path="/improbidadediferenca" element={<ImprobidadeDiferenca />} />
      <Route exact path="/improbidadenicolau" element={<ImprobidadeNicolau />} />
      <Route exact path="/improbidadelula" element={<ImprobidadeLula />} />
      <Route exact path="/improbidadedilma" element={<ImprobidadeDilma />} />
      <Route exact path="/improbidadeespecialista" element={<ImprobidadeEspecialista />} />
    </Routes>
  )
}

export default App
