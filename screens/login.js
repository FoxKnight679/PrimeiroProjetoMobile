import {Text, View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native';

export function Login() {
    return (
        <View style={styles.Login}>
            <View>
                <Text style={styles.text}>Crossgamers</Text>
            </View>
            <View>
                <TextInput
                style = {styles.input}
                placeholder='Digite seu nome aqui'/>
            </View>
            <View>
                <TextInput
                style = {styles.input}
                placeholder='Digite sua senha aqui'/>
            </View>
            <View style = {styles.button}>
            <Button title="LOGIN" color= '#450'/>
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
        marginTop: 130,
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
        marginTop: 110
    }
})
