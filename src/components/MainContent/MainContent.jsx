import React, { useEffect, useState } from "react";
import classes from "./MainContent.module.css";
import PokemonItem from "./ PokemonItem/PokemonItem";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPokemonItemsTC,
  loadMorePokemonsTC,
  showAllFiltersAC, showSortOptionAC,
  showStatsTableAC,
  updateFilterAC,
} from "../../redux/pokemon-reducer";

const MainContent = (props) => {
  const pokemonItems = useSelector(
    (state) => state.pokemonReducer.pokemonItems
  );
  const pokemonInfo = useSelector((state) => state.pokemonReducer.pokemonInfo);
  const nextPageUrl = useSelector((state) => state.pokemonReducer.nextPageUrl);
  const typeFilter = useSelector((state) => state.pokemonReducer.typeFilter);


  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [disablet, setDisablet] = useState(false);

  useEffect(async () => {
    await dispatch(GetPokemonItemsTC());
    setLoading(false);
  }, []);

  let showMore = async () => {
    setDisablet(true);
    await dispatch(loadMorePokemonsTC(nextPageUrl));
    setDisablet(false);
  };

  let showPokemonStats = (stats) => {
    dispatch(showStatsTableAC(stats));
    dispatch(showAllFiltersAC(false));

  };
  let updateTypeFilter = (type) => {
    dispatch(updateFilterAC(type));
  };

  let filteredPokemonArrea = () => {
    if (typeFilter == null) {
      return pokemonInfo;
    } else {
      return pokemonInfo.filter((el) => {
        if (
          el.types.find((item) => {
            return item.type.name == typeFilter;
          })
        ) {
          return el;
        } else {
          return null;
        }
      });
    }
  };

  return (
    <div>
      {" "}
      {loading ? (
        <div>loading</div> // треба зробити прелоадер
      ) : ( <>
        <div className={classes.main}>
          {filteredPokemonArrea()?.map((item) => {
            return (
              <PokemonItem
                onClick={() => showPokemonStats(item.stats)}
                key={item.name}
                info={item}

                pokemonTypes={item.types.map((el) => el.type.name)}
                updateTypeFilter={updateTypeFilter}
              />
            );
          })}

        </div>
            <button className={classes.showMoreButton} onClick={showMore} disabled={disablet}>
              Show more
            </button>
          </>
      )}{" "}
    </div>
  );
};
export default MainContent;
