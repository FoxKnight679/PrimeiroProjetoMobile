import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components/card";
import { bd } from "../controller";
import { collection, getDocs } from "firebase/firestore";


export default function Product() {
    const[produtos, setProdutos] = useState([]);

        useEffect(() => {
            async function carregarProdutos() {
                try {
                    const querySnapshot = await getDocs(collection(bd, 'produtos'));
                    const lista = [];
                    querySnapshot.forEach((doc) => {
                        lista.push({ id: doc.id, ...doc.data() });
                    });
                    setProdutos(lista);
                } catch (error) {
                    console.log("Erro ao buscar os produtos: ", error);
                }
            }

            carregarProdutos();
        }, []);
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Produtos</Text>
            <FlatList
                data = {produtos}
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