import {Text, View, StyleSheet, Image} from 'react-native';

export function Activitie() {
    return (
        <View style={styles.Activitie}>
            <View style={styles.text1}>
                <Text>Nesta página veremos exemplos de fisiculturismo avançado de gamers, que assinaram nosso plano anual:</Text>
            </View>
            <View style={styles.imgs}>
                <Image style = {styles.img} source = {{uri: 'https://media.tenor.com/olk7lEobPJMAAAAM/minecraft-buff-steve.gif' }}/>
                <Image style = {styles.img} source = {{uri: 'https://media.tenor.com/-mSuSigi-dQAAAAM/rato-bombado-rato-uzui.gif' }}/>
            </View>
            <View style={styles.text2}>
                <Text>E aqui vemos exemplos do que acontece caso você seja um gamer que não faz nosso curso de fisiculturismo:</Text>
            </View>
            <View style={styles.imgs}>
                <Image style = {styles.img} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGg0Re2EC44cOjRPpAGhh_6EzuaNgCc9pjiQ&s' }}/>
                <Image style = {styles.img} source = {{uri: 'https://i.pinimg.com/236x/fa/db/6d/fadb6dfda18169383cf5b8c0c5b17998.jpg' }}/>
            </View>
            <View style={styles.text3}>
                <Text>Clique aqui e assine seu plano anual agora!</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width:140,
        height: 140,  
    },

    Activitie: {
        flex: 1,
        backgroundColor: "#890"
    },
    text1: {
        flex: 1, //Coloca o tamanho que a view vai precisar, é como se fosse o DIV de html
        padding: 30, //margem de todos os lados
    },
    imgs: {
        flex: 3,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    text2: {
        flex: 2,
        alignSelf: 'flex-end',
        marginLeft: 210,
        marginRight: 10,
    },
    text3: {
        flex: 1,
        alignSelf: 'center',
    },

})
