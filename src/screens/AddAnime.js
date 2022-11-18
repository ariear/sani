import axios from "axios"
import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputTitle from "../components/InputTitle"
import NavClose from '../components/NavClose'
import UsedInet from "../components/UsedInet"
import { launchImageLibrary } from "react-native-image-picker";

const AddAnime = ({navigation}) => {
    const [isInet, setIsInet] = useState(false)
    const [title, setTitle] = useState('')
    const [listAnime, setListAnime] = useState([])
    const [isNotFound, setIsNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const [dataAnime, setDataAnime] = useState({})
    const [cover, setCover] = useState('')

    const [localData, setLocalData] = useState([])
    const [coverLocal, setCoverLocal] = useState('')

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
        try {
            const newData = [...localData, {cover, dataAnime}]
            await AsyncStorage.setItem('animes', JSON.stringify(newData))
            navigation.navigate('Home')
        } catch (error) {
            console.log('error');
        }
    }

    // const pickCoverLocal = () => {
    //     let option = {
    //         mediaType: 'photo',
    //         quality: 1,
    //         includeBase64: true
    //     }

    //     launchImageLibrary(option, response => {
    //         console.log(response.assets[0].base64);
    //         setCoverLocal(response.assets[0].base64)
    //     })
    // }

    const getAnimes = async () => {
        const getNim = await AsyncStorage.getItem('animes')
        if (getNim !== null) setLocalData(JSON.parse(getNim))
    }

    useEffect(() => {
        getAnimes()
    }, []);

    return (
        <View style={style.main}>
            <NavClose title="Tambah Anime" navigation={navigation} />

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
                    {/* <Text style={style.label}>Pilih sampul</Text>
                    <TouchableNativeFeedback onPress={pickCoverLocal}><View style={[style.btn,{backgroundColor: '#47B5FF'}]}><Text style={{ color: '#FFFFFF' }}>Pilih</Text></View></TouchableNativeFeedback> */}
                    <View style={style.coverWrap}>
                        {
                            dataAnime &&
                                cover &&
                                <Image 
                                    source={{ uri: cover }}
                                    style={style.cover} />
                        }
                        {/* {
                            coverLocal &&
                                <Image
                                    source={{ uri: 'data:image/png;base64,' + coverLocal }}
                                    style={style.cover} />
                        } */}
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