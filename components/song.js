import { View, Text, Image } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import { songStyles } from '../css/song-styling';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconButton from './icon-button';
import Icon from "react-native-vector-icons/FontAwesome";

export const fontes = {
  HeaderFont:require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
}

export default function Song({ song }) {
  const { setCurrentSong } = usePlayer();

  return (
    <View style={ songStyles.card }>
      <View style={ songStyles.innerWrapper }>
        <Image source={song.coverUrl} style = { songStyles.smallThumbnail } />
      </View>
      <View style={ [songStyles.innerWrapper, songStyles.songResumesWrapper] }>
        <Text style={ [songStyles.title, { fontFamily: 'HeaderFont' }]} >
          {song.name}
          { song.liked && <Icon name="star" style={ songStyles.likeIndicator }/> }
        </Text>
        <Text style={ songStyles.subtitle } >
          { song.author }
        </Text>
      </View>
      <View style={ [songStyles.innerWrapper, songStyles.playWrapper] }>
        <IconButton 
          onPress={() => setCurrentSong(song)}
          icon="play"
          iconClass="light-icon"
          size={24}
        ></IconButton>
      </View>
    </View>
  );
}