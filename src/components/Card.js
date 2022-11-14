import { Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'

const Card = ({navigation}) => {
    return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('DetailAnime')} >
            <View style={style.card}>
                <Image 
                    source={{ uri: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg' }} 
                    style={style.cardthumb} />
                <View style={style.wrapcontent}>
                    <Text style={style.title}>Chainsaw Man</Text>
                    <Text style={style.episode}>24 Episode</Text>
                    <Entypo 
                        name="dots-three-vertical"
                        size={18}
                        color='#FFFFFF'
                        style={style.dots}
                        onPress={() => console.log('triger dots')} />
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
        marginRight: 14
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
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})

export default Card