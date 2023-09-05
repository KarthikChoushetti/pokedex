// css imports
import './Pokedex.css'
import Search from '../Search/Search.jsx'
import PokemonList from '../PokemonList/PokemonList'
function Pokedex(){
    return(
<>
<div className='Pokedex-wrapper'>
    <h1>POKEDEX</h1>
        <Search/>
        <PokemonList/>
        
</div>
</>

    )
}
export default Pokedex