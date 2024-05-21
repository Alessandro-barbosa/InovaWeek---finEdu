import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import HomePage from "../HomePage";

export default function ExercisePage(){
    return(
    <View style={styles.container}>
      <LinearGradient colors={['#F69100', '#FFE8CD', '#F69100']} style={styles.background}/>
      <Link to={{screen: HomePage}}>
        <Image source={require("../../../assets/arrow_back_ios.png")} style={styles.seta}/>
      </Link>
      <Image source={require("../../../assets/background.png")} style={styles.retangulo}/>
      <View style={styles.containerTop}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo}/>
      </View>
      <View style={styles.containerDown}>
          <View style={[styles.miniCotainer1, styles.sombra]}>
              <Text style={styles.textoContainers}>João juntou R$ 10 em seu cofrinho. Ele quer comprar um brinquedo que custa R$ 15. 
              Quanto tempo João precisa esperar para ter dinheiro suficiente se ele consegue juntar R$ 2 por semana?
Dica: Pense quantas vezes o valor que João precisa juntar (R$ 15) é maior que o valor que ele junta por semana (R$ 2).</Text>
          </View>
          <View style={styles.questoes}>
            <View>
              <View style={styles.alternativas}>
                <Image source={require("../../../assets/butao.png")} style={styles.botoes}/>
                <Text style={styles.textoQuestoes}>25 semanas.</Text>
              </View>
              <View style={styles.alternativas}>
                <Image source={require("../../../assets/butao.png")} style={styles.botoes}/>
                <Text style={styles.textoQuestoes}>1 semana.</Text>
              </View>
              <View style={styles.alternativas}>
                <Image source={require("../../../assets/radio_button_checked.png")} style={styles.botoes}/>
                <Text style={styles.textoQuestoes}>2,5 semanas.</Text>
              </View>
              <View style={styles.alternativas}>
                <Image source={require("../../../assets/butao.png")} style={styles.botoes}/>
                <Text style={styles.textoQuestoes}>10 semanas.</Text>
              </View>
            </View>
          </View>
          <View style={styles.confirmar}>
            <TouchableOpacity>Confirmar</TouchableOpacity>
          </View>
      </View>
    </View>
    );
}