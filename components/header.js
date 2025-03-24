import { View } from 'react-native';
import { navigate } from '../contexts/navigation-ref';
import IconButton from './icon-button';

export default function GlobalHeader({ showHome }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      {showHome && (
        <IconButton 
          onPress={() => navigate('Home')}
          icon="home"
          iconClass="light-icon"
          size={32}
        ></IconButton>
      )}
    </View>
  );
}
