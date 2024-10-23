import './App.css'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <div className='h-full bg-slate-300'>
        
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainerWithHoc/>} />
                <Route path="/category/:idCategory" element={<ItemListContainerWithHoc/>} />     
                <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />                
            </Routes>
              
        </BrowserRouter>
        
  
      
      </div>

    </>
  )
}

export default App
