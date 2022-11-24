import { Image, StyleSheet, Text, View } from "react-native"
import Slider from '@react-native-community/slider';
import BtnAction from "./BtnAction"

const WallpaperSet = ({pickImage, wallpaper, opacity, setOpacity}) => {
    return (
        <View>
            <Text style={style.title}>Wallpaper</Text>
            <View style={style.wrapContent}>
                <Text style={style.titleDes}>Pilih gambar</Text>
                <BtnAction title="Pilih" bgcolor='#8D9EFF' handler={pickImage} />

                <View style={style.coverWrap}>
                    {
                        wallpaper &&
                            <Image 
                                style={[style.cover,{opacity: opacity}]}
                                source={{ uri: wallpaper }} />
                    }
                </View>

                <Text style={style.titleDes}>Transparansi wallpaper</Text>
                <View style={style.wrapContent}>
                    <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Rubik-Regular' }}>{parseInt(opacity * 100)}%</Text>
                    <Slider 
                        style={{ width: '100%', height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor='white'
                        thumbTintColor="#47B5FF"
                        onSlidingComplete={(opa) => setOpacity(opa)}
                        value={opacity}
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        marginBottom: 10,
        fontFamily: 'Rubik-Medium'
    },
    wrapContent: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 7,
        marginBottom: 14
    },
    coverWrap: {
        marginTop: 5,
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden'
    },
    cover: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        backgroundColor: '#282A3A'
    },
    titleDes: {
        fontFamily: 'Rubik-Regular',
        marginBottom: 10
    }
})

export default WallpaperSet