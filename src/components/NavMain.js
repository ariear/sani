import { Image, StyleSheet, Text, View } from "react-native"
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
            <Octicons 
                name="gear" 
                size={30} 
                color='#FFFFFF'
                onPress={() => navigation.navigate('Setting')} />
        </View>
    )
}

const style = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
    },
    sidenav: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconnav: {
        marginRight: 10,
        width: 40,
        height: 40
    },
    titlenav: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 0.8,
        color: '#FFFFFF'
    }
})

export default NavMain