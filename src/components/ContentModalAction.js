import { StyleSheet, Text, View } from "react-native"

const ContentModalAction = () => {
    return (
        <View style={style.main}>
            <Text style={style.title}>Chainsaw Man</Text>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    }
})

export default ContentModalAction