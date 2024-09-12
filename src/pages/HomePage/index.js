import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import LoginPage from "../LoginPage";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F69100', '#FFE8CD', '#F69100']} style={styles.background}/>
      <Link to={{screen: LoginPage}}>
        <Image source={require("../../../assets/arrow_back_ios.png")} style={styles.seta}/>
      </Link>
      <Image source={require("../../../assets/background.png")} style={styles.retangulo}/>
      <View style={styles.containerTop}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo}/>
      </View>
      <View style={styles.containerDown}>
        
          <View style={styles.miniCotainer1}>
            <Image source={require("../../../assets/teaching.png")} style={styles.icones}/>
            <View>
              <Text style={styles.tituloContainers}>Treinamento</Text>
              <Text style={styles.textoContainers}>Treine seus conhecimentos com quiz</Text>
            </View>
          </View>
        <View style={styles.miniCotainer1}>
          <Image source={require("../../../assets/thinking.png")} style={styles.icones}/>
          <View>
            <Text style={styles.tituloContainers}>Básico</Text>
            <Text style={styles.textoContainers}>Relembre conceitos básicos</Text>
          </View>
        </View>
        <Link to={{ screen: "ExercisePage" }}>
        <View style={styles.miniCotainer1}>
          <Image source={require("../../../assets/atividades.png")} style={styles.icones}/>
          <View>
            <Text style={styles.tituloContainers}>Atividades Diárias</Text>
            <Text style={styles.textoContainers}>Atividades diárias</Text>
          </View>
        </View>
        </Link>

      </View>
    </View>
  );
}
