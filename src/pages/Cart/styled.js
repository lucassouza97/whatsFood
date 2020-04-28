import styled from 'styled-components/native';
import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ff9f43",
    paddingHorizontal: 20,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}
)



export const Container = styled.View`

`;



