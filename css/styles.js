import {StyleSheet} from 'react-native';

const light100 = "#F0F4EF";
const light900 = "#191512";

const primary400 = "#FD8043";
const primary700 = "#9b2211";
const primary900 = "#440c06";

const secondary400 = "#FFFB9A";

const orange = StyleSheet.create({
  container: {
    height: "100vh",
  },
  
  pageHeader: {
    width: "100%",
    padding: 8,
    paddingTop: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pageName: {
    textAlign: "center",
    fontSize: "1.5em",
    fontWeight: "100",
    color: light100,
  },

  background: {
    background: "radial-gradient(circle, " + primary900 + " 0%, " + light900 + " 100%)",
    backgroundSize: "400%",
    
  },
  artifactA: {
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: primary700,
    width: "120%",
    aspectRatio: 1,
    borderRadius: "100%",
    filter: "blur(40px)",
    opacity: ".3",
  },
  artifactB: {
    position: "absolute",
    top: "20%",
    left: "20%",
    backgroundColor: primary400,
    width: "30%",
    aspectRatio: 1,
    borderRadius: "100%",
    filter: "blur(50px)",
    opacity: ".6",
  },

  iconButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  splash: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "30%",
  },

  loginImageRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },

  loginImage: {
    width: "12%",
    height: 120,
    marginTop: 120
  },

  loginContainer: {
    display: "flex",
    gap: 16,
  },

  loginWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  title: {
    color: light100,
    fontSize: "1.6em",
    width: "100%",
    margin: 16,
  },

});


const elements = StyleSheet.create({
  hr: {
    height: 1, 
    backgroundColor: light100,
    opacity: ".3", 
    margin: 8,
  },

  input: {
    color: light100,
    padding: 8,
    margin: 16,
    borderBottom: "1px solid " + primary400,
    opacity: .6,
  },

  button: {
    backgroundColor: "#3336",
    border: "1px solid " + primary400,
    borderRadius: 4,
    padding: 8,
    margin: 16

  },
});

export { orange, elements }