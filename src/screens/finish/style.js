import { StyleSheet } from 'react-native'
import { colors } from '../../../global-style'

const f16 = {
  fontSize: 16
}
export default StyleSheet.create({
  item: {
    borderBottomColor: '#c5c5c5',
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRigth: '5px',
  },
  name: {
    color: colors.orange,
    ...f16,
    fontWeight: 'bold',
  },
  quantity: {
    color: colors.purple,
    ...f16,
    fontWeight: 'bold',
  },
  price: {
    color: colors.purple,
    ...f16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
})