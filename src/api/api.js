import * as axios from "axios";


export const MainAPI = {
    getPokemons() {
        return axios
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=9`)
            .then((response) => response.data);
    },
    loadMore(next) {
        return axios.get(next)
            .then((response) => {
                return response.data

            })


    }


}


