import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';

export function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const VerifyUser = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then(userCredential => {
            console.log('Usuário logado com sucesso', userCredential.user.email);
            navigation.navigate('HomeTab')
        })
        .catch((error) => {
            console.log('Erro ao logar', error.message);
        });
    }
    
    return (
        <View style={styles.Login}>
            <View>
                <Text style={styles.text}>Crossgamers</Text>
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
            <View style = {styles.buttons}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <Text style = {styles.link}>Cadastre-se aqui!</Text>
                </TouchableOpacity>
            </View>

            <Button title="ENTRAR" color= '#450' 
            onPress={VerifyUser}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    Login: {
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
    buttons: {
        margin: 90,
        marginTop: 110,
        height: 110,
        justifyContent: 'space-between'
    },
    link: { 
        alignSelf: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: "#2a024d",
        fontWeight: 'bold'
    }
})
