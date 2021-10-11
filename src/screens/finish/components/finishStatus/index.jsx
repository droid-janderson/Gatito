import React from 'react'
import { NumberFormat } from "intl";
import { View, Text } from "react-native";
import style from './style';
import { useDispatch } from 'react-redux';
import CustomButton from '../../../../components/CustomButton';
import { actions } from '../../../../store/cart';

export function FinishStatus({ amount, navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={style.statusBar}>
      <View>
        <Text style={style.info_text}>
          Total Gasto
        </Text>
        <Text style={style.info_amount}>
          {NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)}
        </Text>
      </View>
      <View>
        <CustomButton value="Concluir" inverted action={() => { dispatch(actions.reset()); navigation.navigate('Services') }} />
      </View>

    </View>
  )
}