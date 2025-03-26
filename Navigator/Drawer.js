import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar'; 
// import { StyleSheet, Text, View } from 'react-native';
// import Gallery, {Profile, Favorites, Image} from './components/Gallery';
//import { Activitie } from './components/Activitie'; o arquivo só com a parte do front end
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './screens/home';
import { Login } from './screens/login';

export default function Drawer() {

  const drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <drawer.Navigator>
        <drawer.Screen name='Login' component={Login}/>
        <drawer.Screen name='Home' component={Home}/>
      </drawer.Navigator>
    </NavigationContainer>






    // <View style={styles.container}> o arquivo só com a parte do front end
    //   {/* <Login/> */}
    //   {/* <Home/> */}
    // </View>
  );
}

// const styles = StyleSheet.create({  //Usado para criar o 100% do espaço da página
//   container:{ 
//       flex: 1,
//   },
// })