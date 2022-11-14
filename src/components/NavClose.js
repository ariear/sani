import { StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const NavClose = ({title,navigation}) => {
    return (
        <View style={style.nav}>
            <Feather 
                name="x"
                size={30}
                color="#FFFFFF"
                onPress={() => navigation.goBack()} />
            <Text style={style.titleNav}>{title}</Text>
            <View></View>
        </View>
    )
}

const style = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleNav: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
        letterSpacing: 0.7
    }
})

export default NavClose