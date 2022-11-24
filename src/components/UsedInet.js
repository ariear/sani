import { View, Text, Switch, StyleSheet, ActivityIndicator } from "react-native"
import BtnNime from "./BtnNime"

const UsedInet = ({setIsInet, isInet, listAnime, setTitle, setDataAnime, setCover, setListAnime, isNotFound, isLoading }) => {
    return (
        <View style={style.wrapcontent}>
                <View style={style.inet}>
                    <Text style={style.inettitle}>Cari menggunakan internet</Text>
                    <Switch
                        onValueChange={() => setIsInet(!isInet)} 
                        value={isInet} />
                </View>
                <View style={style.wrapnime}>
                    {
                        isLoading &&
                        <ActivityIndicator 
                            size="large" 
                            style={{ flex: 1 }} />
                    }
                    {
                        isInet &&
                            listAnime.length > 0 &&
                            listAnime.map(anime => 
                                <BtnNime 
                                    key={anime.mal_id} 
                                    title={anime.title} 
                                    data={anime}
                                    setTitle={setTitle}
                                    setDataAnime={setDataAnime}
                                    setCover={setCover}
                                    setListAnime={setListAnime} />
                            )
                    }
                    {
                        isNotFound && <Text style={style.notFound}>Anime tidak ditemukan</Text>
                    }
                </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapcontent: {
        marginBottom: 10
    },
    inet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    inettitle: {
        color: '#FFFFFF',
        fontFamily: 'Rubik-Light'
    },
    wrapnime: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    notFound: {
        textAlign: 'center',
        color: '#FFFFFF',
        flex: 1
    }
})

export default UsedInet