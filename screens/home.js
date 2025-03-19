import {Text, View, StyleSheet, Image} from 'react-native';
import { ImageBackground } from 'react-native';

export function Home() {
    return (
        <View style={styles.Home}>
            <ImageBackground source = {{uri: 'https://cdn.bemcolar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/papel-de-parede-cinza-para-academia.jpg' }} style={{width: '100%', height: '100%'}}>
                <View>
                    <Text style={styles.text1}>Nesta página veremos exemplos de fisiculturismo avançado de gamers, que assinaram nosso plano anual:</Text>
                </View>
                <View style={styles.imgs}>
                    <Image style = {styles.img} source = {{uri: 'https://media.tenor.com/olk7lEobPJMAAAAM/minecraft-buff-steve.gif' }}/>
                    <Image style = {styles.img} source = {{uri: 'https://media.tenor.com/-mSuSigi-dQAAAAM/rato-bombado-rato-uzui.gif' }}/>
                </View>
                <View>
                    <Text style={styles.text2}>E aqui vemos exemplos do que acontece caso você seja um gamer que não faz nosso curso de fisiculturismo:</Text>
                </View>
                <View style={styles.imgs}>
                    <Image style = {styles.img} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGg0Re2EC44cOjRPpAGhh_6EzuaNgCc9pjiQ&s' }}/>
                    <Image style = {styles.img} source = {{uri: 'https://i.pinimg.com/236x/fa/db/6d/fadb6dfda18169383cf5b8c0c5b17998.jpg' }}/>
                </View>
                <View>
                    <Text style={styles.text3}>Clique aqui e assine seu plano anual agora!</Text>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width:140,
        height: 140,  
    },

    Home: {
        flex: 1,
    },
    text1: {
        flex: 1, //Coloca o tamanho que a view vai precisar, é como se fosse o DIV de html
        padding: 30, //margem de todos os lados
        color: '#191970'
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
        color: '#191970'
    },
    text3: {
        flex: 1,
        alignSelf: 'center',
        color: '#191970',
    },

})
