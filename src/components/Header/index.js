import React, { Component } from 'react'
import {Container, Logo, TxtWelcome, ViewTextExit} from './styled'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import logoImg from '../../../assets/logo_teste2.png'

export default function Header() {

  const navigation = useNavigation();

  function navigateToLogin(){
    navigation.navigate('Login');
  }
    return (
      <Container>
        <Logo source={logoImg} />
        <ViewTextExit>
          <TxtWelcome>Seja bem vindo!</TxtWelcome>
          <TouchableOpacity onPress={navigateToLogin}>
          <MaterialIcons name="exit-to-app" size={28} color="red" />
          </TouchableOpacity>
        </ViewTextExit>
      </Container>
    )
}
