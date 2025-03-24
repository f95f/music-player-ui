import { SafeAreaView,Text} from 'react-native';

import { mascara, pages } from '../css/styles';

export default function Splash({navigation}) {

    async function prepare() {
      try {
        //await aguarde a promise tempo função
        await new Promise(tempo => setTimeout(tempo, 3000));
      } catch (e) {
         Alert.alert(e);
      } finally {
        navigation.navigate('Login');
      }
    }

    prepare();


  return (
    <SafeAreaView style={ [mascara.container, pages.blue] }>
        <Text style = { [mascara.paragraph, pages.blue] }>Tela de Splash</Text>
    </SafeAreaView>
  );
}