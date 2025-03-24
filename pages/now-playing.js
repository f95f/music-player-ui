import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import { useNavigation } from '@react-navigation/native';
import PlayerBar from '../components/player-bar';

export default function NowPlaying() {
  const navigation = useNavigation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  let { currentSong } = usePlayer();

  if (!currentSong) return null;

  return (
    <TouchableOpacity onPress={() => setIsFullScreen(!isFullScreen)}>
      <View style={isFullScreen ? styles.fullScreen : styles.normal}>
        <Text style={styles.text}>Now Playing: {currentSong.name}</Text>
        {isFullScreen && (
          <View>
            <Image source={currentSong.coverUrl} style = { styles.img1 } />
            
            <Button
              title="Detalhes"
              onPress={() => {
                navigation.navigate('SongDetails', currentSong)
                setIsFullScreen(false)
              }}
            />
            <Button
              title="Parar"
              onPress={() => {
                currentSong = null;
                setIsFullScreen(false);
              }}
            />
          </View>      
        )}
        <PlayerBar />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ // TODO: mover para o styles.js
  normal: {
    padding: 10,
    backgroundColor: '#222',
    // other styling for the compact view
  },
  fullScreen: {
    backgroundColor: 'red',
    // other styling for the full-screen view
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  details: {
    color: '#ccc',
    marginTop: 10,
    fontSize: 14,
  },
  img1: {
    width: "100%",
    height: 300
  }
});