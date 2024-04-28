import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Resultado(prop){
    return(
        <View style={styles.resultados}>
        <Text style={styles.texto}>{prop.resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultados: {
        marginLeft: 20,
        marginTop: 20, 
        width: 300
    }, 
    texto: {
        fontSize: 20, 
        textAlign: 'justify'
    }
  });