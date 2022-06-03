import React, {useState} from "react";
import classes from "./Header.module.css";
import {
    showAllFiltersAC, showSortOptionAC,
    showStatsTableAC, updateFilterAC,
} from "../../redux/pokemon-reducer";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();


  let resetAllFilters = ()=> {
      dispatch(updateFilterAC(null))
  }
  let showFilters = () => {

    dispatch(showStatsTableAC(null));
      dispatch(showAllFiltersAC(true))
  };


  return (

    <div className={classes.header}>
      <a className={classes.gitLink} href={'https://github.com/X-InternetRembo-X'} >My GitHub</a>

      <div className={classes.title}>Pokedex</div>
      <div>

          <button
              onClick={()=>{resetAllFilters()}}
              className={classes.filterButon}>
              Reset Filters
          </button>
        <button
          onClick={() => {
            showFilters();
          }}
          className={classes.filterButon}
        >
          Show filters
        </button>
      </div>
    </div>
  );
};
export default Header;
