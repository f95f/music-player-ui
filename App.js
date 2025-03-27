
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PlayerProvider } from './contexts/player-provider';
import { navigationRef } from './contexts/navigation-ref';
import { View } from 'react-native';

import Splash from './pages/splash';
import Login from './pages/login';
import Home from './pages/home';
import Playlist from './pages/playlist';
import SongDetails from './pages/song-details';
import LikedSongs from './pages/liked-songs';
import Settings from './pages/settings';
import NowPlaying from './pages/now-playing';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PlayerProvider>
      <NavigationContainer ref={navigationRef}>

          <Stack.Navigator
            initialRouteName="Splash"
          >
            <Stack.Screen 
              name="Splash" 
              component={Splash} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Playlist" 
              component={Playlist} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="SongDetails" 
              component={SongDetails} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="LikedSongs" 
              component={LikedSongs} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Settings" 
              component={Settings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>

          <NowPlaying />

      </NavigationContainer>
    </PlayerProvider>
  );
}
