import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={ <Home />}/>
      <Route exact path="/game" element={ <Game />}/>
    </Routes>
  )
}

export default App
