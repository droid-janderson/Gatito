import React from 'react'
import { FlatList } from 'react-native'
import { DefaultScreen } from '../../components/DefaultScreen'
import { CartStatus } from './components/CartStatus'
import Item from './components/Item'

import { useSelector } from "react-redux";
export function Cart({ navigation }) {
  const cart = useSelector((state) => state.cart.itens);
  const total = cart.reduce((result, { price, quantity }) => result + (price * quantity), 0)

  return (
    <DefaultScreen title="Carrinho">
      <CartStatus amount={total} navigation={navigation}></CartStatus>
      <FlatList
        data={cart}
        renderItem={({ item, index }) => <Item {...item} index={index} />}
        keyExtractor={({ id }) => String(id)}
      />
    </DefaultScreen>
  )
}
