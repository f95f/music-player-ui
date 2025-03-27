import { StyleSheet } from 'react-native';

const light100 = "#F0F4EF";
const light200 = "#eceee6";
const light900 = "#191512";

const primary400 = "#FD8043";
const primary700 = "#9b2211";
const primary900 = "#440c06";

const secondary400 = "#FFFB9A";

const songDetailStyles = StyleSheet.create({
  
  fullScreenImage: {
    width: "100%",
  },

  detailsWrapper: {
    height: 500,
    display: "flex",
    justifyContent: "space-between",
  },
  
  detailsTitleRow: {
    padding: "8px 16px",
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

  songDescriptionTitle: {
    color: light100,
    fontWeight: 100,
    fontSize: "1.6em",
  },

  songDescription: {
    marginTop: 8,
    opacity: ".8",
    color: light100,
    fontSize: "1em",
    textAlign: "justify"
  },

  songDescriptionWrapper: {
    backdropFilter: "blur(30px)",
    padding: 8,
    borderTop: "1px solid " + primary900,
    display: "flex",
    gap: 8,
    paddingBottom: 80,
  },
});

export { songDetailStyles };