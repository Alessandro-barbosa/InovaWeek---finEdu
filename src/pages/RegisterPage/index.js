import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterPage() {
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
        <TextInput placeholder="Password" style={styles.input} />
        <TextInput placeholder="Confirm Password" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Registrar</Text>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
          <Link to={{ screen: "ForgotPasswordPage" }}>Esqueceu a senha? </Link>
          <Link to={{ screen: "LoginPage" }}>Voltar para o Login </Link>
        </View>
      </View>
    </View>
  );
}
