import { StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const DetailAnime = ({navigation}) => {
    return (
        <View style={style.main}>
            <View style={style.nav}>
                <Feather
                    name="arrow-left"
                    size={30}
                    color="#FFFFFF"
                    onPress={() => navigation.goBack()} />
                <Feather
                    name="more-vertical"
                    size={30}
                    color="#FFFFFF" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: '#14C38E',
        paddingHorizontal: 20
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 18
    }
})

export default DetailAnime