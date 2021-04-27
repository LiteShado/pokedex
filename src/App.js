import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
// import {BrowserRoute} from 'react-router-dom'
import { Route } from 'react-dom'


function App() {


const [poke, setPoke] = useState([])

const fetchPoke = axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
    setPoke(poke.name)
  })

  .catch((error) => {
    console.log(error)
  })

  useEffect(fetchPoke, [])

  return (
    <div className="App">
      <h1> POKEDEX </h1>

      return (
      <div>
        <Route
          path="/"
          exact
          render={() => {
          return <allPoke poke={poke}/>
          }}
          />
        <Route
          path="/ships/:id"
          render={(routing) => {
            console.log(routing);
              return <favPoke id={routing.match.params.id} />

          }}
        />
    </div>
  )
    </div>
  );
}


export default App
