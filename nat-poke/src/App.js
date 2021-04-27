import allPoke from './pages/allPoke'
import favPoke from './pages/favPoke'
import Navbar from './components/Navbar'

import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
// import {BrowserRoute} from 'react-router-dom'
import { Route, Redirect } from 'react-dom'
import userEvent from '@testing-library/user-event';

import {UserContext} from './context/UserContext'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

const [user, setUser] = useState({})
const [favPoke,setFavPoke] = useState([])
const [favPokeNames, setFavPokeNames] = useState([])
const [allPoke, setallpoke] = useState([])
const { userState, fetchUser } = useContext(UserContext)

useEffect(fetchUser, [])

const fetchPoke = async () => {
  const userId = localStorage.getItem('userId')
  try {
    if(user.id){

    let response = axios.get('http://localhost:3001/favPoke')
    setFavPoke(response.data.favPoke)
    }

  let names = []
  for(let poke of response.data.favPoke) {
    names.push(poke.name)
  }
  setFavPokeNames(names)
} catch (error) {
  console.log(error)
}

useEffect(() => {
  fetchSavedPokemon()
},[])

const savePoke = async (pokeName) => {
  const userId = localStorage.getItem('userId')
  try {
    let res = await axios.post('http://localhost:3001/favPokemon', {
      name: pokeName
    })
    fetchSavedPoke()
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

const isFave = (currentPokeName) => {

  if(favPokeNames.includes(currentPokeName)) {
    return true
  }
  return false
}

  const deletePoke = async (pokeName) => {
    try {
      let res = await axios.delete(`http://localhost:3001/favPokemon/${pokeName}`)
      console.log(res)
      fetchSavedPoke()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <h1> POKEDEX </h1>

      <Navbar user={user} setUser={setUser} />
      <Route
          path="/"
          exact
          component={Home}
          />

        <Route
          path="/signup"
          render={()=>{
            if(user.id) {
              return <Redirect to ="/pokemon" />
            } else{
              return <Signup setUser={setUser} />
            }
          }}
        />

        <Route
        path="/login"
        render={()=>{
          if(user.id){
            return <Redirect to="/pokemon" />
          }else{
            return <Login setUser={setUser} />
          }
        }}
      />

      <Route
        exact path = "/pokemon"
        render={() =>
          <AllPokemon
          savePokemon = {savePoke}
          isFave = {isFave}
          deletePokemon ={deletePoke}
          />
        }
      />
      <Route
      exact path = "/favorites"
      render={() =>
        <FavPokemon
        favPokemon ={favPoke}
        isFave = {isFave}
        deletePokemon ={deletePoke}
        />
        }
      />

    </div>
  );
  </div>
}
}



export default App
