import React, { Component } from 'react'
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import {View, Text} from 'react-native';
import {
  Container,
  ItemCatalog,
  Image,
  TextOrder,
  TextCatalog,
  TextValue,
  ScrollView,
  TouchableOpacity,
  SubItemCatalog,
  ItemHeader,
  ItemDescription,
  ViewDescription,
  ViewItem,
  ViewButtons,
  TextButton,
  ViewInitial,
  ViewCart,
  TextCart,
  ViewHeader
} from './styled'
import Item1 from '../../../assets/Catalog/cheeseburger.png'
import Item2 from '../../../assets/Catalog/burguer2.png'
import Item3 from '../../../assets/Catalog/burguer3.png'
import Item4 from '../../../assets/Catalog/burguer4.png'
import Item5 from '../../../assets/Catalog/burguer5.png'

export default function Catalog() {
  const navigation = useNavigation();

  function navigateToCart(){
    navigation.navigate('Cart');
  }

    return (
      <Container>
        <ViewHeader>
          <TextOrder>Monte seu pedido abaixo</TextOrder>
          <ViewCart onPress={navigateToCart}>
              <TextCart>
                Carrinho
              </TextCart>
              <AntDesign
              name="shoppingcart"
              size={25}
              color="green"
              style={{marginBottom: 8}} />
          </ViewCart>
        </ViewHeader>



          <ScrollView>
            <ItemCatalog>
            <ViewItem>
              <Image source={Item1}/>
                  <ViewDescription>
                      <TextCatalog>Cheeseburger</TextCatalog>
                      <ItemDescription>180g de blend bovino com queijo muçarela no pão de
                        brioche e maionese de alho a parte.
                      </ItemDescription>
                  </ViewDescription>
            </ViewItem>
                <SubItemCatalog>
                    <TextValue>R$: 20,00</TextValue>
                    <TouchableOpacity onPress={navigateToCart}>
                    <AntDesign name="shoppingcart" size={28} color="black" />
                    </TouchableOpacity>
                </SubItemCatalog>
            </ItemCatalog>
         </ScrollView>


      </Container>
    )
  }

