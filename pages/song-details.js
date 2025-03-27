import { ImageBackground, SafeAreaView, Text, Button, View, ScrollView } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import GlobalHeader from '../components/header';
import { orange } from '../css/styles';
import { songStyles } from '../css/song-styling';
import { songDetailStyles } from '../css/song-details-styling';

import IconButton from '../components/icon-button';

export default function SongDetails({ route }) {
  const { setCurrentSong } = usePlayer();
  let song = route.params;
  
  if(!song) return;

  return (
    <SafeAreaView style={[ orange.container, orange.background ]}>
      <View style={orange.artifactA} />
      <View style={orange.artifactB} />
      
      <GlobalHeader showHome={true} pageName="Detalhes"/>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={song.coverUrl} style = { songStyles.detailsWrapper } resizeMode="fit"> 
    
        </ImageBackground>

        <View style={ songDetailStyles.songDescriptionWrapper }>
          <Text style={ [songDetailStyles.songDescriptionTitle, { fontFamily: 'HeaderFont' }]} >
            {song.name}
          </Text>

          <Text style={ songStyles.subtitle } >
            { song.author }
          </Text>

          <Text style={ songDetailStyles.songDescription} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis vitae nulla quis elementum. Nullam auctor mauris sit amet tempor suscipit. Nullam massa sapien, fermentum vel ante nec, pharetra tempus odio. Etiam et dolor varius, maximus urna in, lobortis justo. Sed elementum lacinia mi, fringilla rutrum purus. Vestibulum eget justo finibus, hendrerit lorem a, interdum lacus. Nam tincidunt sed eros a laoreet. Mauris ut velit condimentum, aliquet tellus ac, gravida orci. Nulla id tincidunt sapien, in pellentesque nulla. Nullam eget justo orci. Vivamus iaculis dolor vitae est commodo, a auctor odio accumsan. Donec vulputate sapien non porta scelerisque. 
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}