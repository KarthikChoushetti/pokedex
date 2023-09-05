// css imports 
import './PokemonList.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'
function PokemonList(){
    const Default_url="https://pokeapi.co/api/v2/pokemon"
    const [pokemonList,setPokemonList]=useState([])
    const [pokedexUrl,setPokedexUrl]=useState(Default_url)
   const [nextUrl,setNextUrl]=useState(Default_url)
   const [prevUrl,setPrevUrl]=useState(Default_url)
    async function downloadPokemon(){
        const response=await axios.get(pokedexUrl?pokedexUrl:Default_url)
        const pokemonResults=response.data.results    // array of pokemons
        setNextUrl(response.data.next)
        setPrevUrl(response.data.previous)
        const pokemonPromise=pokemonResults.map((pokemon)=> axios.get(pokemon.url))
        const pokemonListData=await axios.all(pokemonPromise)
        console.log(pokemonListData)
        const pokemonFinalList=pokemonListData.map((pokemonData)=>{
           
            const pokemon=pokemonData.data
            return{
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                types:pokemon.types
            }
        })
        console.log(pokemonFinalList)
        setPokemonList(pokemonFinalList)
        // console.log(response.data)
    }
    useEffect(()=>{
      downloadPokemon()
    },[pokedexUrl])  //[] in this we can add variable so that if that variable is changed the components get rerender
    return(
    <div className='pokemon_list_wrapper'>
        <div >
            <h1>Pokemon List</h1>
            </div>
            <div className="page-controls">
                <button onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
                <button onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
            </div>
        <div className='pokemon-list'>

        {pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
        </div>
    </div>)
}
export default PokemonList