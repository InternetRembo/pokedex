import React, { useEffect, useState } from "react";
import classes from "./PokemonItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonItemsTC } from "../../../redux/pokemon-reducer";
import { MainAPI } from "../../../api/api";

const PokemonItem = (props) => {
  let name = (text) => {
    let uppercaseFirst = text.split("").map((el, index) => {
      if (index == 0) {
        return el.toUpperCase();
      } else {
        return el;
      }
    });
    return uppercaseFirst.join("");
  };
  return (
    <div onClick={props.onClick} className={classes.itemBlock}>
      <img src={props.info.sprites.front_default} />
      <div className={classes.pokemonName}>{name(props.info.name)}</div>
      <div className={classes.types}>
        {props.pokemonTypes.map((el) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                props.updateTypeFilter(el);
              }}
              className={classes.typeItem + " " + classes[el]}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PokemonItem;
