import React, { useContext, useState, useEffect } from 'react'
import Quantity from './Quantity'
import { cartContext } from '../context/CartContext'


const QuantityContainer = ({product, prodQuantity}) => {
    const [quantity, setQuantity] = useState(prodQuantity)
    const {addProductIncartPlus1, Subtract} = useContext(cartContext)

    
    const SubtractQuantity = () => {
        //No es necesario revisar los negativos por que se destruira si llega a 0
        if(quantity>1){
          setQuantity(quantity-1)
          Subtract(product.id)
        }

    }

    const addQuantity = () => {
        //revisar que no sume mas alla del stock
        if (quantity+1 <= product.stock) {
          setQuantity(quantity+1)
          addProductIncartPlus1(product)
        }
        

    }
   

  return (
    <div>
        <Quantity quantity={quantity} restar={SubtractQuantity} sumar={addQuantity}></Quantity>
    </div>
  )
}

export default QuantityContainer