const songs: ISong[] = [
  {
    name: "Stairway to Heaven",
    coverUrl: require("./song-pictures/default-song-image.png"),
    author: "Led Zeppelin",
    genre: "Rock",
    currentPlaying: false,
    liked: true,
  },
  {
    name: "Bohemian Rhapsody",
    coverUrl: require("./song-pictures/default-song-image.png"),
    author: "Queen",
    genre: "Rock",
    currentPlaying: false,
    liked: true,
  },
  {
    name: "Imagine",
    coverUrl: require("./song-pictures/default-song-image.png"),
    author: "John Lennon",
    genre: "Pop",
    currentPlaying: false,
    liked: false,
  },
  {
    name: "Billie Jean",
    coverUrl: require("./song-pictures/default-song-image.png"),
    author: "Michael Jackson",
    genre: "Pop",
    currentPlaying: false,
    liked: false,
  },
  {
    name: "Smells Like Teen Spirit",
    coverUrl: require("./song-pictures/default-song-image.png"),
    author: "Nirvana",
    genre: "Grunge",
    currentPlaying: false,
    liked: false,
  }
];

export { songs };