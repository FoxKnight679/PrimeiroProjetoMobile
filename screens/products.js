import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import Card from "../components/card";

export default function Product() {
    const[products, setProdutos] = useState([
        {id:1, nome: 'Camiseta', valor: 99.99, imagem: 'https://www.emillydosrosa.com.br/cdn/shop/files/ENSAIO_D_R-84.jpg?v=1720081536'},
        {id:2, nome: 'Moletom', valor: 159.99, imagem: 'https://fieroshop.vtexassets.com/arquivos/ids/186535/moletom-masculino-Ruta-40-canguru-verde.jpg?v=638568403636970000'},
        {id:3, nome: 'Tênis da Nike', valor: 399.99, imagem: 'https://sportime.cdn.magazord.com.br/img/2024/01/produto/73815/tenis-nike-air-max-intrlk-feminino-9433-1-dcf1fd4db84200a9b4bf19b49e904414.jpg'},
        {id:4, nome: 'Trimania', valor: 4.99, imagem: 'https://i.ytimg.com/vi/IcEiS_Mk63c/maxresdefault.jpg'},
        
    ])
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Produtos</Text>
            <FlatList
                data = {products}
                renderItem = {({item}) => (
                    // funçao importada de outro programa
                    <Card 
                        nome = {item.nome}
                        valor = {item.valor}
                        imagem = {item.imagem}
                    />
                )}
                keyExtractor = {item => item.id}
            />



            {/* <Text style = {styles.title}>Produtos</Text>  modo para fazer imprimir as coisas da lista percorrendo pelo map()
            {products.map((item) => (
                <Text style = {styles.productText}>
                    {item.nome} - R$ {item.valor}
                </Text>
            ))} */}
        </View>
    );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#890",
        justifyContent: "space-evenly",
    },
    title: {
        fontSize: 50,
        color: "#2a024d",
        alignSelf: 'center'
    },

})