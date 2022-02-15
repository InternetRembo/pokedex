import {MainAPI} from "../api/api";
import axios from "axios";

const GET_POKEMON_ITEM = " GET_POKEMON_ITEM"
const GET_NEXT_PAGE_URL = "GET_NEXT_PAGE_URL"
const GET_MORE_POKEMONS = "GET_MORE_POKEMONS"

let initialState = {
    pokemonItems: {},
    pokemonInfo: {},
    nextPageUrl: '',
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_ITEM : {
            return {...state, pokemonItems: action.pokemonItems, pokemonInfo: action.pokemonInfo}

        }
        case GET_MORE_POKEMONS : {
            console.log(state.pokemonItems)
            return {...state, pokemonItems: [...state.pokemonItems, action.newPokemonItems]}

        }
        case GET_NEXT_PAGE_URL : {
            return {...state, nextPageUrl : action.url }

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
export const getNextPageUrlAC = (newUrl) => {
    return {
        type: GET_NEXT_PAGE_URL,
        url : newUrl


    }
}


export const GetPokemonItemsTC = () => async (dispatch) => {

    let pokemonItems = await MainAPI.getPokemons();
    let pokemonInfo = await Promise.all(pokemonItems.results.map((item) => {
        return  axios.get(item.url).then((response) => response.data);///???
    })).then((data)=> data)

    dispatch(GetPokemonItemAC(pokemonItems, pokemonInfo))

}


export const loadMorePokemonsTC = (next) => async (dispatch) => {     /// спроьбувати переписати по аналогії з loadMore
    let response = await MainAPI.loadMore(next).then((response) => response.data);

    dispatch(loadMorePokemonsAC(response))
}


export default pokemonReducer
