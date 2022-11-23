import { StyleSheet, View } from "react-native"
import BtnAction from "../components/BtnAction"
import NavClose from "../components/NavClose"
import WallpaperSet from "../components/WallpaperSet"

const Setting = ({navigation}) => {
    return (
        <View style={style.main}>
            <NavClose title="Pengaturan" navigation={navigation} />

            <WallpaperSet />
            <BtnAction title="Simpan" bgcolor="#47B5FF" />
            <BtnAction title="Keluar" bgcolor="#F06292" />
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