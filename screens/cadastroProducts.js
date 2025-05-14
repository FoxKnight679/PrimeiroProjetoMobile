import { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { bd } from "../controller";
import { collection, addDoc } from "firebase/firestore";

export function AddProducts({navigation}) {

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [image, setImage] = useState("");

    const CadastrarProduto = async () => {
        try {
            await addDoc(collection(bd, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                image,
            });
            setNome(''),
            setValor(''),
            setImage('');
        }
        catch (error) {
            console.log("Não foi possível cadastrar a porcaria do produto, certeza que foi um produto de qualidade ruim, o problema não é do código", error)
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Cadastro de produtos</Text>
            <View style = {styles.margin}>
                <TextInput 
                style = {styles.input}
                placeholder="Nome do produto"
                placeholderTextColor={"#4a5e49"}
                value={nome}
                onChangeText={setNome}/>

                <TextInput 
                style = {styles.input}
                placeholder="Valor do produto"
                placeholderTextColor={"#4a5e49"}                
                value={valor}
                onChangeText={setValor}/>

                <TextInput 
                style = {styles.input}
                placeholder="Imagem do produto"
                placeholderTextColor={"#4a5e49"}                
                value={image}
                onChangeText={setImage}/>
            </View>
            <View>
                <TouchableOpacity onPress= {CadastrarProduto}>
                    <Text style = {styles.link}>Cadastrar produto</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#890",
        justifyContent: "space-evenly",
    },
    title: {
        fontSize: 35,
        color: "#2a024d",
        alignSelf: 'center'
    },
    margin: {
        height: 300,
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        width: 250,
        fontSize: 17,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    link: { 
        alignSelf: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: "#2a024d",
        fontWeight: 'bold'
    }

})


//batata@gmail.com