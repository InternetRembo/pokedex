import {combineReducers, createStore , applyMiddleware} from "redux";
import pokemonReducer from "./pokemon-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers(
    {
        pokemonReducer:pokemonReducer
    }
)

let store = createStore(reducers , applyMiddleware(thunkMiddleware))
export default store;

window.store = store;