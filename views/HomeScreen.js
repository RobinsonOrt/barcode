import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
    Button
} from 'react-native';


export default function HomeScreen(){
    const navigation = useNavigation();
    const redirectCrop = () => {
        navigation.navigate('AddCrops')
    }
    const redirectRegister = () => {
        navigation.navigate('AddRegister')
    }
    return(
        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={[styles.buttons, { flex: .3, width: '100%'}]}>
                <TouchableOpacity style={styles.addCropButton} onPress={redirectCrop}>
                    <Text style={styles.textButtom}>AGREGAR CULTIVO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addCropButton} onPress={redirectRegister}>
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
    }
});