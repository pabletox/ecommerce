import './App.css'
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/context/CartContext'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CheckOut } from './components/CheckOut/CheckOut'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='h-full bg-slate-300'>
        
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<ItemListContainerWithHoc/>} />
                    <Route path="/category/:idCategory" element={<ItemListContainerWithHoc/>} />     
                    <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />   
                    <Route path="/checkout" element={<CheckOut/>} />                
                </Routes>
            </CartProvider>      
        </BrowserRouter>
        
  
      
      </div>

    </>
  )
}

export default App
