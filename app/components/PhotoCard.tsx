import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type PhotoProps = {
  id: string
  user: any
  urls: any
  cardWidth: number
}

const PhotoCard: React.FC<PhotoProps> = ({ id, user, urls, cardWidth }) => {
  const navigation = useNavigation<any>()
  const onButtonClick = (id: string, url: string) => {
    navigation.navigate('Photo', { id: id, url: url })
  }

  return (
    <TouchableOpacity key={id} onPress={() => onButtonClick(id, urls.small)}>
      <Text style={styles.headerPhotoText}>{user.username}</Text>
      <View style={[styles.item, { width: cardWidth }]}>
        <Image
          style={styles.img}
          source={{ uri: urls.small }}
          resizeMode={'cover'}
          resizeMethod={'resize'}
        />
        <Text style={styles.text}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PhotoCard

const styles = StyleSheet.create({
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
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 8,
    marginBottom: 10,
    height: 200,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
})
