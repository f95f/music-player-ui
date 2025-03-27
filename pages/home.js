import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import Song from '../components/song';
import IconButton from '../components/icon-button';
import { songs } from '../assets/songs';
import { orange, elements } from '../css/styles';

export const fontes = {
  HeaderFont:require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
}

export default function Home({navigation}) {
  const { setCurrentSong } = usePlayer();


  return (
    <SafeAreaView style={[ orange.container, orange.background ]}>
      <View style={orange.artifactA} />
      <View style={orange.artifactB} />

      <View style={ orange.pageHeader }>
        <IconButton 
          onPress={() => navigation.navigate('LikedSongs')}
          icon="star"
          iconClass="light-icon"
          size={32}
        ></IconButton>

        <Text style={ [orange.pageName, { fontFamily: 'HeaderFont' }] }>Início</Text>

        <IconButton 
          onPress={() => navigation.navigate('Settings')}
          icon="cog"
          iconClass="light-icon"
          size={32}
        ></IconButton>
      </View>
      <View style={ elements.hr } />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {
          songs.map((item, index) => (
            <Song key={index} song={item} />
          ))
        }
      </ScrollView>

      <View style={ elements.hr } />
    </SafeAreaView>
  );
}