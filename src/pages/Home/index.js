import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import styles from './styled';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Catalog />
    </View>
  );
}
