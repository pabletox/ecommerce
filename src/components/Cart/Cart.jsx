import React, { useContext, useState } from 'react'
import { cartContext } from '../context/CartContext'
import QuantityContainer from './QuantityContainer'
import { Link } from 'react-router-dom'

const Cart = () => {
    
  const [existItem, setExistItem] = useState (false)
  const {cart, totalPrice, deleteProductById, deleteCart} = useContext(cartContext)

  return (
    <>
      <div>
        { cart.length > 0 ? 
          (
            <div>
              {
                
                cart.map((productCart)=> (
                  <div key={productCart.id} style={{ display: "flex", justifyContent: "space-around" }}>
                    <img src={productCart.image} alt="" width={100} />
                    <p>{productCart.name}</p>
                    <p>Precio c/u: {productCart.price}</p>
                    <QuantityContainer product={productCart} prodQuantity={productCart.quantity}></QuantityContainer>
                    
                    <p>Cantidad: {productCart.quantity}</p>
                    
                    <p>Precio parcial: {productCart.quantity * productCart.price}</p>
                    <button onClick={ () => deleteProductById(productCart.id) } >eliminar producto</button>
                  </div>
                ))
              }
              <p>Precio total: {totalPrice()}</p>
              <button onClick={deleteCart} >Vaciar carrito</button>
              <Link to ="/checkout" ><button >Check out</button></Link>
            
            </div>
          ) : (
            <p>No se ha ingresado productos aun</p>
          )
        }
      </div>
    </>
  )
}

export default Cart