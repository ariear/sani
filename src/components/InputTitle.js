import { View , TextInput, Pressable, Text, StyleSheet} from "react-native"

const InputTitle = ({isInet, onSearchHandler, title, setTitle}) => {
    return (
        <View style={style.main}>
            <TextInput
                style={style.input}
                onChangeText={(e) => setTitle(e)}
                value={title} />
            {
                isInet &&
                <View style={{ overflow: 'hidden', borderRadius: 7 }}>
                    <Pressable
                        onPress={onSearchHandler}
                        android_ripple={{ color: '#594C4C', foreground: true }}
                        disabled={title === '' ? true : false}>
                        <Text style={style.btn}>Cari</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flexDirection: 'row'
    },
    input: {
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        flex: 1,
        marginRight: 10
    },
    btn: {
        backgroundColor: '#47B5FF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 7,
        color: '#FFFFFF'
    }
})

export default InputTitle