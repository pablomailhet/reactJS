import { PropagateLoader } from 'react-spinners'
import './loading.css'

const Loading = () => {
    return (
        <div className="propagateLoaderContainer">
            <PropagateLoader color="#067500" />
        </div>
    )
}

export default Loading