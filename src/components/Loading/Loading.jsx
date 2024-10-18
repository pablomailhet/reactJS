import './loading.css'
import { PropagateLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="loading">
            <PropagateLoader color="#067500" />
        </div>
    )
}

export default Loading