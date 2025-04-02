import { View, Text, Image, Button, StyleSheet } from "react-native";

export function Feed({navigation}) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Feed da Crossgamers</Text>
            <Text style = {styles.text}>Melhore sua saúde por apenas R$ 12,99 por mês</Text>
            <Text style = {styles.text}>Às vezes, a felicidade não está em grandes conquistas, mas nas pequenas ações diárias, então assine nosso plano mensal agora mesmo e pouco a pouco se torne uma pessoa mais feliz.</Text>
            
            <Image style = {styles.imgs} source={{uri: 'https://pbs.twimg.com/media/DpKmSFmWkAAs3rk.jpg'}}/>

            <View style = {styles.button}>
                <Button title="Saiba mais" color= '#450' onPress={() => navigation.navigate("Home")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#890"
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 35,
        color: "#2a024d"
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 40,
        margin: 20,
    },
    imgs: {
        flex: 2,
        width: "350px",
        height: "400px",
        alignSelf: "center"
    },
    button: {
        margin: 90,
    }
}) 
