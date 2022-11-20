import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { View, StyleSheet, ScrollView, StatusBar, Text } from "react-native"
import SplashScreen from 'react-native-splash-screen'
import BtnAdd from "../components/BtnAdd"
import Card from "../components/Card"
import NavMain from "../components/NavMain"
import { useDefaultContext } from "../contexts/DefaultContext"

const Home = ({ navigation  }) => {
    const { getAnimes, deleteHandler, listAnimes } = useDefaultContext()

    useEffect(() => {
        SplashScreen.hide()
        
        navigation.addListener('focus', () => {
            getAnimes()  
        });

        getAnimes()
      }, [navigation]);

    return (
        <View style={style.main}>
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
                                data={anime}
                                deleteHandler={deleteHandler} />
                        )
                        :
                    <Text style={style.notFoundText}>Belum ada anime yang tersimpan</Text>
                }
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
    },
    notFoundText:{
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
        paddingTop: 40
    }
})

export default Home