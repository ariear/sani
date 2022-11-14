import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const NavClose = ({title,navigation}) => {
    return (
        <View style={style.nav}>
            <View style={{ overflow: 'hidden', borderRadius: 50 }}>
                <Pressable
                    onPress={() => navigation.goBack()} 
                    android_ripple={{ color: '#138462' }}
                    style={{ padding: 5 }}>
                    <Feather 
                        name="x"
                        size={28}
                        color="#FFFFFF" />
                </Pressable>
            </View>
            <Text style={style.titleNav}>{title}</Text>
            <View></View>
        </View>
    )
}

const style = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        paddingVertical: 10,
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