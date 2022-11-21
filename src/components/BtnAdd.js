import { Pressable, StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BtnAdd = ({navigation}) => {
    return (
        <View style={style.pluscirclePress}>
            <Pressable
                onPress={() => navigation.navigate('Modal', {title: 'Tambah Anime', isEdit: false})}
                android_ripple={{ color: '#138462', foreground: true }}>
                <AntDesign 
                        name="pluscircle" 
                        size={60}
                        color="#FFFFFF"
                        style={style.pluscircle} />
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    pluscircle: {
        backgroundColor: '#14C38E',
        borderRadius: 50
    },
    pluscirclePress: {
        position: 'absolute', 
        bottom: 20, 
        alignSelf: 'center', 
        borderRadius: 50,
        overflow: 'hidden'
    }
})

export default BtnAdd