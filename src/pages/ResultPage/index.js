import { Image, TextInput, View, TouchableOpacity, Text, Button } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import HomePage from "../HomePage";
import { useNavigation } from '@react-navigation/native';


export default function ResultPage(){
    const navigation = useNavigation();
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
          <View>
              <Text style={styles.resultados}>Resultados</Text>
          </View>
          <View>
            <View style={styles.resultadosStyle}>
                <Image source={require("../../../assets/correctIcon.png")} style={styles.resultadoLogos}/>
                <Text>Questão 1 - Certo</Text>
            </View>
            <View style={styles.resultadosStyle}>
                <Image source={require("../../../assets/wrongIcon.png")} style={styles.resultadoLogos}></Image>
                <Text>Questão 2 - Errado</Text>
            </View>
          </View>
          <View style={styles.confirmar}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
              <Text style={styles.buttonText}>Página principal</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
    );
}
