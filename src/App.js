import './App.css';
import React from "react";
import MainContent from "./components/mainContent/MainContent";
import Header from "./components/header/Header";
import PokemonInfo from "./components/pokemonInfo/PokemonInfo";
import {MainAPI} from "./api/api";
import {Provider} from "react-redux";
import store from "./redux/redux-store";


const App = (props) => {
    let getPokemons = async () => {
        // GetPokemonItemsTC()
        await MainAPI.getPokemons()
        console.log(MainAPI.getPokemons())

    }
    return (
        <Provider store={store}>
            <div className={'wrapper'}>
                <Header/>
                <MainContent/>
                <PokemonInfo/>



            </div>
        </Provider>

    )
}

export default App;
