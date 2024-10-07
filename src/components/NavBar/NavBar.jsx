import {Container} from "react-bootstrap"
import CartWidget from "./CartWidget"
import "./navbar.css"
const NavBar = ({brand}) => {
    return(
        <Container fluid as="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <h1 className="title">{brand}</h1>
                </div>
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item me-3">Motores</li>
                        <li className="nav-item me-3">Variadores</li>
                        <li className="nav-item me-3">Helices</li>
                        <li className="nav-item me-3">Controladores</li>
                        <li className="nav-item me-3">Camaras</li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </Container>
    )
}
export default NavBar