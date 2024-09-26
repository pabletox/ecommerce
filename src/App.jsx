
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div >
        <NavBar />
        <ItemListContainer saludo={'Bienvenido al E-commerce'}/>
      
      </div>

    </>
  )
}

export default App
