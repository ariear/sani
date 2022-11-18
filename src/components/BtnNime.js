import { Pressable, View, Text, StyleSheet } from "react-native"

const BtnNime = ({title, setTitle, setDataAnime, data, setCover, setListAnime}) => {

    const onPickHandler = () => {
        setTitle(title)
        setCover(data.images.jpg.large_image_url)
        setDataAnime(data)
        setListAnime([])
    }

    return (
        <View 
            style={{ 
                overflow: 'hidden', 
                borderRadius: 50,
                marginRight: 7,
                marginBottom: 7 }}>
            <Pressable 
                android_ripple={{ color: '#594C4C', foreground: true }}
                onPress={onPickHandler}>
                <Text style={style.nime}>{title}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    nime: {
        backgroundColor: '#8D9EFF',
        alignSelf: 'baseline',
        color: '#FFFFFF',
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 50,
        fontSize: 12
    },
})

export default BtnNime