import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <Button variant="secondary" onClick={handleGoBack}>Back</Button>
    )
}

export default BackButton