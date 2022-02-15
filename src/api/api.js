import * as axios from "axios";


export const MainAPI = {
    getPokemons() {
        return axios
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=9`)
            .then((response) => response.data);
    } ,
    loadMore(next) {
        return axios.get(next)
            .then((response) => response.data);

    }

    // getPokemonImg(id){
    //     return axios
    //         .get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)
    //         .then((response) => response.data);
    // }
}


