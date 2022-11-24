import axios from "axios"
import { useEffect, useState } from "react"
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputTitle from "../components/InputTitle"
import NavClose from '../components/NavClose'
import UsedInet from "../components/UsedInet"
import DocumentPicker from 'react-native-document-picker'

const AddAnime = ({navigation, route}) => {
    const [isInet, setIsInet] = useState(false)
    const [title, setTitle] = useState('')
    const [listAnime, setListAnime] = useState([])
    const [isNotFound, setIsNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const [dataAnime, setDataAnime] = useState({})
    const [cover, setCover] = useState('')

    const [localData, setLocalData] = useState([])

    const onSearchHandler = () => {
            setListAnime([])
            setIsNotFound(false)
            setIsLoading(true)

            axios.get(`https://api.jikan.moe/v4/anime?q=${title}`).then(fetch => {
                fetch.data.data.length > 0 ? setListAnime(fetch.data.data) : setIsNotFound(true)
                setIsLoading(false)
            })
    }

    const addHandler = async () => {
            let newData
                try {
                    if (!isInet) {
                        newData = [...localData, {
                            cover,
                            dataAnime: {
                                mal_id: Math.floor(Math.random() * (10 - 1 + 100000000)) + 100000000,
                                title: title,
                                episodes: 'none',
                            },
                            episodes: [{mal_id: 1,title: 'none'}],
                            endEpisode: 0
                        }]
                    }else{
                        try {
                            const episodes = await axios.get(`https://api.jikan.moe/v4/anime/${dataAnime.mal_id}/episodes`)
                            
                            newData = [...localData, {
                                cover, 
                                dataAnime, 
                                episodes: episodes.data.data,
                                endEpisode: 0
                            }]
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    await AsyncStorage.setItem('animes', JSON.stringify(newData))
                    navigation.navigate('Home')
                } catch (error) {
                    console.log('error');
                }
    }

    const pickCoverLocal = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
                copyTo: 'documentDirectory'
            })

            setCover(res[0].fileCopyUri)
        } catch (error) {
            
        }
    }

    const getAnimes = async () => {
        const getNim = await AsyncStorage.getItem('animes')
        if (getNim !== null) {
            setLocalData(JSON.parse(getNim))
            if (route.params.isEdit) {
                setLocalData(JSON.parse(getNim).filter(anime => anime.dataAnime.mal_id !== route.params.data.dataAnime.mal_id))
            }
        }
    }

    useEffect(() => {
        getAnimes()
        
        if (route.params.isEdit) {
            setDataAnime(route.params.data.dataAnime)
            setTitle(route.params.data.dataAnime.title)
            setCover(route.params.data.cover)
        }
    }, []);

    return (
        <View style={style.main}>
        <StatusBar translucent={false} backgroundColor="#14C38E" />
            <NavClose title={route.params.title} navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[style.wrapcontent,{paddingTop: 16}]}>
                    <Text style={style.label}>Judul anime</Text>
                    <InputTitle isInet={isInet} onSearchHandler={onSearchHandler} title={title} setTitle={setTitle} />
                </View>
                <UsedInet 
                    isInet={isInet} 
                    setIsInet={setIsInet} 
                    listAnime={listAnime}
                    setTitle={setTitle}
                    setDataAnime={setDataAnime}
                    setCover={setCover}
                    setListAnime={setListAnime}
                    isNotFound={isNotFound}
                    isLoading={isLoading} />
                <View style={style.wrapcontent}>
                    <Text style={style.label}>Pilih sampul</Text>
                    <TouchableNativeFeedback onPress={pickCoverLocal}><View style={[style.btn,{backgroundColor: '#47B5FF'}]}><Text style={{ color: '#FFFFFF' }}>Pilih</Text></View></TouchableNativeFeedback>
                    <View style={style.coverWrap}>
                        {
                            cover &&
                                <Image 
                                    source={{ uri: cover }}
                                    style={style.cover} />
                        }
                    </View>
                </View>
                <TouchableNativeFeedback onPress={addHandler} ><View style={[style.btn,{backgroundColor: '#8D9EFF'}]}><Text style={{ color: '#FFFFFF' }}>Simpan</Text></View></TouchableNativeFeedback>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        backgroundColor: '#14C38E',
        height: '100%'
    },
    label: {
        marginBottom: 7,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500'
    },
    wrapcontent: {
        marginBottom: 10
    },
    btn: {
        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 18
    },
    coverWrap: {
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 12
    },
    cover: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    }
})

export default AddAnime