import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AppContext = createContext({})

export const useDefaultContext = () => {
    return useContext(AppContext)
}

export const AppDefaultContext = ({children}) => {
    const [listAnimes, setListAnimes] = useState([])

    const getAnimes = async () => {
        const getNim = await AsyncStorage.getItem('animes')
        setListAnimes(JSON.parse(getNim))
    }

    const deleteHandler = async (mal_id,navigation) => {
        const filterData = listAnimes.filter(anime => anime.dataAnime.mal_id !== mal_id)
        try {
            await AsyncStorage.setItem('animes', JSON.stringify(filterData))
            navigation.replace('Home')
        } catch (error) {
            
        }
    }

    const AppContextValue = {
        getAnimes,
        listAnimes,
        deleteHandler
    }

    return <AppContext.Provider value={AppContextValue} >{children}</AppContext.Provider>
}