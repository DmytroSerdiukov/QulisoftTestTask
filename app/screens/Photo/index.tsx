import { Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type PhotoProps = {
  route: any
}
const Photo: React.FC<PhotoProps> = ({ route }) => {
  const { id, url } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: url }}
        resizeMode={'cover'}
        resizeMethod={'resize'}
      />
    </SafeAreaView>
  )
}

export default Photo

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
})
