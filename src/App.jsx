import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import Icms from './pages/Icms'
import Uberizacao from './pages/Uberizacao'
import Improbidade from './pages/Improbidade'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/icsm" element={<Icms />} />
      <Route exact path="/improbidade" element={<Improbidade />} />
      <Route exact path="/uberizacao" element={<Uberizacao />} />
    </Routes>
  )
}

export default App
