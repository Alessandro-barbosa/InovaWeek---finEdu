import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDFEA",
    width: "100%",
    height: "100%",    
    // justifyContent: "center",
  },
  input: {
    width: "75%",
    height: "50px",
    backgroundColor: "white",
    padding: "10px",
    fontSize: "20px",
    opacity: "0.9",
    border: "1px solid grey",
    borderRadius: "5px",
    marginBottom: "32px",
    placeholderTextColor: 'grey',
  },
  btn: {
    backgroundColor: "#4169E1",
    height: "50px",
    width: "75%",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '20px',
    marginBottom: "10px",
  },
  btnTxt: {
    fontSize: "22px",
  },
  viewLinks: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  containerTop: {
    width: "100%",
    height: "20%",
    gap: "10px",
    paddingTop: "40px",
    paddingLeft: "40px",
    borderBottomEndRadius: "40px",
    borderBottomLeftRadius: "40px",
  },

  textoHeaderTop: {
    fontSize: "18pt",
    fontWeight: "bold",
  },

  containerDown: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
  },

  logo: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    borderRadius: "100%",
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  retangulo: {
    marginTop: "100px",
    position: 'absolute',
    height: "80%",
    width: "100%",
  },

  welcomeText: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "10px",
    
  },
});

export default styles;
