import classes from "../StatsTable.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {showAllFiltersAC, updateFilterAC} from "../../../redux/pokemon-reducer";



const TypeFilterBloc = (props)=>{
    const dispatch = useDispatch()
    const currentTypesList = () => {
        let flatList = pokemonTypesList.flat();
        let result = flatList.reduce((total, amount) => {
            if (!total.includes(amount.name)) {
                total.push(amount.name);
            }
            return total;
        }, []);
        return result;
    };
    let updateTypeFilter = (type) => {
        dispatch(updateFilterAC(type));
    };
    const onCloseFilterClick = () => {
        dispatch(showAllFiltersAC(false));
    };
    let pokemonTypesList = props.pokemonInfo.map((item) => {
        let list = item.types.map((el) => {
            return el.type;
        });
        return list;
    });
    return(
    <div className={classes.pokemonTable}>
        <button
            className={classes.closingButton}
            onClick={() => {
                onCloseFilterClick();
            }}
        >
            X
        </button>
        {currentTypesList().map((el) => {
            return (
                <div
                    onClick={(e) => {
                        updateTypeFilter(el);
                    }}
                    className={classes.typeItem + " " + classes[el]}
                >
                    {el}
                </div>
            );
        })}
    </div>

    )
}

export default TypeFilterBloc