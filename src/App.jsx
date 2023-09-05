
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Pokedex from './components/Pokedex/Pokedex.jsx'
import PokemonDetails from './components/Pokemondetails/PokemonDetails'
function App() {


  return (
    <Routes>
<Route path="/" element={ <Pokedex/>}/>
<Route path="/pokemon/:id" element={ <PokemonDetails/>}/>
<Route path="*"  element={<h1>Not found</h1>}/>
    </Routes>
  

  )
}

export default App
