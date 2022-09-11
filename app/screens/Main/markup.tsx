import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  photos: PhotoProps[];
}

type PhotoProps = {
  id: string;
  name: string;
  small: string;
};

const MainMarkup: React.FC<IProps> = ({photos}) => {
  const navigation = useNavigation();
  const onButtonClick = (id: string, url: string) => {
    navigation.navigate('Photo', {id: id, url: url});
  };

  if (photos)
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {photos.photos.map((el: PhotoProps) => (
            <TouchableOpacity
              key={el.id}
              onPress={() => onButtonClick(el.id, el.urls.small)}>
              <Text style={styles.headerPhotoText}>{el.user.username}</Text>
              <View style={styles.item}>
                <Image
                  style={styles.img}
                  source={{uri: el.urls.small}}
                  resizeMode={'cover'}
                />
                <Text style={styles.text}>{el.user.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
};

export default MainMarkup;

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
    width: 350,
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
});
