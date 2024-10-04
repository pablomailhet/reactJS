import {Container} from "react-bootstrap"
const ItemListConteiner = ({title}) => {
    return(
        <Container fluid as="main">
            <section>
                <h2>{title}</h2>
            </section>
        </Container>
    )
}
export default ItemListConteiner