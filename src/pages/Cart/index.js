import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import logoImg from '../../../assets/logo_teste2.png'
import { Feather } from '@expo/vector-icons'

import styles from './styled'

export default function Cart() {
  const navigation = useNavigation();
  function navigationBack(){
    navigation.goBack();
  }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <TouchableOpacity onPress={navigationBack}>
            <Feather name="arrow-left" size={28} color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

