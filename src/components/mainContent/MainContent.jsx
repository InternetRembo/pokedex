import React, {useEffect, useState} from "react";
import classes from './MainContent.module.css'
import PokemonItem from "./ PokemonItem/PokemonItem";
import {useDispatch, useSelector} from "react-redux";
import pokemonReducer, {GetPokemonInfoTC, GetPokemonItemsTC, loadMorePokemonsTC} from "../../redux/pokemon-reducer";

const MainContent = (props) => {
    const pokemonItems = useSelector((state) => state.pokemonReducer.pokemonItems) // тут мій запит
    const pokemonInfo = useSelector((state) => state.pokemonReducer.pokemonInfo)
    const dispatch = useDispatch()
    const [pokemons, setPokemons] = useState(null) /// ????
    const [loading, setLoading] = useState(true)


    useEffect(async () => {
        await dispatch(GetPokemonItemsTC()) // діспатчимо санку щоб получити при першому рендері респонс
        setLoading(false)

    }, [])

    let showMore = (pokemonItems) => {
        console.log(pokemonItems)
        dispatch(loadMorePokemonsTC(pokemonItems.next))
    }

    return (<div> {
            loading ?
                (<div>loading</div>) : // треба зробити прелоадер
                <div className={classes.main}>


                    {pokemonItems.results?.map((item) => {

                        return <PokemonItem key={item.name} pokemon={item}/>
                    })  // за допомогою тринарного виразу выдображаэмо pokemonItems коли вын буде доступний а до цього показуэмо прелоадер
                    }
                    <button className={'button'} onClick={showMore}>Show more
                    </button>


                </div>
        } </div>


    )
}
export default MainContent