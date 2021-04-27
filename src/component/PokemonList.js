import axios from 'axios'
import {useEffect, useState} from 'react'
// import PokemonList from '../component/PokemonList'

const PokemonList = (props) => {
    return (
    <div>
        {props.filteredSearch ?
        props.filteredResults.map((poke, i) = (
            <div
            key={i}
            className="singlePokemon">
                <h1>{pokemon.name}</h1>
            </div>
        ))
        :
        props.allPokemon.map((poke, i) => (
                <div
                key={i}
                className="singlePokemon">
                <h1>{poke.name}</h1>
                </div>
        ))
            }
    </div>


)

export default PokemonList
