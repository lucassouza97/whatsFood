import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../../assets/logo_teste2.png';

import styles, { ViewCart } from './styled';

export default function Cart() {
  const navigation = useNavigation();
  function navigationBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <ViewCart />
    </View>
  );
}
