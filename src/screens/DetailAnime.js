import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather'

const DetailAnime = ({navigation}) => {
    return (
        <View style={style.main}>
            <View style={style.nav}>
                <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        android_ripple={{ color: '#138462' }}
                        style={{ padding: 5 }}>
                        <Feather
                            name="arrow-left"
                            size={28}
                            color="#FFFFFF" />
                    </Pressable>
                </View>
                <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                    <Pressable
                        android_ripple={{ color: '#138462' }}
                        style={{ padding: 5 }}>
                            <Feather
                                name="more-vertical"
                                size={28}
                                color="#FFFFFF" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: '#14C38E',
        paddingHorizontal: 20
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    }
})

export default DetailAnime