import { BackHandler, StyleSheet, View } from "react-native"
import BtnAction from "../components/BtnAction"
import NavClose from "../components/NavClose"
import WallpaperSet from "../components/WallpaperSet"
import DocumentPicker from 'react-native-document-picker'
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Setting = ({navigation}) => {
    const [wallpaper, setWallpaper] = useState('')
    const [opacity, setOpacity] = useState(0.4)

    const pickImage = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
                copyTo: 'documentDirectory'
            })
            setWallpaper(res[0].fileCopyUri)
        } catch (error) {
            
        }
    }

    const saveSet = async () => {
        await AsyncStorage.setItem('wallpaper',JSON.stringify({wallpaper,opacity}))

        navigation.navigate('Home')
    }

    const getWallpaper = async () => {
        const fetch = await AsyncStorage.getItem('wallpaper')
        const result = JSON.parse(fetch)
        if (fetch !== null) {
            setWallpaper(result.wallpaper)
            setOpacity(result.opacity)
        }
    }

    useEffect(() => {
        getWallpaper()
    }, []);

    return (
        <View style={style.main}>
            <NavClose title="Pengaturan" navigation={navigation} />

            <WallpaperSet 
                pickImage={pickImage}
                wallpaper={wallpaper}
                opacity={opacity}
                setOpacity={setOpacity} />
            <BtnAction title="Simpan" bgcolor="#47B5FF" handler={saveSet} />
            <BtnAction title="Keluar" bgcolor="#F06292" handler={() => BackHandler.exitApp()} />
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