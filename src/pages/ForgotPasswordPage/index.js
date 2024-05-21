import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function ForgotPasswordPage() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F69100', '#FFE8CD', '#F69100']} style={styles.background}/>
      <Image source={require("../../../assets/retangulo.png")} style={styles.retangulo}/>
      <View style={styles.containerTop}>
      </View>
      <View style={styles.containerDown}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <TextInput placeholder="Email" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Recuperar Senha</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
          <Link to={{ screen: "RegisterPage" }}>Cadastre-se </Link>
          <Link to={{ screen: "LoginPage" }}>Voltar para o Login </Link>
        </View>
      </View>
    </View>
  );
}
