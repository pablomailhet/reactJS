import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './loadingskeleton.css'

const LoadingSkeleton = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Skeleton inline width={80} className='skeleton' />
            <Skeleton inline width={110} className='skeleton' />
            <Skeleton inline width={60} className='skeleton' />
            <Skeleton inline width={120} className='skeleton' />
            <Skeleton inline width={70} className='skeleton' />
            <Skeleton inline width={70} className='skeleton' />
            <Skeleton inline width={60} className='skeleton' />
            <Skeleton inline width={30} className='skeleton' />
        </div>
    )
}

export default LoadingSkeleton