import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ItemCatalog,
  Image,
  TextCatalog,
  TextValue,
  TouchableOpacity,
  SubItemCatalog,
  ItemDescription,
  ViewDescription,
  ViewItem,
} from './styled';
import Image1 from '../../../assets/Catalog/coca.jpg';

export default function Item1() {
  const navigation = useNavigation();

  function navigateToCart() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
        {' '}
        Bebidas{' '}
      </Text>
      <ItemCatalog>
        <ViewItem>
          <Image source={Image1} />
          <ViewDescription>
            <TextCatalog>Coca Cola</TextCatalog>
            <ItemDescription>Refrigerante pet: 350ml</ItemDescription>
          </ViewDescription>
        </ViewItem>
        <SubItemCatalog>
          <TextValue>R$: 7,00</TextValue>
          <TouchableOpacity onPress={navigateToCart}>
            <AntDesign name="shoppingcart" size={28} color="black" />
          </TouchableOpacity>
        </SubItemCatalog>
      </ItemCatalog>

      <ItemCatalog>
        <ViewItem>
          <Image source={Image1} />
          <ViewDescription>
            <TextCatalog>Coca Cola</TextCatalog>
            <ItemDescription>Refrigerante pet: 350ml</ItemDescription>
          </ViewDescription>
        </ViewItem>
        <SubItemCatalog>
          <TextValue>R$: 7,00</TextValue>
          <TouchableOpacity onPress={navigateToCart}>
            <AntDesign name="shoppingcart" size={28} color="black" />
          </TouchableOpacity>
        </SubItemCatalog>
      </ItemCatalog>

      <ItemCatalog>
        <ViewItem>
          <Image source={Image1} />
          <ViewDescription>
            <TextCatalog>Coca Cola</TextCatalog>
            <ItemDescription>Refrigerante pet: 350ml</ItemDescription>
          </ViewDescription>
        </ViewItem>
        <SubItemCatalog>
          <TextValue>R$: 7,00</TextValue>
          <TouchableOpacity onPress={navigateToCart}>
            <AntDesign name="shoppingcart" size={28} color="black" />
          </TouchableOpacity>
        </SubItemCatalog>
      </ItemCatalog>

      <ItemCatalog>
        <ViewItem>
          <Image source={Image1} />
          <ViewDescription>
            <TextCatalog>Coca Cola</TextCatalog>
            <ItemDescription>Refrigerante pet: 350ml</ItemDescription>
          </ViewDescription>
        </ViewItem>
        <SubItemCatalog>
          <TextValue>R$: 7,00</TextValue>
          <TouchableOpacity onPress={navigateToCart}>
            <AntDesign name="shoppingcart" size={28} color="black" />
          </TouchableOpacity>
        </SubItemCatalog>
      </ItemCatalog>
    </Container>
  );
}
