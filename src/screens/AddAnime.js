import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableNativeFeedback, View } from "react-native"
import NavClose from '../components/NavClose'

const AddAnime = ({navigation}) => {
    return (
        <View style={style.main}>
            <NavClose title="Tambah Anime" navigation={navigation} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[style.wrapcontent,{paddingTop: 16}]}>
                    <Text style={style.label}>Judul anime</Text>
                    <TextInput
                        style={style.input} />
                </View>
                <View style={style.wrapcontent}>
                    <View style={style.inet}>
                        <Text style={style.inettitle}>Cari menggunakan internet</Text>
                        <Switch value={true} />
                    </View>
                    <View style={style.wrapnime}>
                        <Text style={style.nime}>Cahinsaw Man</Text>
                        <Text style={style.nime}>Initial D</Text>
                        <Text style={style.nime}>Bochi The rock</Text>
                        <Text style={style.nime}>Spy x Family</Text>
                        <Text style={style.nime}>AoAshi</Text>
                    </View>
                </View>
                <View style={style.wrapcontent}>
                    <Text style={style.label}>Pilih sampul</Text>
                    <TouchableNativeFeedback><View style={[style.btn,{backgroundColor: '#47B5FF'}]}><Text style={{ color: '#FFFFFF' }}>Pilih</Text></View></TouchableNativeFeedback>
                    <View style={style.coverWrap}>
                        <Image 
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/a/a6/InitialD_vol1_Cover.jpg/220px-InitialD_vol1_Cover.jpg' }}
                            style={style.cover} />
                    </View>
                </View>
                <TouchableNativeFeedback><View style={[style.btn,{backgroundColor: '#8D9EFF'}]}><Text style={{ color: '#FFFFFF' }}>Simpan</Text></View></TouchableNativeFeedback>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        backgroundColor: '#14C38E',
        height: '100%'
    },
    label: {
        marginBottom: 7,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: '#FFFFFF'
    },
    wrapcontent: {
        marginBottom: 10
    },
    inet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    inettitle: {
        color: '#FFFFFF'
    },
    wrapnime: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    nime: {
        backgroundColor: '#8D9EFF',
        alignSelf: 'baseline',
        color: '#FFFFFF',
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 50,
        fontSize: 12,
        marginRight: 8,
        marginBottom: 8
    },
    btn: {
        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 18
    },
    coverWrap: {
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 12
    },
    cover: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    }
})

export default AddAnime