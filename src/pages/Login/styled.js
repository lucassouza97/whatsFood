import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ff9f43',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  inputText:{
    height:50,
    color:"white",
    fontSize: 18,
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#2c3e50",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    marginBottom:10,
    flexDirection: "row",
  },

  textButton:{
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,

  },

  logo:{
    marginBottom:40,
    height: 100,
    width: 200
  },
})

export const Container = styled.View`

`;


