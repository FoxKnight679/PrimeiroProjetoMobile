import { View, Text, Image, StyleSheet } from "react-native";

export default function Card({nome, valor, imagem}) {
    return (
        <View style = {styles.card}>
            <Image style = {styles.img} source={{uri: imagem}}/>
            <View style = {styles.textBox}>
                <Text style = {styles.productText}>{nome}</Text>
                <Text style = {styles.productText}>R$ {valor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    productText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#450',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 5,
    },
    textBox: {
        justifyContent: 'space-evenly',
        paddingLeft: 40
    }
})