import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner"
import "./App.css"
function App() {
  return (
    <>
      <NavBar brand={"RC Parts"} />
      <ItemListConteiner title={"Bienvenido a mi ecommerce."} />
    </>
  )
}

export default App