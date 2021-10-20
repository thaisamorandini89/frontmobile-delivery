import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Header(){

    return (
        <View style={styles.container}>
            <Image source={require('../assets/lw.png')} />
            <Text style={styles.text}>DS Delivery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#da5c5c',
       height: 90,
       paddingTop: 50,
       flexDirection: 'row',
       justifyContent: 'center' 
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#fff',
        marginLeft: 15
    }
})