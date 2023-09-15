import { Text, SafeAreaView, StyleSheet, ImageBackground, View, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Roupaa from './components/roupaa';
import Roupaaa from './components/roupaaa';
import Roupaaaa from './components/roupaaaa';
import Botones from './components/botones';


const image = {uri: 'https://i.postimg.cc/qMYXj1rf/Fundo.png'};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.paragraph}>
        Descubra 
      </Text>
      <Text style={styles.segundo}>
        novos estilos
      </Text>
      <View style={styles.caixa}>
        <AssetExample />
        <Roupaa />
      </View>
      <View style={styles.caixaa}>
        <Roupaaa />
        <Roupaaaa />
      </View>
      <Botones />
      </ImageBackground >
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d5bdaf',
    padding: 8,
  },

  image: {
    height: 700,
  },

  paragraph: {
    fontSize: 30,
    paddingTop: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d5bdaf',
  },

  segundo: {
    fontSize: 30,
    paddingTop: 0,
    paddingBottom: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d5bdaf',
  },

  caixa: {
    backgroundColor: '#d5bdaf',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 300,
    paddingTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  caixaa: {
    backgroundColor: '#d5bdaf',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 146,
    paddingTop: 0,
  }
});
