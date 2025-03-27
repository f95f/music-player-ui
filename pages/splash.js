import { SafeAreaView, Image, Text, View } from 'react-native';

import { orange } from '../css/styles';

export default function Splash({navigation}) {

    async function prepare() {
      try {
        await new Promise(tempo => setTimeout(tempo, 3000));
      } catch (e) {
         Alert.alert(e);
      } finally {
        navigation.navigate('Login');
      }
    }

    prepare();


  return (
    <SafeAreaView style={[ orange.container, orange.background, orange.splash ]}>
      <View style={orange.artifactA} />
      <View style={orange.artifactB} />
      <Image 
        source={require('../assets/images/logo.png')} 
        style = { orange.logo }
        resizeMode="contain"  />
    </SafeAreaView>
  );
}