import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
  return (
    <div className='p-12 bg-gray-200'>
      <Skeleton count={1} width="150px" height="40px" />
      <div className='grid sm:grid-cols-2 gap-4 rounded-lg my-2'>
        <Skeleton count={1} width="100%" height="500px" />
        <Skeleton count={1} width="100%" height="500px" />
      </div>  
      <div>
        <Skeleton count={1} height="500px" />
      </div>
    </div>
  )
}

export default loading