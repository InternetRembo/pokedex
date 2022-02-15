import React, {useEffect, useState} from "react";
import classes from './MainContent.module.css'
import PokemonItem from "./ PokemonItem/PokemonItem";
import {useDispatch, useSelector} from "react-redux";
import {getNextPageUrlAC, GetPokemonItemsTC, loadMorePokemonsTC} from "../../redux/pokemon-reducer";

const MainContent = (props) => {
    const pokemonItems = useSelector((state) => state.pokemonReducer.pokemonItems) // тут мій запит
    const pokemonInfo = useSelector((state) => state.pokemonReducer.pokemonInfo)
    const nextPageUrl = useSelector((state) => state.pokemonReducer.nextPageUrl)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)






    useEffect(async () => {
        await dispatch(GetPokemonItemsTC()) // діспатчимо санку щоб получити при першому рендері респонс
        setLoading(false)

    }, [])

    useEffect(async () => {
        await dispatch(getNextPageUrlAC(pokemonItems.next))
    }, [pokemonItems.next])



    let showMore = async () => {

        await dispatch(loadMorePokemonsTC(nextPageUrl)) /// чи потрібен тут Асинк/Евейт?


    }

    return (<div> {
            loading ?
                (<div>loading</div>) : // треба зробити прелоадер
                <div className={classes.main}>


                    {pokemonInfo?.map((item) => {

                        return <PokemonItem key={item.name} info={item}/>
                    })  // за допомогою тринарного виразу выдображаэмо pokemonItems коли вын буде доступний а до цього показуэмо прелоадер
                    }
                    <button className={'button'} onClick={showMore}>Show more
                    </button>


                </div>
        } </div>


    )
}
export default MainContent