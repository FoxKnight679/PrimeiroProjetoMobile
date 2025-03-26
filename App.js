import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar'; 
// import { StyleSheet, Text, View } from 'react-native';
// import Gallery, {Profile, Favorites, Image} from './components/Gallery';
//import { Activitie } from './components/Activitie'; o arquivo só com a parte do front end
import { Home } from './screens/home';
import { Login } from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
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