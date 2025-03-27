import { View, Text } from 'react-native';
import { navigate } from '../contexts/navigation-ref';
import { orange } from '../css/styles';
import IconButton from './icon-button';

export const fontes = {
  HeaderFont:require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
}

export default function GlobalHeader({ showHome, pageName }) {
  return (
    <View style={ orange.pageHeader }>
      {showHome && (
        <IconButton 
          onPress={() => navigate('Home')}
          icon="home"
          iconClass="light-icon"
          size={32}
        ></IconButton>
      )}
      <Text style={ [orange.pageName, { fontFamily: 'HeaderFont' }] }>{ pageName }</Text>

      <IconButton 
        onPress={() => navigation.navigate('Settings')}
        icon="cog"
        iconClass="light-icon"
        size={32}
      ></IconButton>
    </View>
  );
}
