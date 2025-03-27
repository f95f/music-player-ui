import { View, Text, TouchableOpacity } from 'react-native';
import { songStyles } from '../css/song-styling';
import { orange } from '../css/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconButton({ onPress, icon, title, size, iconClass }) {
  
  let iconStyle;

  switch(iconClass) {
    case('light-icon'):
      iconStyle = songStyles.lightIconText;     
      break;

    default:
      iconStyle = songStyles.iconText;
  } 
  
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={ orange.iconButton }>
        <Icon name={icon} size={size} style={ iconStyle }/>
        <Text style={ iconStyle }>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}