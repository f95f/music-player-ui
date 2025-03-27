import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const light100 = "#F0F4EF";
const light200 = "#eceee6";
const light900 = "#191512";

const primary400 = "#FD8043";
const primary700 = "#9b2211";
const primary900 = "#440c06";

const secondary400 = "#FFFB9A";

const songStyles = StyleSheet.create({
  
  card: {
    backdropFilter: "blur(30px)",
    padding: 8,
    borderRadius: 4,
    margin: "4px 8px",
    border: "1px solid " + primary900,
    width: "calc(100% - 16px)",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: 'space-between',
    boxShadow: "2px 2px 6px #1116",
  },
  
  bottomCard: {
    backgroundColor: light900,
    padding: 8,
    borderTop: "1px solid " + primary900,
    width: "100%",
    boxShadow: "0px -2px 6px #1116",
  },

  bottomCardTopRow: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
    justifyContent: 'space-between',

  },
  
  songResumesWrapper: {
    flex: 1,
    
  },

  playWrapper: {
    display: "flex",
    paddingTop: "8px",
    paddingRight: "8px",
    alignItems: "center",
  },

  title: {
    color: light100,
    fontSize: "1em",
    fontWeight: 100,
  },

  subtitle: {
    color: light100,
    fontWeight: 100,
    opacity: ".8",
  },

  likeIndicator: {
    color: primary400,
    letterSpacing: 1,
    margin: "0 8px",
    marginBottom: 4,
    fontSize: "1em",
  },

  playbar: {
    width: "100%",
    height: 6,
    backgroundColor: primary900,
  },

  iconText: {
    color: primary400,
  },

  lightIconText: {
    color: light200,
    opacity: ".6",
  },

  smallThumbnail: {
    borderRadius: 2,
    width: 42,
    height: 42,
  },
  
  fullScreenImage: {
    width: "100%",
  },

  detailsWrapper: {
    height: 500,
    width: windowWidth,
    display: "flex",
    justifyContent: "space-between",
  },
  
  detailsTitleRow: {
    padding: "8px 16px",
    borderTop: "1px solid " + primary400,
    borderBottom: "1px solid " + light100,
    background: "#3336",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },

  detailsButton: {
    borderTop: "1px solid " + light100,
    background: "#3336",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },


  songDetailsRowWrapper: {
  },

  currentSongTitle: {
    fontSize: "1.2em",
    color: light100,
  },
});

export { songStyles };