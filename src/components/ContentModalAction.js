import { Pressable, StyleSheet, Text, View } from "react-native"
import { useDefaultContext } from "../contexts/DefaultContext"

const ContentModalAction = ({data, navigation}) => {
    const {deleteHandler} = useDefaultContext()

    return (
        <View style={style.main}>
            <Text style={style.title}>{data.dataAnime.title}</Text>
            <View style={{ borderRadius: 5, overflow: 'hidden', marginBottom: 10 }}>
                <Pressable
                    android_ripple={{ color: '#138462', foreground: true }}
                    onPress={() => navigation.navigate('Modal',{isEdit: true, data, title: 'Edit Anime'})}>
                    <Text 
                        style={[style.btn, {backgroundColor: '#FFE15D'}]}
                    >Edit</Text>
                </Pressable>
            </View>
            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                <Pressable
                    android_ripple={{ color: '#138462', foreground: true }}
                    onPress={() => deleteHandler(data.dataAnime.mal_id,navigation)}>
                    <Text 
                        style={[style.btn, {backgroundColor: '#FF6464', color: 'white'}]}
                    >Hapus</Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#372948',
        letterSpacing: 0.3,
        marginBottom: 16
    },
    btn: {
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        color: '#372948',
        fontWeight: '500'
    }
})

export default ContentModalAction