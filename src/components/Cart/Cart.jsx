import React, { useContext, useState } from 'react'
import { cartContext } from '../context/CartContext'
import QuantityContainer from './QuantityContainer'
import { Link } from 'react-router-dom'

const Cart = () => {
    
  const [existItem, setExistItem] = useState (false)
  const {cart, totalPrice, deleteProductById, deleteCart} = useContext(cartContext)

  return (
    <>
      <div className="p-6">
        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((productCart) => (
              <div
                key={productCart.id}
                className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md"
              >
                <img src={productCart.image} alt={productCart.name} className="w-24 h-24 object-cover rounded" />
                <p className="text-lg font-semibold">{productCart.name}</p>
                <p className="text-gray-700">Precio c/u: ${productCart.price}</p>

                <QuantityContainer product={productCart} prodQuantity={productCart.quantity} />


                <p className="text-gray-800 font-semibold">Subtotal: ${productCart.quantity * productCart.price}</p>

                <button
                  onClick={() => deleteProductById(productCart.id)}
                  className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                >
                  Eliminar
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <p className="text-xl font-bold">Total: ${totalPrice()}</p>
              <div className="space-x-4">
                <button
                  onClick={deleteCart}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Vaciar carrito
                </button>
                <Link to="/checkout">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                    Terminar compra
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No se ha ingresado productos aún</p>
        )}
      </div>
    </>
  )
}

export default Cart