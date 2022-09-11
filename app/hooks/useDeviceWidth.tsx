import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

const useDeviceWidth = () => {
  const [cardWidth, setWidth] = useState<any>()
  useEffect(() => {
    const screenWidth = Dimensions.get('window').width
    let photoCardWidth: number = screenWidth - 40
    setWidth(photoCardWidth)
    if (screenWidth >= 768) {
      photoCardWidth = screenWidth - 80
      setWidth(photoCardWidth)
    }
  }, [])

  return { cardWidth }
}

export default useDeviceWidth
