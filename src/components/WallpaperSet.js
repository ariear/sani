import { Image, Slider, StyleSheet, Text, View } from "react-native"
import BtnAction from "./BtnAction"

const WallpaperSet = () => {
    return (
        <View>
            <Text style={style.title}>Wallpaper</Text>
            <View style={style.wrapContent}>
                <Text style={{ marginBottom: 10 }}>Pilih gambar</Text>
                <BtnAction title="Pilih" bgcolor='#8D9EFF' />

                <View style={style.coverWrap}>
                    <Image 
                        style={style.cover}
                        source={{ uri: 'https://img.wattpad.com/cover/305590206-256-k102807.jpg' }} />
                </View>

                <Text style={{ marginBottom: 10 }}>Transparansi wallpaper</Text>
                <View style={style.wrapContent}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>30%</Text>
                    <Slider 
                        style={{ width: '100%', height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontWeight: '700',
        marginBottom: 10
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
        borderColor: 'gray'
    },
    cover: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    }
})

export default WallpaperSet