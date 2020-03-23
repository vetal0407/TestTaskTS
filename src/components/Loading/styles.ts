import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  wrapper: {
    width,
    height,

    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
