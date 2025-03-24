import { SafeAreaView, Text, Button, View } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import GlobalHeader from '../components/header';
import { orange } from '../css/styles';

export default function SongDetails({ route }) {
  const { setCurrentSong } = usePlayer();
  const song = route.params;
  
  if(!song) return;

  return (
    <SafeAreaView style={[ orange.container, orange.background ]}>
      <View style={orange.artifactA} />
      <View style={orange.artifactB} />
      
      <GlobalHeader showHome={true} />
      <Text> { song.name } </Text>
      <Button title="Play" onPress={() => setCurrentSong(song)} />
    </SafeAreaView>
  );
}