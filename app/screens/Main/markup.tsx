import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PhotoCard from '../../components/PhotoCard'
import useDeviceWidth from '../../hooks/useDeviceWidth'

interface IProps {
  photos: PhotoProps[]
}

type PhotoProps = {
  id: string
  name: string
  small: string
  user: any
  urls: any
}

const MainMarkup: React.FC<IProps> = ({ photos }) => {
  const { cardWidth } = useDeviceWidth()

  if (photos !== null)
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {photos.map((el: PhotoProps) => (
            <PhotoCard cardWidth={cardWidth} key={el.id} {...el} />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    )
  }
}

export default MainMarkup

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
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
  },
  headerPhotoText: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    fontSize: 25,
  },
  item: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 230,
    backgroundColor: 'gray',
    borderRadius: 8,
    marginBottom: 10,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
})
