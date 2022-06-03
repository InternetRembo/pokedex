import React from "react";
import classes from "./StatsTable.module.css";
import { useDispatch, useSelector } from "react-redux";
import PokemonStats from "./PokemonStats/PokemonStats";
import TypeFilterBloc from "./TypeFilterBloc/TypeFilterBloc";

const StatsTable = (props) => {
  const pokemonInfo = useSelector((state) => state.pokemonReducer.pokemonInfo);

  const dispatch = useDispatch();
  const pokemonStats = useSelector(
    (state) => state.pokemonReducer.pokemonStats
  );


  const showFilters = useSelector((state) => state.pokemonReducer.showFilters);
  if (pokemonStats) {
    return (
     <PokemonStats
         pokemonStats = {pokemonStats}
     />
    );
  } else if (showFilters) {
    return (
        <TypeFilterBloc
            pokemonInfo = {pokemonInfo}
        />

    );
  }
  else {return null}
};
export default StatsTable;
