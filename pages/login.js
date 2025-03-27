import { SafeAreaView, Text, TextInput, Button, View, Image } from 'react-native';
import { useState } from 'react';
import { songStyles } from '../css/song-styling';
import { orange, elements } from '../css/styles';
import IconButton from '../components/icon-button';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const handleLogin = () => {
    // TODO: Considerar adicionar l[ogica de autenticação
    navigation.navigate('Home');
  };



  return (
    <SafeAreaView style={[ orange.container, orange.background, orange.loginContainer ]}>
      <View style={orange.artifactA} />
      <View style={orange.artifactB} />

      <View style={ orange.loginImageRow } >
        <Image 
          source={require('../assets/images/logo.png')} 
          style = { orange.loginImage }
          resizeMode="contain"  />
      </View>

      <Text style={ [orange.title, { fontFamily: 'HeaderFont' }]} >Identifique-se:</Text>
      
      <TextInput
        style={elements.input}
        onChangeText={setEmail}
        placeholder="Informe seu email"
      />
      <TextInput
        style={elements.input}
        onChangeText={setPassword}
        placeholder="Informe sua senha"
      />
      
      <View style={ elements.button }>
        <IconButton
          onPress={handleLogin}
          title="Entrar"
          size={36}
        ></IconButton>
      </View>
    </SafeAreaView>
  );
}