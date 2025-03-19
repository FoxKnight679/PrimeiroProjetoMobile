import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gallery, {Profile, Favorites, Image} from './components/Gallery';
import { Activitie } from './components/Activitie';
import { Home } from './screens/home';
import { Login } from './screens/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({  //Usado para criar o 100% do espaço da página
  container:{
      flex: 1,
  },
})