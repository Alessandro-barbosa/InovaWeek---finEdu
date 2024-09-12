import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
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
                <Text>Q.1 Certo</Text>
            </View>
            <View style={styles.resultadosStyle}>
                <Image source={require("../../../assets/wrongIcon.png")} style={styles.resultadoLogos}></Image>
                <Text>Q.2 Errado</Text>
            </View>
          </View>
          <View style={styles.confirmar}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
    );
}