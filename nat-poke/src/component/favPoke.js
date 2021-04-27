import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import filterbar from './component/filterbar'
import navbar from './component/navbar'
import allPoke from './pages/allPoke'


const favPoke = (props) => {

    const [poke, allPokey] = useState({})

    const fetchPokey = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
        .then((response) => {
            setPokey(response.data.result.name)
        })
    }
    useEffect(fetchPokey, [props])



    return (
        <div>
            {poke.results} === undefined ?
            <p>Loading...</p>
            :
            <div>
            {poke.results.name}
            {poke.results.url}

            <Link className="testing" to="/">Back to All POKEMON</Link>
            </div>

        </div>


    )
}

export default favPoke
