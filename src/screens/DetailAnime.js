import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useRef, useState } from "react"
import { ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import ModalAction from "../components/ModalAction"
import { useDefaultContext } from "../contexts/DefaultContext"

const DetailAnime = ({navigation, route}) => {
    const modalRef = useRef()
    const {data} = route.params
    const {getAnimes, listAnimes, deleteHandler} = useDefaultContext()

    const [endEpisode, setEndEpisode] = useState(data.endEpisode)

    const endEpisodeHandler = async (id) => {
        setEndEpisode(id)

        const filterData = listAnimes.filter(anime => anime.dataAnime.mal_id !== data.dataAnime.mal_id)
        
        const newData = [...filterData, {
            cover: data.cover,
            dataAnime: data.dataAnime,
            episodes: data.episodes,
            endEpisode: id
        }]

        await AsyncStorage.setItem('animes', JSON.stringify(newData))
    }

    useEffect(() => {
        getAnimes()
    }, []);
    
    return (
        <View style={style.main}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground source={{ uri: data.cover }} resizeMode="cover" >
                <View style={style.nav}>
                    <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                        <Pressable
                            onPress={() => navigation.goBack()}
                            android_ripple={{ color: '#138462' }}
                            style={{ padding: 5 }}>
                            <Feather
                                name="arrow-left"
                                size={28}
                                color="#FFFFFF" />
                        </Pressable>
                    </View>
                    <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                        <Pressable
                            onPress={() => modalRef.current.open()}
                            android_ripple={{ color: '#138462' }}
                            style={{ padding: 5 }}>
                                <Feather
                                    name="more-vertical"
                                    size={28}
                                    color="#FFFFFF" />
                        </Pressable>
                        <ModalAction 
                            modalRef={modalRef}
                            data={data}
                            deleteHandler={deleteHandler}
                            navigation={navigation} />
                    </View>
                </View>
            </ImageBackground>
            <View style={style.content}>
                <Text style={style.title}>{data.dataAnime.title}</Text>
                <Text style={style.episode}>{data.dataAnime.episodes} Episode</Text>
                <Text style={style.endepisode}>Episode terakhir kali dilihat : {endEpisode} </Text>

                <ScrollView 
                    style={style.wrapCardEpisode}
                    showsVerticalScrollIndicator={false}>
                    {
                        data.episodes.map(episode => 
                            <View key={episode.mal_id} style={{ overflow: 'hidden', borderRadius: 5, marginBottom: 10 }}>
                                <Pressable 
                                    onPress={() => endEpisodeHandler(episode.mal_id)}
                                    android_ripple={{ color: '#612B58', foreground: true }} >
                                    <Text style={style.cardEpisode}>{episode.title} - Episode {episode.mal_id}</Text>
                                </Pressable>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: '#14C38E'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 240,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.41)'
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 24,
        flex: 1
    },
    title: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: '500',
        marginBottom: 7
    },
    episode: {
        fontSize: 16,
        color: '#975C8D',
        marginBottom: 5
    },
    endepisode: {
        color: '#372948'
    },
    wrapCardEpisode: {
        marginTop: 20
    },
    cardEpisode: {
        backgroundColor: '#975C8D',
        padding: 16,
        borderRadius: 5,
        color: '#FFFFFF',
        lineHeight: 20
    }
})

export default DetailAnime