import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import React, { useState, useEffect } from 'react';
import { Link } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import HomePage from "../HomePage";
import RadioComponent from "../components/RadioButton/RadioButton";
import { useNavigation } from '@react-navigation/native';

export default function ExercisePage() {
  const navigation = useNavigation();
  return (      
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
          <RadioComponent></RadioComponent>
        </View>
        <View style={styles.confirmar}>
          <TouchableOpacity onPress={() => navigation.navigate('ResultPage')}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
