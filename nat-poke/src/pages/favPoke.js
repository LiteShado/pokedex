
import PokemonList from '../components/PokemonList'
const favPoke = (props) => {
    return (
        <div>
            <h1>Favorite Pokemon!!</h1>
            <PokemonList
            allPokemon={props.favPoke}
            isFave = {props.isFave}
            deletePokemon ={props.deletePoke}
            />
        </div>
    )
}
export default favPoke
