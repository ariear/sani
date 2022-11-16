import { useRef } from "react"
import { ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import ModalAction from "../components/ModalAction"

const DetailAnime = ({navigation}) => {
    const modalRef = useRef()

    return (
        <View style={style.main}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground source={{ uri: 'https://images5.alphacoders.com/104/thumbbig-1043832.webp' }} resizeMode="cover" >
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
                        <ModalAction modalRef={modalRef} />
                    </View>
                </View>
            </ImageBackground>
            <View style={style.content}>
                <Text style={style.title}>Naruto Shippuden</Text>
                <Text style={style.episode}>24 Episode</Text>
                <Text style={style.endepisode}>Episode terakhir kali dilihat : 2</Text>

                <ScrollView 
                    style={style.wrapCardEpisode}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ overflow: 'hidden', borderRadius: 5, marginBottom: 10 }}>
                        <Pressable 
                            android_ripple={{ color: '#612B58', foreground: true }} >
                            <Text style={style.cardEpisode}>Perkenalan - Episode 01</Text>
                        </Pressable>
                    </View>
                    <View style={{ overflow: 'hidden', borderRadius: 5, marginBottom: 10 }}>
                        <Pressable 
                            android_ripple={{ color: '#612B58', foreground: true }} >
                            <Text style={style.cardEpisode}>Fuad mekanikal - Episode 02</Text>
                        </Pressable>
                    </View>
                    <View style={{ overflow: 'hidden', borderRadius: 5, marginBottom: 10 }}>
                        <Pressable 
                            android_ripple={{ color: '#612B58', foreground: true }} >
                            <Text style={style.cardEpisode}>Slamet kopling - Episode 03</Text>
                        </Pressable>
                    </View>
                    <View style={{ overflow: 'hidden', borderRadius: 5, marginBottom: 10 }}>
                        <Pressable 
                            android_ripple={{ color: '#612B58', foreground: true }} >
                            <Text style={style.cardEpisode}>Dipenjaraa - Episode 04</Text>
                        </Pressable>
                    </View>
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