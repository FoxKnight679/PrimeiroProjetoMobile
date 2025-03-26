import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar'; 
// import { StyleSheet, Text, View } from 'react-native';
// import Gallery, {Profile, Favorites, Image} from './components/Gallery';
//import { Activitie } from './components/Activitie'; o arquivo só com a parte do front end
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/home';
import { Login } from './screens/login';

export default function BottonTab() {

  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Login' component={Login}/>
        <Tabs.Screen name='Home' component={Home}/>
      </Tabs.Navigator>
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