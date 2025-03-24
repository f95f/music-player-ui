import { SafeAreaView, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { mascara, pages, forms } from '../css/styles';
import { orange } from '../css/styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const handleLogin = () => {
    // TODO: Considerar adicionar l[ogica de autenticação
    navigation.navigate('Home');
  };



  return (
    <SafeAreaView style={[ orange.container, orange.background ]}>
        <Text style = { [mascara.paragraph, pages.green] }>Login</Text>
        
        <TextInput
          style={forms.input}
          onChangeText={setEmail}
          placeholder="Informe seu email"
        />
        <TextInput
          style={forms.input}
          onChangeText={setPassword}
          placeholder="Informe sua senha"
        />
        <Button
          style={forms.button}
          onPress={handleLogin}
          title="Entrar"
          accessibilityLabel="Entre"
        />
    </SafeAreaView>
  );
}