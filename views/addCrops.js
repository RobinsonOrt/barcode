import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    TextInput,
    Alert
} from 'react-native';
export default function AddCrops() {
    const navigation = useNavigation();
    const [number, onChangeNumber] = React.useState("");
    const [ready, setReady] = React.useState(null);

    const createCrop = async () => {
        var id = 0;
        if (number === null || number === 0 || number === "") {
            console.log("Error, digite un valor correcto")
        } else {
            var html = `
                <html>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
                    </head>
                    <body>
            `;
            for (var i = 1; i <= number; i++) {
                switch (`${i}`.length) {
                    case 1:
                        id = '10000000' + i;
                        break;
                    case 2:
                        id = '1000000' + i;
                        break;
                    case 3:
                        id = '100000' + i;
                        break;
                    case 4:
                        id = '10000' + i;
                        break;
                    case 5:
                        id = '1000' + i;
                        break;
                    case 6:
                        id = '100' + i;
                        break;
                    default:
                        id = 0;
                }
                var url = "https://barcodeapi.org/api/128/" + id
                html = html + `<img src=${url} width="175px" border="1px"/>`;

            }
            html = html + `</body >
            </html >`
            printToFile(html);
        }
    }

    const printToFile = async (html) => {
        try{
            const { uri } = await Print.printToFileAsync({
                html,
            });
            await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
        } catch (error){
            console.log(error);
        }

    }

    return (
        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={[styles.question, { flex: .2, width: '100%' }]}>
                <Text style={styles.textTittle}>Digite la cantidad de árboles en el cultivo.</Text>
            </View>
            <View style={[styles.viewInput, { flex: .1, width: '100%' }]}>
                <TextInput
                    style={[styles.input, { textAlign: 'center' }]}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />
            </View>
            <View style={[styles.viewButton, { flex: .3, width: '100%' }]}>
                <TouchableOpacity style={styles.addCropButton} onPress={createCrop}>
                    <Text style={styles.textButtom}>AGREGAR REGISTRO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },
    question: {
        alignItems: 'center',
    },
    viewInput: {
        alignItems: 'center',
    },
    viewButton: {
        alignItems: 'center',
        paddingTop: '40%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '40%',
    },
    buttons: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    addCropButton: {
        backgroundColor: '#00bf43',
        width: '80%',
        flex: .2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtom: {

        fontSize: 20,
    },
    textTittle: {

        fontSize: 30,
        textAlign: 'center'
    }
});