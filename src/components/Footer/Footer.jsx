import { Container, Row, Col } from "react-bootstrap"

import './footer.css'

const Footer = () => {
    return (
        <Container as="footer" fluid>
            <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="bi-facebook facebook" /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bi-instagram instagram" /></a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><i className="bi-whatsapp whatsapp" /></a>
            </div>
        </Container>
    )
}
export default Footer