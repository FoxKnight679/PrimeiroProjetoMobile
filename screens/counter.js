import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";


export function Counter() {
    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function Aumentar (){
        setContador(contador + 1)
    }
    
    function Diminuir (){
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Contador da Crossgamers</Text>
            <Text style = {styles.text}>Contador: {contador}</Text>

            <View style = {styles.row}>
                <TouchableOpacity style = {styles.button} onPress={Aumentar}> 
                    <Text style = {styles.txtButton}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress={Diminuir}> 
                    <Text style = {styles.txtButton}>-</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TextInput style = {styles.input} placeholder='Batata' placeholderTextColor={"#4a5e49"} value={nome} onChangeText={setNome}/>
            </View>
            <View>
                <TextInput style = {styles.input} placeholder='Banana' placeholderTextColor={"#4a5e49"} value={email} onChangeText={setEmail}/>
            </View>
            <Text>Oi, {nome}, seu email é {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#890",
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: "#2a024d"
    },
    text: {
        fontSize: 30,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '70%'
    },
    button: {
        width: "30%", 
        borderRadius: "10%",
        backgroundColor: '#450'
    },
    txtButton: {
        textAlign: "center",
        color: "white",
        fontSize: 30
    },
    input: {
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 8,
    },
}) 