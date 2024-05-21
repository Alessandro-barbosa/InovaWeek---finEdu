import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <LinearGradient start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} colors={['#F69100', '#FFE8CD', '#F69100']} style={styles.background}/>
      <Image source={require("../../../assets/retangulo.png")} style={styles.retangulo}/>
      <View style={styles.containerTop}>
      </View>
      <View style={styles.containerDown}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Bem Vindo!</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
        <TouchableOpacity style={styles.btn}>
          <Link to={{ screen: "HomePage" }}>
            <Text style={styles.btnTxt}>Login</Text>
          </Link>
        </TouchableOpacity>
        <View style={styles.viewLinks}>
          <Link to={{ screen: "ForgotPasswordPage" }}>Esqueceu a senha? </Link>
          <Link to={{ screen: "RegisterPage" }}>Cadastre-se </Link>
        </View>
      </View>
    </View>
  );
}
