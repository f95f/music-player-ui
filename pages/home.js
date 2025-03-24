import { SafeAreaView, View, Button } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import Song from '../components/song';
import { mascara, pages } from '../css/styles';
import { songs } from '../assets/songs';
import { orange } from '../css/styles';

export default function Home({navigation}) {
  const { setCurrentSong } = usePlayer();


  return (
    <SafeAreaView style={[ orange.container, orange.background ]}>
      <View style={orange.artifactA} />
      <View style={orange.artifactB} />

      <Button 
        title="Liked Songs"
        onPress={() => navigation.navigate('LikedSongs')}
      />

      {
        songs.map((item, index) => (
          <Song key={index} song={item} />
        ))
      }
    </SafeAreaView>
  );
}