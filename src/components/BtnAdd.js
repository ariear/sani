import { StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BtnAdd = ({navigation}) => {
    return (
        <AntDesign 
                name="pluscircle" 
                size={60}
                color="#FFFFFF"
                style={style.pluscircle}
                onPress={() => navigation.navigate('Modal')} />
    )
}

const style = StyleSheet.create({
    pluscircle: {
        backgroundColor: '#14C38E',
        borderRadius: 50,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20
    }
})

export default BtnAdd