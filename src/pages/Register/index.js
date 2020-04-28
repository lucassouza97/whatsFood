import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View,TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import logoImg from '../../../assets/logo_teste2.png'
import styles from './styled';

export default function Register () {

  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
  }

  function navigateToLogin(){
    navigation.navigate('Login');
  }

    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={logoImg} />
        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
            placeholder="Nome..."
            placeholderTextColor="#2c3e50"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#2c3e50"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
            placeholder="Senha..."
            placeholderTextColor="#2c3e50"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
            placeholder="Confirmar senha..."
            placeholderTextColor="#2c3e50"
          />
        </View>
          <TouchableOpacity
            style={styles.loginBtn}
          onPress={navigateToHome}>
            <Text style={styles.textButton}>Cadastrar</Text>
            <MaterialCommunityIcons name="account-check-outline" size={22} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={navigateToLogin}
          >
            <Text style={styles.textButton}>
              Voltar
            </Text>
            <Entypo name="back" size={22} color="red"/>
          </TouchableOpacity>
      </View>
    )


}
