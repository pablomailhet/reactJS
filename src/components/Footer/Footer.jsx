import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import './footer.css'
const Footer = () => {
    return (
        <Container as="footer" fluid>
            <Row className="d-flex justify-content-center">
                <Col className="text-center">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="faFacebook" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="faInstagram" /></a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="faWhatsapp" /></a>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer