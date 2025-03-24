import { SafeAreaView, View } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import Song from '../components/song';
import { orange } from '../css/styles';
import { songs } from '../assets/songs';
import GlobalHeader from '../components/header'

export default function LikedSongs({navigation}) {
  const { setCurrentSong } = usePlayer();
  const likedSongs = songs.filter(music => music.liked)

  return (
    <SafeAreaView style={[ orange.container, orange.background ]}>
    <View style={orange.artifactA} />
    <View style={orange.artifactB} />
      <GlobalHeader showHome={true} />
      {
        likedSongs.map((item, index) => (
          <Song key={index} song={item} />
        ))
      }
    </SafeAreaView>
  );
}