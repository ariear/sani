import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { View, StyleSheet, ScrollView, StatusBar, Text, ImageBackground } from "react-native"
import SplashScreen from 'react-native-splash-screen'
import BtnAdd from "../components/BtnAdd"
import Card from "../components/Card"
import NavMain from "../components/NavMain"
import { useDefaultContext } from "../contexts/DefaultContext"

const Home = ({ navigation  }) => {
    const { getAnimes, listAnimes } = useDefaultContext()
    const [wallpaper, setWallpaper] = useState({})

    const getWallpaper = async () => {
        const fetch = await AsyncStorage.getItem('wallpaper')
        if (fetch !== null) setWallpaper(JSON.parse(fetch))
    }

    useEffect(() => {
        SplashScreen.hide()
        
        navigation.addListener('focus', () => {
            getAnimes()  
            getWallpaper()
        });

        getAnimes()
        getWallpaper()
      }, [navigation]);

    return (
        <View style={style.main}>
            <ImageBackground 
                source={{ uri: wallpaper.wallpaper }} 
                style={{ flex: 1, paddingHorizontal: 20 }}
                imageStyle={{ opacity: wallpaper.opacity }}>
            <StatusBar backgroundColor="#14C38E" />
            <NavMain navigation={navigation} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    {
                        listAnimes !== null ?
                        listAnimes.length > 0 &&
                            listAnimes.map((anime,index) => 
                                <Card 
                                    key={index}
                                    navigation={navigation}
                                    data={anime} />
                            )
                            :
                        <Text style={style.notFoundText}>Belum ada anime yang tersimpan</Text>
                    }
                </ScrollView>
                <BtnAdd navigation={navigation} />
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: '#14C38E'
    },
    notFoundText:{
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
        paddingTop: 40
    }
})

export default Home