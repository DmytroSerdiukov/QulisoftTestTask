import axios from 'axios'

export const PhotosAPI = {
  fetchPhotos: async () => {
    try {
      const response: any = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id:
            '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
        },
      })
      return response.data
    } catch (e) {
      throw e
    }
  },
}
