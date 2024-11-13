import React, { useContext, useState, useEffect } from 'react'
import Quantity from './Quantity'
import { cartContext } from '../context/CartContext'
import { ToastContainer, toast, Bounce } from 'react-toastify';


const QuantityContainer = ({product, prodQuantity}) => {
    const [quantity, setQuantity] = useState(prodQuantity)
    const {addProductIncartPlus1, Subtract} = useContext(cartContext)

    
    const SubtractQuantity = () => {
        //No es necesario revisar los negativos por que se destruira si llega a 0
        if(quantity>1){
          setQuantity(quantity-1)
          Subtract(product.id)
          toast.error('Se quito el producto!!! 😢', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }

    }

    const addQuantity = () => {
        //revisar que no sume mas alla del stock
        if (quantity+1 <= product.stock) {
          setQuantity(quantity+1)
          addProductIncartPlus1(product)
          toast.success('Producto agregado!!! 😎', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
        

    }
   

  return (
    <div>
        <Quantity quantity={quantity} restar={SubtractQuantity} sumar={addQuantity}></Quantity>
    </div>
  )
}

export default QuantityContainer