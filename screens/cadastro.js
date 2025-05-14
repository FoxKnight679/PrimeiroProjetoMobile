import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../controller";

export function Cadastro({navigation}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => { //verifica se oq ta escrito segue os padroes do firebase
            console.log('cadastrado!', userCredential.user.email); //aqui dentro vai as açoes que quer q ele faça caso siga os padroes do firebase
            navigation.navigate('Login')
          })
          .catch((error) => { //se n atendeu aos critérios vem pra cá
            console.log('erro', error.message)
          });
    }

    return (
        <View style={styles.cadastro}>
            <View>
                <Text style={styles.text}>Cadastro</Text>
            </View>

            <View>
                <TextInput 
                style = {styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}/>
            </View>

            <View>
                <TextInput 
                style = {styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry = {true}/>
            </View>

            <View style = {styles.button}>
            <Button title="CADASTRAR" color= '#450' 
            onPress={cadastroUser}/>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style = {styles.link}>Já tem uma conta? faça login aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    cadastro: {
        flex: 1,
        backgroundColor: "#890"
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 90,
        fontSize: 50,
    },
    input: {
        flex: 1,
        marginLeft: 75,
        marginRight: 75,
        marginTop: 135,
        fontSize: 17,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        margin: 90,
        marginTop: 110,
    },
    link: { 
        alignSelf: 'center',
        fontSize: 19,
        textDecorationLine: 'underline',
        color: "#2a024d",
        fontWeight: 'bold'
    }
})