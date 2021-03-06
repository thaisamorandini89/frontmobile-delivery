import React from "react";
import Header from "../Header";
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Orders');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image source={require('../assets/deliveryman.png')} />
                <Text style={styles.title}>
                    Acompanhe os pedidos e {'\n'} entregue no prazo
                </Text>
                <Text style={styles.subtitle}>
                    Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão
                </Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </RectButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        alignItems: 'center'
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subtitle: {
        color: '#9e9e9e',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '%15',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#da5c5c',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        letterSpacing: -0.24
    }
})