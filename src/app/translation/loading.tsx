import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
  return (
    <div className='p-12 bg-gray-200'>
      <Skeleton count={1} width="170px" height="40px" />
      <Skeleton count={1} width="200px" height="70px" />
      <Skeleton count={1} height="300px" />
    </div>
  )
}

export default loading