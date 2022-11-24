import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons'

const NavMain = ({navigation}) => {
    return (
        <View style={style.nav}>
            <View style={style.sidenav}>
                <Image 
                    source={require('../../assets/icon.png')}
                    style={style.iconnav} />
                <Text style={style.titlenav}>Sani</Text>
            </View>
            <View style={{ overflow: 'hidden', borderRadius: 50 }}>
                <Pressable
                    onPress={() => navigation.navigate('Setting')}
                    android_ripple={{ color: '#138462' }}
                    style={{ padding: 8 }}>
                    <Octicons 
                        name="gear" 
                        size={28} 
                        color='#FFFFFF' />
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 20
    },
    sidenav: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconnav: {
        marginRight: 10,
        width: 35,
        height: 35
    },
    titlenav: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 0.8,
        color: '#FFFFFF'
    }
})

export default NavMain