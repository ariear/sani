import { useEffect } from "react"
import { View, StyleSheet, ScrollView, StatusBar } from "react-native"
import SplashScreen from 'react-native-splash-screen'
import BtnAdd from "../components/BtnAdd"
import Card from "../components/Card"
import NavMain from "../components/NavMain"

const Home = ({ navigation  }) => {
    useEffect(() => {
        SplashScreen.hide()
      }, []);

    return (
        <View style={style.main}>
            <StatusBar backgroundColor="#14C38E" />
            <NavMain navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <Card navigation={navigation} />
            </ScrollView>
            <BtnAdd navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: '#14C38E',
        paddingHorizontal: 20
    }
})

export default Home