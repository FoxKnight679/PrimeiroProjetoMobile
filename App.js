import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ProviderCart } from './components/providerCart';

import { Home } from './screens/home';
import { Login } from './screens/login';
import { Feed } from './screens/feed';
import { Counter } from './screens/counter';
import Product from './screens/products';
import { Cadastro } from './screens/cadastro';
import { AddProducts } from './screens/cadastroProducts';
import { Carrinho } from './screens/carrinho';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

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
      <Tabs.Screen name='Products' component={Product}          
      options={{
        tabBarIcon: () => (
          <AntDesign name="barcode" size={30} color={'#ff0000'} />
        ),
      }}/>
      <Tabs.Screen name='Cadastro Produtos' component={AddProducts}          
      options={{
        tabBarIcon: () => (
          <Entypo name="squared-plus" size={30} color={'#ff0000'}  />
        ),
      }}/>
      <Tabs.Screen name='Cart' component={Carrinho}          
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
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options = {{headerShown:false}} name='Login' component={Login} />
          <Stack.Screen options = {{headerShown:false}} name='Cadastro' component={Cadastro} />
          <Stack.Screen options = {{headerShown:false}}name='HomeTab' component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>
  );
}
