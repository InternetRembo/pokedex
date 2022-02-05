import {MainAPI} from "../api/api";
import axios from "axios";

const GET_POKEMON_ITEM = " GET_POKEMON_ITEM"
const GET_POKEMON_INFO = "GET_POKEMON_INFO"
const GET_MORE_POKEMONS = "GET_MORE_POKEMONS"

let initialState = {
    pokemonItems: {},
    pokemonInfo: {},
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_ITEM : {
            return {...state, pokemonItems: action.pokemonItems, pokemonInfo: action.pokemonInfo}

        }
        case GET_MORE_POKEMONS : {
            return {...state, pokemonItems: [...state.pokemonItems, action.newPokemonItems]}

        }


        default :
            return state
    }

}
export const GetPokemonItemAC = (pokemonItems, pokemonInfo) => {
    return {
        type: GET_POKEMON_ITEM,
        pokemonItems: pokemonItems,
        pokemonInfo: pokemonInfo,

    }
}
export const loadMorePokemonsAC = (response) => {
    return {
        type: GET_MORE_POKEMONS,
        newPokemonItems: response,


    }
}


export const GetPokemonItemsTC = () => async (dispatch) => {

    let pokemonItems = await MainAPI.getPokemons();
    let pokemonInfo = await Promise.all(pokemonItems.results.map((item) => async () => {
        await axios.get(item.url).then((response) => response.data);///???
    })).then()
    console.log(pokemonInfo)
    dispatch(GetPokemonItemAC(pokemonItems, pokemonInfo))

}


export const loadMorePokemonsTC = (next) => async (dispatch) => {
    let response = await MainAPI.loadMore(next).then((response) => response.data);

    dispatch(loadMorePokemonsAC(response))
}


export default pokemonReducer
