import React, {useEffect, useState} from "react";
import classes from './PokemonItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {GetPokemonItemsTC} from "../../../redux/pokemon-reducer";
import {MainAPI} from "../../../api/api";


const PokemonItem = (props) => {


    return (
        <div className={classes.itemBlock}>

            {/*<img src={props.info.sprites.front_shiny}/>*/}
            <div>{props.pokemon.name}</div>



           {/* <div className={}>*/}

        </div>

    )


}
export default PokemonItem

