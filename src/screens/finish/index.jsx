import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { DefaultScreen } from '../../components/DefaultScreen'
import { useSelector } from 'react-redux';
import style from './style'
import { FinishStatus } from './components/finishStatus/index';

export function Finish({ navigation }) {
  const cartItens = useSelector((state) => state.cart.itensPagos)
  const total = cartItens.reduce((result, { price, quantity }) => result + (price * quantity), 0)
  return (
    <DefaultScreen title="Finish">
      <FinishStatus amount={total} navigation={navigation}></FinishStatus>
      <FlatList
        data={cartItens}
        renderItem={({ item }) => <View style={style.item}>
            <Text style={style.name}>{item.name}</Text>
          <View>
            <Text style={style.quantity}>Quantidade: {item.quantity}</Text>
            <Text style={style.price}>{
            Intl.NumberFormat('pt-Br', {
              style: 'currency', currency: 'BRL'
            }).format(item.quantity * item.price)
          }</Text>
          </View>
          </View>}
        keyExtractor={({ id }) => String(id)}
      />
    </DefaultScreen>
  )
}
