import { Image, Pressable, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { useRef } from "react"
import ModalAction from "./ModalAction"

const Card = ({navigation, data, deleteHandler}) => {
    const modalRef = useRef()

    return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('DetailAnime')} >
            <View style={style.card}>
                    <Image 
                        source={{ uri: data.cover }} 
                        style={style.cardthumb} />
                <View style={style.wrapcontent}>
                    <Text style={style.title} numberOfLines={3} >{data.dataAnime.title}</Text>
                    <Text style={style.episode}>{data.dataAnime.episodes} Episode</Text>
                    <View style={style.dots}>
                        <Pressable
                            onPress={() => modalRef.current.open()}
                            android_ripple={{ color: '#138462' }}
                            style={{ padding: 7 }}>
                            <Entypo 
                                name="dots-three-vertical"
                                size={18}
                                color='#FFFFFF' />
                        </Pressable>
                    </View>
                    <ModalAction 
                        modalRef={modalRef}
                        data={data}
                        deleteHandler={deleteHandler} />
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        overflow: 'hidden',
        marginBottom: 18
    },
    cardthumb: {
        width: 130,
        height: 120,
        marginRight: 10
    },
    wrapcontent: {
        flex: 1
    },
    title: {
        fontSize: 16,
        color: '#1C1D27',
        paddingVertical: 5
    },
    episode: {
        fontSize: 14,
        color: '#14C38E'
    },
    dots:{
        backgroundColor: '#14C38E',
        alignSelf: 'baseline',
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        right: 10,
        overflow: 'hidden'
    }
})

export default Card