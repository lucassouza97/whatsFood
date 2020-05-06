import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ff9f43',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const Container = styled.View``;

export const ViewCart = styled.View`
  height: 500px;
  margin-top: 5%;
  background-color: white;
  border-radius: 8px;
`;
