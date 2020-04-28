import React from 'react'
import { View } from 'react-native'
import Header from '../Header'
import Catalog from '../Catalog'
import styles from './styled'


export default function Home() {
    return (
      <View style={styles.container}>
        <Header/>
        <Catalog/>
      </View>
    )
  }

