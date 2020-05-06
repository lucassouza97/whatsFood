import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TextOrder,
  ScrollView,
  ViewCart,
  TextCart,
  ViewHeader,
  ScrollViewH,
  ContainerItem,
} from './styled';

import Item1 from '../Item1';
import Item2 from '../Item2';
import Item3 from '../Item3';

export default function Catalog() {
  const navigation = useNavigation();

  function navigateToCart() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <ViewHeader>
        <TextOrder>Monte seu pedido abaixo</TextOrder>
        <ViewCart onPress={navigateToCart}>
          <TextCart>Carrinho</TextCart>
          <AntDesign
            name="shoppingcart"
            size={25}
            color="green"
            style={{ marginBottom: 8 }}
          />
        </ViewCart>
      </ViewHeader>

      <ScrollViewH>
        <ContainerItem>
          <ScrollView>
            <Item1 />
          </ScrollView>
        </ContainerItem>
        <ContainerItem>
          <ScrollView>
            <Item2 />
          </ScrollView>
        </ContainerItem>
        <ContainerItem>
          <ScrollView>
            <Item3 />
          </ScrollView>
        </ContainerItem>
      </ScrollViewH>
    </Container>
  );
}
