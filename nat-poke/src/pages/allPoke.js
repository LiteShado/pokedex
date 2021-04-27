import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import filterbar from './component/filterbar'

const allPoke = async (props) => {

    const [allpoke, setallpoke] = useState([])
    const [search, setSearch] = useState('')
    const [filteredSearch, setFilteredSearch] = useState([])
    const [filteredResults, setFilteredResults] = useState([])


    fetchAllPokemon = async () => {
        let response = await axios.get('https://pokeapit.co.api/v2/pokemon?limit=20&offset=200')
        setAllPokemon(response.data.results)

    }

    useEffect(() => {
        fetchAllPokemon()
    })

    const filter = (term) => {
        let filtered = allPokemon.filter((item) => {
            return item.name.includes(term)
        })
        setFilteredSearch(filtered)}

    useEffect(() => {
        filter(filteredSearch)
    }, [filteredSearch])

 return (
     <div className = "allPokemon">
            <h1>All Pokemon</h1>
            <filterbar
            filteredSearch = {filteredSearch}
            setFilteredSearch = {setFilteredSearch}
            />

            <PokemonList
            allPokemon = {allPokemon}
            />
        </div>
 )


}

export default allPoke
