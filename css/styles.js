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
});



const mascara = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 32,
    fontWeight: 400,
    textAlign: 'center',
  },
});

const pages = StyleSheet.create({
  green: {
    backgroundColor: '#f6ffeb',
    color: '#455237'
  },
  blue: {
    backgroundColor: '#dee1ff',
    color: '#2c304f'
  },
});

const forms = StyleSheet.create({
  input: {
    backgroundColor: '#6663',
    border: 'unset',
    borderRadius: '16px',
    color: '#888',
    padding: '8px 16px',
    margin: '12px 20px',
    boxShadow: '2px 2px 8px #3333',
    mixBlendMode: 'multiply',
  },
  
  button: {
    backgroundColor: '#6663',
    border: 'unset',
    borderRadius: '16px',
    color: '#888',
    padding: '8px 16px',
    margin: '12px 20px',
    boxShadow: '2px 2px 8px #3333',
    mixBlendMode: 'multiply',
  },
});


export { mascara, pages, forms, orange }