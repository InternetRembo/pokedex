import classes from "../StatsTable.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {showStatsTableAC} from "../../../redux/pokemon-reducer";

const PokemonStats = (props)=>{
    const dispatch = useDispatch()
    const onCloseTableClick = () => {
        dispatch(showStatsTableAC(null));
    };
    return( <div className={classes.pokemonTable}>
        <button
            className={classes.closingButton}
            onClick={() => {
                onCloseTableClick(null);
            }}
        >
            X
        </button>
        {props.pokemonStats.map((el) => {
            return (
                <div className={classes.row}>
                    <div className={classes.stat}>{el.stat.name} </div>
                    <div className={classes.value}>{el.base_stat} </div>
                </div>
            );
        })}
    </div>)

}

export default PokemonStats