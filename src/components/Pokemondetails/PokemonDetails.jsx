// css imports
import './PokemonDetails.css'
import { useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
export default function PokemonDetails(){
    const {id}=useParams()     //to get acess to hte url params 
    const POKEMON_DETAILS_URL='https://pokeapi.co/api/v2/pokemon/'
    const[pokemon,setPokemon]=useState(null)

    async function downloadPokemon(){
        const response=await axios.get(POKEMON_DETAILS_URL+id)
        const pokemon=response.data
        setPokemon({
            name:pokemon.name,
            height:pokemon.height,
            weight:pokemon.weight,
            image:pokemon.sprites.other.dream_world.front_default,
            types:pokemon.types
        })
    }
    useEffect(()=>{
        downloadPokemon()
},[])
    return(
        <>
        <h1 className='pokedex-rederict'>

    <Link to='/'>
        <span>POKEDEX</span>
    </Link>
        </h1>
      {pokemon &&  <div className='Pokemon-details-wrapper'>
        <div className='pokemon-name'>
            {pokemon.name}
        </div>
        <div className='pokemon-image'>
            <img src={pokemon.image}  />
        </div>
        <div className='pokemon-height'>
            height:{pokemon.height}
            </div>
            <div className='pokemon-weight'>

            weight:{pokemon.weight}
            </div>
       
        <div className='pokemon-types'>
        <h1>Type</h1>{pokemon.types.map(t=><span className='type' key={t.type.name}>{t.type.name}</span>)}
        </div>
        </div> }
        </>
    )
}