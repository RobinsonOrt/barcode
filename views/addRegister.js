import React from 'react';
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

export default function AddRegister(){
    return(
        <View style={styles.container}>
            <Text>
                Borrar etiqueta Text y hacer el lector de codigos de barras
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});