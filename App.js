import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar'; 
// import { StyleSheet, Text, View } from 'react-native';
// import Gallery, {Profile, Favorites, Image} from './components/Gallery';
//import { Activitie } from './components/Activitie'; o arquivo só com a parte do front end

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/home';
import { Login } from './screens/login';


import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {

  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: "#FF0000", tabBarActiveBackgroundColor: "#4fdb74", tabBarInactiveBackgroundColor: "#a7cfb2", tabBarInactiveTintColor: "#675280", headerStyle: {
          backgroundColor: "#890"},
        headerTintColor: "#1e7004",
        //headerTitleAlign: "center"
      }}>
        <Tabs.Screen name='Login' component={Login}
         options={{
          tabBarIcon: () => (
            <MaterialIcons name='login' size={30} color={'#ff0000'}/>
          ),
        }}/>
        <Tabs.Screen name='Home' component={Home}          
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='home' size={30} color={'#ff0000'}/>
          ),
        }}/>
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