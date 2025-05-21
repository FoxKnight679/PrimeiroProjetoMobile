import { View, Text, Image, StyleSheet, Button, FlatList } from "react-native";
import { UseCarrinho } from "../components/providerCart";

export function Carrinho({navigation}) {
    const {carrinho} = UseCarrinho();

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Carrinho</Text>
            <FlatList
                data={carrinho}
                renderItem = {({item}) => (
                    <View style = {styles.card}>
                        <Image style = {styles.img} source={{uri: item.imagem}}/>
                        <View style = {styles.textBox}>
                            <Text style = {styles.productText}>{item.nome}</Text>
                            <Text style = {styles.productText}>R$ {item.valor}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#890",
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        color: "#2a024d",
        alignSelf: 'center'
    },
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