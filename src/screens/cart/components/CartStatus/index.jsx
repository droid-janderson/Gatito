import React from 'react'
import { NumberFormat } from "intl";
import { View, Text } from "react-native";
import CustomButton from '../../../../components/CustomButton';
import style from './style';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../store/cart';
export function CartStatus({ amount, navigation }){
  const dispatch = useDispatch();
  
  return (
    <View style={style.statusBar}>
      <View>
        <Text style={style.info_text}>
          Total do Carrinho
        </Text>
        <Text style={style.info_amount}>
          {NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(amount)}
        </Text>
      </View>
      <View>
        <CustomButton value="Fechar Pedido" inverted action={() => {dispatch(actions.finish()); navigation.navigate('Finish')}}/>
      </View>
    </View>
  )
}