import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDFEA",
    width: "100%",
    height: "100%",
  },

  containerTop: {
    width: "100%",
    height: "12%",
    paddingTop: "40px",
    marginTop: "30px",
    borderBottomEndRadius: "40px",
    borderBottomLeftRadius: "40px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  containerDown: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
  },

  miniCotainer1: {
    width: "350px",
    height: "auto",
    backgroundColor: "#FCC742",
    borderRadius: "10px",
    marginBottom: "30px",
    padding: "20px",
    flexDirection: "row",
    backgroundColor: "white",
  },

  sombra:{
    shadowColor: "black",
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 9,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  retangulo: {
    marginTop: "45px",
    position: 'absolute',
    height: "90%",
    width: "100%",
  },

  textoContainers: {
    flex: "1",
    marginLeft: "10px",
    flexWrap: "wrap",
  },


  logo: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    borderRadius: "100%",

  },

  seta: {
    width: "32px",
    height: "32px",
    marginLeft: "10px",
    marginTop: "8px",
  },

  alternativas: {
    marginBottom: "24px",
    alignItems: "center",
  },

  confirmar: {
    backgroundColor: "orange",
    borderRadius: "5px",
    width: "100px",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    fontSize: "18px",
  },
});

export default styles;
