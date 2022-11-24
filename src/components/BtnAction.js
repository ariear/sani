import { StyleSheet, View, Pressable, Text } from "react-native"

const BtnAction = ({title, bgcolor, handler}) => {
    return (
        <View style={{ overflow: 'hidden', borderRadius: 7, marginBottom: 10 }}>
                <Pressable
                    android_ripple={{ foreground: true, color: '#00000' }}
                    onPress={handler}>
                    <Text style={[style.btn,{backgroundColor: bgcolor}]}>{title}</Text>
                </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    btn: {
        color: '#FFFFFF',
        paddingVertical: 10,
        textAlign: 'center',
        borderRadius: 7,
        fontWeight: '500'
    }
})

export default BtnAction