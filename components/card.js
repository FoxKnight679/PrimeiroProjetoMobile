import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function Card({nome, valor, imagem, comprar}) {
    return (
        <View style = {styles.card}>
            <Image style = {styles.img} source={{uri: imagem}}/>
            <View style = {styles.textBox}>
                <Text style = {styles.productText}>{nome}</Text>
                <Text style = {styles.productText}>R$ {valor}</Text>
                <Button color = "#890" title="Comprar" onPress={comprar} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    productText: {
        fontSize: 22,
        fontWeight: 'bold',
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
        borderWidth: 4,
    },
    textBox: {
        height: 120,
        width: 180,
        justifyContent: 'space-between',
        paddingLeft: 40
    },
})