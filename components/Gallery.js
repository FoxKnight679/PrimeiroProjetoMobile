import {Text, View, StyleSheet, Image} from 'react-native';

export function Profile() {
    return (
        <View style = {styles.profile}>
            <text>MEGA CAVALEIROO </text>
            <text>Alguma coisa</text>

            <Image style = {styles.img} source = {require( '../assets/steveDanca.gif')}/>
        </View>
    )
}

export function Favorites() {
    return(
        <View style= {styles.favorites}>
            <text>GUSTAVO LIMA E VOCÊ, TCHE RE RE TCHE TCHE, TCHE RE RE TCHE TCHE TCHE TCHE. GUSTAVO LIMA E VOCÊ...</text>

            <Image style = {styles.img} source = {{uri: 'https://media.tenor.com/lUbT0ff2HNYAAAAM/earth-globe.gif' }}/>
        </View>
    )
}

export default function Gallery() {
    return(
        <View style={styles.container}>
            <text>Meus componentes</text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"rgb(50, 96, 128)"
    },
    profile: {
        flex: 1,
        alignItems: 'center',  // coloca no meio na horizontal
        justifyContent: 'space-evenly', //faz a separação igualitária dos itens na vertical
        flexDirection: 'row',   //coloca as coisas uma do lado da outra
        backgroundColor:"rgb(145, 19, 19)",
    },
    favorites: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor:"rgb(224, 130, 23)",
    },
    img: {
        width:140,
        height: 140,  
    },

    

    Activitie: {
        flex: 1,
        backgroundColor: "#890"
    },
    text1: {
        flex: 2,
    },
    imgs: {
        flex: 3,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    text2: {
        flex: 2,
        alignSelf: 'flex-end',
    },
    text3: {
        flex: 1,
        alignSelf: 'center',
    },

})

