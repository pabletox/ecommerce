
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div className='h-full'>
        <NavBar />
        <ItemListContainer saludo={'Pronto los mejores componentes Gamers'}/>
      
      </div>

    </>
  )
}

export default App
