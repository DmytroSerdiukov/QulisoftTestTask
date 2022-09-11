import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchPhotos } from '../../store/reducers/photos'
import MainMarkup from './markup'

interface IProps {
  photos: any[]
}

const MainContainer: React.FC<IProps> = ({ photos }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  return <MainMarkup photos={photos} />
}

const mapStateTopProps = (state: any) => ({
  photos: state.photos.photos,
})

export default connect(mapStateTopProps)(MainContainer)
