import 'react-native-gesture-handler';

// import { StatusBar } from 'expo-status-bar'; 
// import { StyleSheet, Text, View } from 'react-native';
// import Gallery, {Profile, Favorites, Image} from './components/Gallery';
//import { Activitie } from './components/Activitie'; o arquivo só com a parte do front end

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/home';
import { Login } from './screens/login';
import { Feed } from './screens/feed';
import { Counter } from './screens/counter';
import Product from './screens/products';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

function BottomTabs(){
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: "#FF0000", tabBarActiveBackgroundColor: "#3d9123", tabBarInactiveBackgroundColor: "#a7cfb2", tabBarInactiveTintColor: "#675280", headerStyle: {
        backgroundColor: "#3d9123"},
      headerTintColor: "#530696",
      //headerTitleAlign: "center"
    }}>
      <Tabs.Screen name='Home' component={Home}          
      options={{
        tabBarIcon: () => (
          <MaterialIcons name='home' size={30} color={'#ff0000'}/>
        ),
      }}/>
      <Tabs.Screen name='Feed' component={Feed}          
      options={{
        tabBarIcon: () => (
          <MaterialIcons name='feed' size={30} color={'#ff0000'}/>
        ),
      }}/>
      <Tabs.Screen name='Counter' component={Counter}          
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="counter" size={30} color={'#ff0000'} />
        ),
      }}/>
      <Tabs.Screen name='Product' component={Product}          
      options={{
        tabBarIcon: () => (
          <Entypo name="shopping-cart" size={30} color={'#ff0000'}  />
        ),
      }}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen options = {{headerShown:false}}name='HomeTab' component={BottomTabs}/>
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