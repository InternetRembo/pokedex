import { MainAPI } from "../api/api";
import axios from "axios";

const GET_POKEMON_ITEM = " GET_POKEMON_ITEM";
const GET_NEXT_PAGE_URL = "GET_NEXT_PAGE_URL";
const GET_MORE_POKEMONS = "GET_MORE_POKEMONS";
const SHOW_STATS_TABLE = "SHOW_STATS_TABLE";
const UPDATE_FILTER = "UPDATE_FILTER";
const SHOW_ALL_FILTERS = "SHOW_ALL_FILTERS";
const SHOW_SORT_OPTION = 'SHOW_SORT_OPTION';
const SORT_POKEMON_LIST = "SORT_POKEMON_LIST"

let initialState = {
  pokemonItems: [],
  pokemonInfo: [],
  nextPageUrl: "",
  pokemonStats: null,
  typeFilter: null,
  showFilters: false,
  showSortBloc:false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_ITEM: {
      return {
        ...state,
        pokemonItems: action.pokemonItems,
        pokemonInfo: action.pokemonInfo,
      };
    }
    case GET_MORE_POKEMONS: {
      return {
        ...state,
        pokemonItems: [...state.pokemonItems, ...action.newPokemonItems],
        pokemonInfo: [...state.pokemonInfo, ...action.newPokemonInfo],
      };
    }
    case GET_NEXT_PAGE_URL: {
      return { ...state, nextPageUrl: action.url };
    }
    case SHOW_STATS_TABLE: {
      return { ...state, pokemonStats: action.pokemonStats };
    }

    case UPDATE_FILTER: {
      return { ...state, typeFilter: action.filter };
    }

    case SHOW_ALL_FILTERS: {
      return { ...state, showFilters: action.value };
    }
    case SHOW_SORT_OPTION: {
      return {...state, showSortBloc:action.value }
    }
    case SORT_POKEMON_LIST: {
      return {...state, pokemonInfo: action.newList}
    }

    default:
      return state;
  }
};
export const GetPokemonItemAC = (pokemonItems, pokemonInfo) => {
  return {
    type: GET_POKEMON_ITEM,
    pokemonItems: pokemonItems,
    pokemonInfo: pokemonInfo,
  };
};
export const loadMorePokemonsAC = (newPokemonItems, newPokemonInfo) => {
  return {
    type: GET_MORE_POKEMONS,
    newPokemonItems: newPokemonItems,
    newPokemonInfo: newPokemonInfo,
  };
};

export const showAllFiltersAC = (value) => {
  return {
    type: SHOW_ALL_FILTERS,
    value: value,
  };
};

export const getNextPageUrlAC = (newUrl) => {
  return {
    type: GET_NEXT_PAGE_URL,
    url: newUrl,
  };
};

export const showStatsTableAC = (stats) => {
  return {
    type: SHOW_STATS_TABLE,
    pokemonStats: stats,
  };
};
export const updateFilterAC = (type) => {
  return {
    type: UPDATE_FILTER,
    filter: type,
  };
};
export const showSortOptionAC = (value) =>{
  return {
    type: SHOW_SORT_OPTION,
    value: value
  }
}

export const sortPokemonListAC = (newList) =>{
  return {
    type: SORT_POKEMON_LIST,
    newList:newList,
  }
}

export const GetPokemonItemsTC = () => async (dispatch) => {
  let pokemonItems = await MainAPI.getPokemons();
  let pokemonInfo = await Promise.all(
    pokemonItems.results.map((item) => {
      return axios.get(item.url).then((response) => response.data);
    })
  ).then((data) => data);


  dispatch(GetPokemonItemAC(pokemonItems.results, pokemonInfo));
  dispatch(getNextPageUrlAC(pokemonItems.next));
};

export const loadMorePokemonsTC = (next) => async (dispatch) => {
  let loadMoreResponse = await MainAPI.loadMore(next);
  let newPokemonInfo = await Promise.all(
    loadMoreResponse.results.map((item) => {
      return axios.get(item.url).then((response) => response.data);
    })
  );

  dispatch(loadMorePokemonsAC(loadMoreResponse.results, newPokemonInfo));
  dispatch(getNextPageUrlAC(loadMoreResponse.next));
};

export default pokemonReducer;
