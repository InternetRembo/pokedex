import React from "react";
import classes from './PokemonInfo.module.css'

const PokemonInfo = (props) =>{
    return(
        <div className={classes.tableBlock}>
            <div className={classes.pokemonImg}></div>
            <div className={classes.header}> PokemonName</div>
            <div className={classes.statsValue}>

            <table className={classes.table}>
                <tr className={classes.rows}>
                    <td className={classes.tableItem}>Type</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>Attack</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>Defense</td>
                <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>HP</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>SP Attack</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>SP Defense</td>
                <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>Speed</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>Weight</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>

                <tr>
                    <td className={classes.tableItem}>Total moves</td>
                    <td className={classes.tableItem}>Value</td>
                </tr>


            </table>

            </div>

        </div>
    )
}
export default PokemonInfo