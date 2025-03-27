import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { usePlayer } from '../contexts/player-provider';
import { useNavigation } from '@react-navigation/native';
import { songStyles } from '../css/song-styling';
import PlayerBar from '../components/player-bar';
import IconButton from '../components/icon-button';

export default function NowPlaying() {
  const navigation = useNavigation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  let { currentSong } = usePlayer();

  if (!currentSong) return null;

  return (
    <TouchableOpacity 
      onPress={() => setIsFullScreen(!isFullScreen)}
    >

      {!isFullScreen && (
        <View style={ songStyles.bottomCard }>
          <View style={ songStyles.bottomCardTopRow }>
            <View style={ songStyles.innerWrapper }>
              <Image source={currentSong.coverUrl} style = { songStyles.smallThumbnail } />
            </View>
            <View style={ [songStyles.innerWrapper, songStyles.songResumesWrapper] }>
              <Text style={ [songStyles.title, { fontFamily: 'HeaderFont' }]} >
                {currentSong.name}
              </Text>
              <Text style={ songStyles.subtitle } >
                { currentSong.author }
              </Text>
            </View>
            <View style={ [songStyles.innerWrapper, songStyles.playWrapper] }>
              <IconButton
                onPress={() => {
                  currentSong = null;
                  setIsFullScreen(false);
                }}
                icon="pause"
                iconClass="light-icon"
                size={24}
              ></IconButton>
            </View>
          </View>
          <PlayerBar />
        </View>
      )}

      {isFullScreen && (
        <ImageBackground source={currentSong.coverUrl} style = { songStyles.detailsWrapper } resizeMode="cover"> 
          
          <View style={ songStyles.detailsTitleRow }>
            <View style={ [songStyles.innerWrapper, songStyles.playWrapper] }>
              <IconButton
                onPress={() => {
                  currentSong = null;
                  setIsFullScreen(false);
                }}
                icon="pause"
                iconClass="light-icon"
                size={24}
              ></IconButton>
            </View>
            <View style={ [songStyles.innerWrapper, songStyles.songDetailsRowWrapper] }>
              <Text style={ [songStyles.currentSongTitle, { fontFamily: 'HeaderFont' }]} >
                {currentSong.name}
              </Text>
              <Text style={ songStyles.subtitle } >
                { currentSong.author }
              </Text>
            </View>
          </View>

          <View style={ songStyles.detailsButton }>
            <IconButton
              onPress={() => {
                navigation.navigate('SongDetails', currentSong)
                setIsFullScreen(false)
              }}
              title="Detalhes"
              icon="info-circle"
              iconClass="light-icon"
              size={24}
            ></IconButton>
          </View>

        </ImageBackground>
      )}

    </TouchableOpacity>
  )
}