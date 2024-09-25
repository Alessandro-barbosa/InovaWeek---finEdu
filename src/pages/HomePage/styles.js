import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDFEA",
    width: "100%",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    width: "75%",
    height: "50px",
    backgroundColor: "#D5B4B4",
    padding: "10px",
    fontSize: "20px",
    opacity: "0.9",
    border: "1px solid #867070",
    borderRadius: "5px",
    marginBottom: "5px",
  },
  btn: {
    backgroundColor: "#A8D1D1",
    height: "40px",
    width: "75%",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
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
    height: "12%",
    paddingTop: "40px",
    marginTop: "30px",
    borderBottomEndRadius: "40px",
    borderBottomLeftRadius: "40px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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

  grafico: {
    width: "200px",
    height: "200px",
    marginBottom: "20px",
    borderRadius: "100%",
  },

  miniCotainer1: {
    width: "350px",
    height: "auto",
    backgroundColor: "#FCC742",
    borderRadius: "10px",
    borderColor: "black",
    borderWidth: "1px",
    marginBottom: "30px",
    padding: "20px",
    flexDirection: "row",
  },

  textoTopo: {
    fontSize: "60pt",
    fontWeight: "bold",
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

  icones: {
    height: "40px",
    width: "40px",
  },

  textoContainers: {
    marginLeft: "10px",
  },

  tituloContainers: {
    marginLeft: "10px",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
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

});

export default styles;
