import { StyleSheet, View } from "react-native"
import NavClose from "../components/NavClose"

const Setting = ({navigation}) => {
    return (
        <View style={style.main}>
            <NavClose title="Pengaturan" navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        backgroundColor: '#14C38E',
        paddingHorizontal: 20,
        height: '100%'
    }
})
export default Setting