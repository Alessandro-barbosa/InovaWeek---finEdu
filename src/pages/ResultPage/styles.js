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
    paddingTop: "40px",
    gap: "2px",
  },
  resultados:{
    fontSize: "25px",
    marginBottom: "10px",
  },

  resultadosStyle:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3DADA",
    height: "48px",
    width: "304px",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  resultadoLogos: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginLeft: 10,
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
