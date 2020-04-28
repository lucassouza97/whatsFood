import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View,TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logoImg from '../../../assets/logo_teste2.png'
import styles from './styled';

export default function Login () {

  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
  }

  function navigateToRegister(){
    navigation.navigate('Register');
  }

    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={logoImg} />
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
          <TouchableOpacity
            style={styles.loginBtn}
          onPress={navigateToHome}>
            <Text style={styles.textButton}>LOGIN</Text>
            <MaterialCommunityIcons name="login-variant" size={22} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.textButton}>
              Cadastrar
            </Text>
          </TouchableOpacity>
      </View>
    )


}
